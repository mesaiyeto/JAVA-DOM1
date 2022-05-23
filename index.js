//1
for (let i = 1; i <=100; i++) {
    let evenNumber = []
    if (i % 2 == 0){
        evenNumber.unshift(i)
        console.log(evenNumber)
    }
}

//2
function EvenNumbers(A, B){
    for(let i = A + 1; i < B; i++)
    {
        if (i % 2 == 0){
            return i
        }
    }
}
EvenNumbers(1, 20)
console.log(EvenNumbers(1, 20))

//3

'B';

//4
function firstFunction(number1, number2){
    const x = number1 + number2;
    return x;
}
firstFunction(7, 3)
console.log(firstFunction(7,3))


//5

function printSum(){
    console.log(2 + 7)
}
printSum()

//6

function classMateNames(){
    let x = ['Oluwapelumi Olukanni', 'Precious Donald' , 'Ifeoluwa Babarimisa' , 'Aijalon Bode' , 'Adebajo Adedoyin', 'Okeyemi Henry',
        'Damilola Idris', 'Sam' , 'Oremune Okoze', 'Udo Ijibike']
    return x
}
console.log(classMateNames())

//7
const array1 = [1,2,4]
array1.push(7)
console.log(array1)

//8
const array2 = [1,2,3,8]
array2.pop()
console.log(array2)

//9
const array3 = [23.77, 80, 45]
array3.shift()
console.log(array3)

//10
const array4 = [[20,30,80], [10,50,55]]
array4.unshift([7,8,9])
console.log(array4)