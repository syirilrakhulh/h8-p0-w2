function shoutOut(){
    return ('Hello Function!')
}
console.log(shoutOut())

function calculateMultiply(num1,num2){
    return num1 * num2
}
var num1 = 5
var num2 = 6

var hasilPerkalian = calculateMultiply(num1,num2)
console.log(hasilPerkalian)

function processSentence(name,age,address,hobby){
    return ('Nama saya adalah ' + name + ' umur saya ' + age + ' tahun ' + 'alamat saya di ' + address + ' hobi saya adalah ' + hobby)
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogjakarta"
var hobby = "gaming"

var fullSentence = processSentence(name,age,address,hobby)
console.log(fullSentence)