// The main idea is to count all the occurring characters in a string. 
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

const string = 'ababa'

const charcterCounter = (string) => {
    let obj = {}
    let obj2 = {}
    for (const character of string.split("")) {
        obj = {
            ...obj,
            [character]: obj[character] ? obj[character] + 1 : 1
        }
    }


    string.split("").forEach(character =>
        obj2 = {
            ...obj2,
            [character]: obj2[character] ? obj2[character] + 1 : 1
        })

    return obj2
}

console.log(charcterCounter(string))