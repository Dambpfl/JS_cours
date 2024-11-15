// log de Hello JS!
console.log("Hello JS!"); // dans la console

/*
  Apprenons à coder
  en Javascript
*/

let age = 37; // creation variable

/*if (age >= ageMin) {
    // instruction(s) et/ou bloc(s)
}

while (k < 10) {
     // instruction(s) et/ou bloc(s)
}
*/

// TOUJOURS ECRIRE ENTRE GUILLEMETS SA VALEUR POUR LET ET CONST
// TOUJOURS EN CAMELCASE
let animal = "dog"; // déclaration et initialisation de la variable animal
animal = "cat"; // modification de sa valeur
animal = "bird" // modification de sa valeur

const deux = 2; // la valeur ne peut pas être modifiée
// la ligne suivante est mise en commentaire car elle provoque une erreur
// deux = 3; // -> Uncaught TypeError: Assignment to constant variable.

let quantite = 3;
const prix = 1.15;
const prenom = "John";
let repas = "pizza";
const criDuChien ="aboiement";

/* le nom d’une variable de type « boolean » commence par « is » (est) ou 
« has » (a), afin d’être identifiée facilement. */

let isAdult = true;
let isTaskDone = false;
const hasBeenToTokyo = true;

// PORTEE VARIABLE //

{
    let age = 37; // début de sa portée
    {
        {
        }
    }
} // fin du bloc dans lequel age est déclarée = fin de sa portée


// MODULO //

/* modulo = %  // a % b = reste de la division entière de a par b

ex : 7 % 3 vaut 1 // car 7/3 vaut 2 en div entière, il reste donc 1  (7-(2*3))
-> 7 = 2*3 + 1 // il y a 3*2 dans 7 donc reste 1

ex: 6 % 2 vaut 0 // car 6/2 vaut 3 en div entière, il reste donc 0 (6-(3*2))
-> 6 = 3*2 + 0 // il y a 2*3 dans 6 donc reste 0

ex: 2 % 9 vaut 2 // car 2/9 vaut 0 en div entière, il reste donc 2 (2 - (0*9))
-> 2 = 0*9 + 2  // il y a 0 x 9 dans 2 donc reste 2 */


// AJOUTER UNE VALEUR A UNE VALEUR EXISTANTE //

let numberToGuess = 2; // 2
numberToGuess += 3; // et = a 2+3 donc new valeur = 5
numberToGuess -= 2; // 5-2 = 3
numberToGuess++; // 3+1 = 4
numberToGuess *= 10; // 4x10 = 40
numberToGuess /= 2; // 40/2 = 20
numberToGuess %= 7; // 7*2 = 14 reste 6
numberToGuess--; // 6-1 = 5

// VALEUR D'EGALITE ET D'INEGALITE (BOOLEAN) //

/* 
== : même valeur
=== : même valeur et même type
!= : valeur differente
!== : valeur ou type different

&& : et
|| : ou
! : non
*/
console.log("true && true = " + (2 > 1 && 3 <= 3)); // true (tout est vrai)
console.log("true && false = " + (2 > 1 && 3 < 3)); // false (tout n'est pas vrai)
console.log("true || false = " + (2 > 1 || 3 < 3)); // true (au moins un est vrai)
console.log("false || false = " + (2 > 1 || 3 <= 3)); // false (pas un seul n'est vrai)

// 3 conditions liées
console.log("true || (true && false) = " + (true || (true && false))); // true
//           true || (true && false)  ===  true  ||  false  ==== true
console.log("(true || true) && false = " + ((true || true) && false)); // false
//            true || true  && false  ===    true && false  === false


// TERNAIRE //

const ageJohn = 20;
console.log("John est " + (ageJohn >= 18 ? "majeur" : "mineur") + " en France."); // concaténation
console.log(`John est ${ageJohn >= 21 ? "majeur" : "mineur"} aux Etats-Unis.`); // interpolation (AltGr + 7)


// switch/case

let action = "virement";

switch (action) {
    case "retrait":
        // instructions retrait
        break;

    case "virement":
        // instructions virement
        break;
    
    case "cloturerCompte":
        // instructions de cloture de compte
        break;

    default:
        //instructions par defaut
        break;
}

// exemple
let numberToGuess2 = 7;
let operation = "foisDeuxPlusTrois";

switch (operation) {
    case "plusUn":
        numberToGuess2++;
        break;

    case "foisDeuxPlusTrois":
        numberToGuess2 *= 2;
        // PAS DE BREAK DONC CONTINUE
    
    case "plusTrois":
        numberToGuess2 += 3;
        break;

    case "foisZero":
    default:
        numberToGuess2 = 0;
        break;
}

// BOUCLE FOR //

// de A à B inclus
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
} // AFFICHE LA TABLE DE 3 JUSQU'A 3x10

// for "n fois"
for(let i = 0; i < 3; i++) {
    console.log("Je serai un bon développeur");
}

// le for de A à B inclus avec un pas diff de 1
for (let i= 3; i <= 10; i += 3) {
    console.log(`${i} est inférieur ou égal à 10 et est divisible par 3`);
}

// le for "inversé" (on décrément au lieu d'incrémenter)
for (let i = 5; i > 0; i--) {
    console.log(`${i}...`);
}
console.log("Bonne année !");

// BOUCLE WHILE

