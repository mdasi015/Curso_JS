//function expression
/*const sum = function(number1, number2){
    console.log(number1 + number2)
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`o numero 1 e ${number1}`)
console.log(`o numero 2 e ${number2}`)
console.log(`a soma e ${sum(number1, number2)}`)

sum(1, 2)

let subject = 'Create video'

function createThink() {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

sayMyName();

function sayMyName() {
    console.log('alguma coisa')
}

const sayMyName = (name) {
    console.log(name)
}
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}
const mari = new Person("mari")
const joao = new Person("joao")
console.log(mari.walk())
console.log(joao.walk())

// transformar numeros e letras e letras em numeros
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// conta a quantidade de letras
let word = "Paralelepipido"
console.log(word.Manlength)
let number = 1234
console.log(String(number).length)

// fixar numeros de casas decimais e alterar ponto por virgula
let number = 743.65391245
console.log(number.toFixed(2).replace("." , ","))

// transformar letras maiusculas em minusculas vice e versa
let word = "Programar e muito bacana!"
console.log(word.toUpperCase()) // Maiuscula
console.log(word.toLowerCase()) // Minuscula

// Manipulano strings e arrays
let phrase = "Eu quero viver o Amor!"
let MyArray = phrase.split(" ") // separar por espacos
let phraseWithUnderscore = MyArray.join("_") // juntar 
console.log(phraseWithUnderscore.toLowerCase())

//buscar se tem a palabra no texto
let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("amor"))

//criar array com construtor
let myArray = new Array("a", "b", "c")
console.log(myArray)

 // contar elementos de um array 

 console.log(["a", "b", "c"].length)

 console.log(["a",
        {type: "array"},
    function() {return "alo"},
][1].type)

//trasformar arrays em cadeia de caracteres
let word = "Manipulacao"
console.log(Array.from(word))

// Manipulando Arrays
let techs = ["html", "css", "js"]

//adicionar um item no fim
console.log(techs.push("node.js"))
//adicionar no comeco
techs.unshift("sql")
//remover do fim
techs.pop()
//remover do comeco
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posicao do array
techs.splice(1, 1)
//encontrar a posicao de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)

let number = 1
console.log(false ? 'alo' : 'nada')

let name = new String('Mariana')
let age = new Number(23)
let date = new Date('2021-06-16')
name.surName = "Silva"
console.log(date)

// operadores unarios typeOf and delete
const person = {
    name: 'Mariana',
    age: 25,
}
delete person.age
console.log(person)

let pao = false
let queijo = true

const niceBreakfast = pao || queijo ? 'cafe top' : 'cafe ruim'
console.log(niceBreakfast)

let age = 29
const canDrive = age >= 18 ? 'can drive' : 'cannot drive'
console.log(canDrive)

let temperature = 39

if (temperature >= 37) {
    console.log('Febre alta')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
} else {
    console.log('Saudavel')
}

let expression = 'a'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break;
    case 'b':
        // codigo para expression b
        console.log('b')
        break;
    default:
        break;
}

function calculate (number1, operator, number2){
    let result 

    switch (operator) {
        case '+':  
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('nao implementado')
            break;
    }
    return result
}

console.log(calculate(4, '+', 10))

// throw
function sayMyName(name = ''){
    if (name === ''){
        throw new Error("Nome e obrigatorio")
    }
    console.log(name)
}

// try...catch
try {
    sayMyName('Mariana')
} catch(e){
    console.log(e)
}

console.log('apos ao try/catch')

// break - para a execucao do loop
// continue - pula a execucao do momento
for(let i = 100; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i)
}

let i = 0;
while (i < 10){
    console.log(i)

    i++;
}

// for...of
let name = 'Mari'
let names = ['Joao', 'Maria', 'Cris', 'Paulo']

for(let name of names){
    console.log(name)
}

let person = {
    name: 'John',
    age: 39,
    weight: 88.9,
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}

//Exercicio de notas, transformar numeros em letras.
function getScore(score){
    if(score >= 90 && score <= 100){
        string = 'A'
        console.log(String('Sua nota foi: ' + string))
    }
    else if(score >= 80 && score <= 89){
        string = 'B'
        console.log(String('Sua nota foi: ' + string))
    }
    else if(score >= 70 && score <= 79){
        string = 'C'
        console.log(String('Sua nota foi: ' + string))
    }
    else if(score >= 60 && score <= 69){
        string = 'D'
        console.log(String('Sua nota foi: ' + string))
    }
    else if(score < 60 && score >= 0){
        string = 'F'
        console.log(String('Sua nota foi: ' + string))
    }
    else{
        score =! 0 && 100
        console.log('Nota Invalida')
    }
    return string
}

// sistema para calcular receitas e despesas da familia
let family = {
    receitas: [3000, 1500, 550],
    despesas: [150.34, 80.65, 750.00, 657.23]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateReceitas = sum(family.receitas)
    const calculateDespesas = sum(family.despesas)

    const total = calculateReceitas - calculateDespesas
    const its0k = total >= 0

    let balanceText = "Negativo"

    if(its0k){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo e ${balanceText}: R$ ${total.toFixed(2)}`)
}
calculateBalance()


// transformar celsius em fahrenheit
// C = (F - 32) * 5/9 | F = C * 9/5 + 32

// Transform('50f)
function TransformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error ('Grau nao identificado')
    }

    // Fluxo ideal, F -> C
    let upgradedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo C ->
    if(celsiusExists){
        upgradedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    return formula(upgradedDegree) + degreeSign
}

try {
    console.log(TransformDegree('10C'))
    console.log(TransformDegree('50F'))
} catch (error) {
    console.log(error.message)
}
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionaria",
                author: "T. Marv Eker"
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce e Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)

for(let category of booksByCategory){
    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
            authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}
countAuthors();

function BooksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}

BooksOfAuthor('George S. Clason');