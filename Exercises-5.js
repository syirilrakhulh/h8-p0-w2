var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log('Task 1')
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

console.log('')

var word = 'wow JavaScript is so cool';
var word1 = word[0] + word[1] + word[2];
var word2 = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; 
var word3 = word[15] + word[16];
var word4 = word[18] + word[19];
var word5 = word[21] + word[22] + word[23] + word[24]

console.log('Task 2');
console.log('First Word: ' + word1);
console.log('Second Word: ' + word2);
console.log('Third Word: ' + word3);
console.log('Fourth Word: ' + word4);
console.log('Fifth Word: ' + word5);

console.log('')

var word = 'wow JavaScript is so cool';
var word1 = word.substring(0,3); 
var word2 = word.substring(4,14);
var word3 = word.substring(15,17);
var word4 = word.substring(18,20);
var word5 = word.substring(21,25);
    
console.log('Task 3');
console.log('First Word: ' + word1);
console.log('Second Word: ' + word2);
console.log('Third Word: ' + word3);
console.log('Fourth Word: ' + word4);
console.log('Fifth Word: ' + word5);

console.log('')

var word = 'wow JavaScript is so cool';
var word1 = word.substring(0,3); 
var word2 = word.substring(4,14);
var word3 = word.substring(15,17);
var word4 = word.substring(18,20);
var word5 = word.substring(21,25);

var lengthword1 = word1.length;
var lengthword2 = word2.length;
var lengthword3 = word3.length;
var lengthword4 = word4.length;
var lengthword5 = word5.length;

console.log('Task 4');
console.log('First Word: ' + word1 + ', with length : ' + lengthword1 );
console.log('Second Word: ' + word2 + ', with length : ' + lengthword2 );
console.log('Third Word: ' + word3 + ', with length : ' + lengthword3 );
console.log('Fourth Word: ' + word4 + ', with length : ' + lengthword4 );
console.log('Fifth Word: ' + word5 + ', with length : ' + lengthword5 );