console.log('Task 1')
console.log('')

var ilc=0

console.log('Looping Pertama')
while(ilc<20){
    ilc +=2
    console.log(ilc + ' - i love coding')   
}

console.log('')

var iwbfd=20

console.log('Looping Kedua')
while(iwbfd>0){
    console.log(iwbfd + ' - i will become fullstack developer')
    iwbfd -=2
}

console.log('')
console.log('Task 2')
console.log('')

console.log('Looping Pertama')

for(var ilc=1;ilc<=20;ilc++){
    console.log(ilc + ' - i love coding')   
}

console.log('')
console.log('Looping Kedua')

for(var iwbfd=20;iwbfd>0;iwbfd--){
    console.log(iwbfd + ' - i will become fullstack developer')   
}

console.log('')
console.log('Task 3')
console.log('')

for(var bilangan=1;bilangan<=100;bilangan++){
    if (bilangan % 2 != 0){
        console.log(bilangan + ' GANJIL')
    } else
      console.log(bilangan + ' GENAP')
}

console.log('')

for(var bilangan=1;bilangan<=100;bilangan += 2){
    if (bilangan % 3 == 0){
        console.log(bilangan + ' kelipatan 3')
    }
    else {
        console.log(bilangan)
    }
}

console.log('')

for(var bilangan=1;bilangan<=100;bilangan += 5){
    if (bilangan % 6 == 0){
        console.log(bilangan + ' kelipatan 6')
    }
    else {
        console.log(bilangan)
    }
}

console.log('')

for(var bilangan=1;bilangan<=100;bilangan += 9){
    if (bilangan % 10 == 0){
        console.log(bilangan + ' kelipatan 10')
    }
    else {
        console.log(bilangan)
    }
}