// AJOUTE +1 jusqu'à 18 dans ce cas
let kAge = 12;
while (kAge < 18) {
    console.log(`J'ai maintenant ${kAge} ans...`)
    kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);

// FONCTIONS //

// déclaré un fontion
function nomDeLaFonction(arg1,arg2,arg3) {
    //logique implémentée
    const result = arg1 * arg2 + arg3;
    // renvoi d'un résultat
    return result;
}

// appel a la fonction déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1, 2, 3);

// exemple
function getNombreFoisTrois(nombre) {
    return nombre * 3;
}

const cinqFoisTrois = getNombreFoisTrois(5); // cinqFoisTrois = 15

console.log("cinqFoisTrois = " + cinqFoisTrois);

// une fonction sans résultat retourné
function logPhraseAvecPointDExclamation(phrase) {
    console.log(`${phrase} !`);
}

logPhraseAvecPointDExclamation("Je serai un bon développeur");

// une fonction sans argument
function getApproximationPi() {
    return 3.14;
}
console.log(`360 deg = 2*pi ~= ${2 * getApproximationPi()} rad`);

//function qui retourne de l'addition de 2 nombres
function getResultatAddition2Nombres(nombre1, nombre2) {
    return nombre1 + nombre2;
}

// une fonction qui appelle d'autres fonctions
function getResultatCalculEntre2Nombres(nombre1, operation, nombre2) {
    switch(operation) {
        case "addition":
            return getResultatAddition2Nombres(nombre1, nombre2);
        case "soustraction":
            return getResultatAddition2Nombres(nombre1, -nombre2);

        default:
            console.log(`Opération "${operation}" non gerée`);
            return null;
    }
}

console.log(`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition", 2)}`);
console.log(`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction", 1)}`);

// TABLEAUX //

// initialiser un tableau vide
const tableauVide = [];
const tabNums = [11, 22, 33, 44, 55, 66, 77];

// ajouter un élément à la fin du tableau
tableauVide.push(2); // 0
tableauVide.push(3); // 1
tableauVide.push(7); // 2

console.log("tableauVide = ", tableauVide);

// recup un élément par son index
console.log("tableauVide[1] = ", tableauVide[1]);

// modifier la valeur de l'élément de l'index ici 2 donc "7"
tableauVide[2] = "abc";

console.log("tableauVide = ", tableauVide);

// boucler sur un tableau (de 0 à length-1)
for (let i = 0; i < tableauVide.length; i++) {
    // récupération de l'élément à l'index i
    const elementTableauVide = tableauVide[i];
    // log de cet élément
    console.log("tableauVide[" + i + "] = ", elementTableauVide);
}

// AJOUTE UN SEPARATEUR ENTRE CHAQUE ELEMENT DU TABLEAU
// .join   :  tabNums transformé en string avec _|_ entre chaque élément
console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`); 

// .includes(elementRecherche) : renvoi true/false si l'element est present ou non
console.log( //true
    `L'élement ${77} ${tabNums.includes(77) ? "est" : "n'est pas"}
    présent dans le tableau ${tabNums.join(", ")}`
)
console.log( //false
    `L'élement ${42} ${tabNums.includes(42) ? "est" : "n'est pas"} 
    présent dans le tableau ${tabNums.join(", ")}`
)

// .indexOf(elementRecherche) : renvoie l'index de l'élément recherché (entre 0 et lenght-1 si trouvé, -1 sinon)
const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1) {
    console.log(`L'élément ${77} est à l'index ${indexOf77} dans le tableau [${tabNums.join(", ")}]`);
} else {
    console.log(`L'élément ${77} n'est pas présent dans le tableau [${tabNums.join(", ")}]`);
}

// .slice renvoie une copie (sans impacter le tableau initial) d'un morceau du tableau (index du début inclus)(pas de fin)
const morceau = tabNums.slice(2, 4);
console.log(`morceau (tabNums.slice(2, 4)) = [${morceau.join(", ")}]`);

// AJOUTER DES ELEMENTS DANS UN TABLEAU ASSOCIATIF
let tabAssocVide = {};

tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;
console.log("tabAssocVide = ", tabAssocVide);

// acceder a une valeur
console.log(`Je m'appelle ${tabAssocVide.prenom}`);

// Crée un tableau associatif plus riche
// affectation à la variable pikachu, stockant ses infos et ses attaques
// données sur Pikachu récup d'internet
let pikachu = {
    id: 25,
    name: "Pikachu",
    weighKg: 6.0,
    hpMax: 80,
    attacks: [
        {
            name: "Vive-Attaque",
            damages: 10,
        },
        {
            name: "Boule Elek",
            damages: 20,
        },
    ],
};

console.log("pikachu =", pikachu);


// création d'une fonction, ainsi il sera simple d'appeler cette logique avec d'autres Pokemons
function listerAttaquePokemon(pokemon) {
    // écriture de la premiere ligne
    console.log(`${pokemon.name} possède ${pokemon.attacks.length} attaques :`);
    
    // pour chaque attaque (tableau indexé pokemon.attacks)
    for (let i = 0; i < pokemon.attacks.length; i++) {
        // récupération du tableau associatif de l'attaque (le i-ème élément)
    const attaque = pokemon.attacks[i]; 

    // écriture d'une ligne d'attaque
    console.log(`\t"${attaque.name} (puissance ${attaque.damages})`);
    }
}

listerAttaquePokemon(pikachu);