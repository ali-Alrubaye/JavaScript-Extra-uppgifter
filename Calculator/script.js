document.addEventListener("DOMContentLoaded", function(e) {
    let clear_input = true;

    let fields_num = document.querySelectorAll('td.field-num');

    let fields = document.querySelectorAll('td.field');
    let input_field = document.getElementById('input_field');


    fields.forEach(f => {
        f.addEventListener('click', function(e) {
            let results = e.target.dataset.symbol.split(/\+|\-|\×|\÷/g);

            if (clear_input) {
                input_field.innerText = '';
                clear_input = false;
            }
            // console.log(input_field.innerText);
            if (results == '=') {
                input_field.innerText = calculate(input_field.innerText);
                // input_field.innerText = ''
            } else if (e.target.dataset.symbol == '+/-') {
                let test_length = input_field.innerText.length;
                // todo
            } else {
                input_field.innerText += e.target.dataset.symbol;
            }
        })
    });
    document.getElementById('clear').addEventListener('click', (e) => {
        input_field.innerText = 0;
        clear_input = true;
    })

    function equal_click(value) {
        let numbers = value.split(/\+|\-|\×|\*|\/|\÷/g);
        let operators = Array.from(value.replace(/[0-9]|\./g, "")) //.split('');
        console.log(operators)
        console.log(numbers)

        let result = value.split('');
        let Operand_result = result.reduce((accumulator, currentValue, index, array) => {
            // console.log(accumulator, currentValue, index, array[index])
            if (index == 0) {
                accumulator.push(array[0]);
                console.log('inde', accumulator)
            }
            if (array[index] === '+') {
                const num = Number(accumulator) + Number(array[index + 1]);
                accumulator.pop();
                accumulator.push(num);
            } else if (array[index] === '-') {
                const num = Number(accumulator) - Number(array[index + 1]);
                accumulator.pop();
                accumulator.push(num);
            } else if (array[index] === '×') {
                const num = Number(accumulator) * Number(array[index + 1]);
                accumulator.pop();
                accumulator.push(num);
            } else if (array[index] === '÷') {
                const num = Number(accumulator) / Number(array[index + 1]);
                accumulator.pop();
                accumulator.push(num);
            }
            return accumulator;
        }, []);
        return Operand_result;

        // switch (operators) {
        //     case "+":
        //         return Number(numbers[0]) + Number(numbers[1]);

        //     case '-':
        //         return Number(numbers[0]) - Number(numbers[1]);

        //     case '×':
        //         return Number(numbers[0]) * Number(numbers[1]);

        //     case '÷':
        //         return Number(numbers[0]) / Number(numbers[1]);
        //     default:
        //         return "invalid arguements"

        // }
    }


    // Calculate work OK
    function calculate(value) {
        let numbers = value.split(/\+|\-|\×|\*|\/|\÷/g);
        let operators = Array.from(value.replace(/[0-9]|\./g, ""));
        let acc = [];

        for (let i = 0; i < operators.length; i++) {
            const op = operators[i];
            if (acc.length == 0) {
                acc.push(numbers[0]);
            }
            if (op === '+') {
                const num = Number(acc) + Number(numbers[i + 1]);
                acc.pop();
                acc.push(num);
            } else if (op === '-') {
                const num = Number(acc) - Number(numbers[i + 1]);
                acc.pop();
                acc.push(num);
            } else if (op === '×') {
                const num = Number(acc) * Number(numbers[i + 1]);
                acc.pop();
                acc.push(num);
            } else if (op === '÷') {
                const num = Number(acc) / Number(numbers[i + 1]);
                acc.pop();
                acc.push(num);
            }
        }
        return acc;
    }
})