/**
 * Skriv ett mönster som matchar mailadresser. Den personliga delen av mailadressen (delen innan @-tecknet) får innehålla följande:

Versaler (A-Z) och gemener (a-z) av engelska bokstäver.
Siffror (0-9).
Tecknena ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Tecknet . (punkt) om det inte är det första eller sista tecknet och inte följer en annan punkt, dvs man får inte ha två punkter i rad.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://regex101.com/
 */
// ^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@([\w-]+\.)+[\w-]{2,4}$