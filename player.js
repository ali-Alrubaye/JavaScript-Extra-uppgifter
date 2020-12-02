/**
 * Skapa klassen Player som ska hålla reda på en spelares namn och poäng.
Skapa metoderna add_points() och deduct_points() som lägger till respektive tar bort poäng från spelaren.
Skapa en statisk metod som tar emot en array av spelare och skriver ut en lista över spelarna i poängordning, en high score-lista.
Skapa ett par spelare med olika poäng.
Lägg till och ta bort poäng och skriv ut highscore-listan mellan varje för att se att den fungerar.
 */


class Player {
    static count = 1;
    constructor(name, points = 0) {
        this.id = Player.count++;
        this.name = name;
        this.points = points;
        this.turns = false;
    }
    add_points(points = 5) {
        this.points += points;
    }
    deduct_points(points) {
        if (this.points > points) {
            this.points -= points;
        } else {
            this.points = 0;
        }
    }
}
// .sort((a, b) => a.points < b.points ? -1 : a.points > b.points ? 1 : 0);
class Players {
    constructor() {
        this.players = [];
    }
    add_player(player) {
        if (player) {
            this.players.push(player);
        } else {
            console.log('Måste skriva player objekt')
        }
    }
    print_players() {
        for (const p of this.players) {
            console.log(p)
        }
    }
    get_all_players() {
        return this.players;
    }
    add_points(id, points) {
        this.players.forEach(p => {
            if (p.id === id) {
                p.points += points
            };

        })
    }
    deduct_points(id, points) {
        this.players.forEach(p => {
            if (p.id === id) {
                if (p.points > points) {
                    p.points -= points
                } else {
                    p.points = 0;
                }
            }
        })
    }
    static higHscore = function(players) {
        let sortPlayers = players.sort((a, b) => b.points - a.points)
        for (const p of sortPlayers) {
            console.log(`${p.name} - ${p.points}`)
        }
    }

}

let player1 = new Player('Ali', 50);
let player2 = new Player('Kalle', 53);
let player3 = new Player('Laers', 60);

let players = new Players();

players.add_player(player1);
players.add_player(player2);
players.add_player(player3);


players.add_points(1, 20);
players.print_players();

console.log('--'.repeat(20))
players.add_points(1, 10);
players.print_players();
console.log('--'.repeat(20))
Players.higHscore(players.get_all_players())

console.log('--'.repeat(20))
players.deduct_points(1, 40);
players.print_players();

console.log('--'.repeat(20))
Players.higHscore(players.get_all_players())