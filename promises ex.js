
// waiting for wife to show the tickets in queue

console.log('person1: shows ticket');
console.log('person2: shows ticket');

// person 3 is waiting for wife to get the tickets
//const wifeBrinsTickets= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve('tickets');
//    },2000);
//})
//
//const popcorn = wifeBrinsTickets.then((t)=>{
//    console.log('person3:');
//    console.log('wife: i have the tickets');
//    console.log('husband: we should go in');
//    console.log('wife: i am hungry');
//    return new Promise((resolve ,reject)=>resolve(`${t} popcorn`));
//    
//})
//
//const drink=popcorn.then((t)=>{
//    console.log('husband: we should go in');
//    console.log('wife: i want some drink');
//    return new Promise((resolve,reject)=>resolve(`${t} drinnk`))
//})
//
//drink.then((t)=>console.log(t));

// conventional way is
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tickets');
    },2000);
})
.then((t)=>{
    console.log('person3:');
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: i am hungry');
    return new Promise((resolve ,reject)=>resolve(`${t} popcorn`));
})
.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i want some drink');
    return new Promise((resolve,reject)=>resolve(`${t} drinnk`))
}).then((t)=>console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');