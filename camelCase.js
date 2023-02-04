/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function () {
    return this.split(' ').map(el => el.length ? el[0].toUpperCase() + el.slice(1) : el).join('')    
}

// function camelCase(str){
//     let arr = str.split(' ')
//     let arr2 = arr.map(el => `${el[0].toUpperCase()}${el.substring(1)}`)
//     return arr2.join('')
// }
console.log(" camel case method".camelCase())
