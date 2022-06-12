
console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const premovie= async ()=>{
    const wifebringsticket=new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('ticket');
        }, 2000);
    });

    const getpopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const getdrink= new Promise((resolve,reject)=>resolve('drink'));
    const getglasses=new Promise((resolve,reject)=>resolve('glasses'));

    let ticket;
    try{
        ticket=await wifebringsticket;
    }catch{
        ticket='sad face';
    }

    //console.log(`wife: i have the ${ticket}`);
    //console.log(`husband: we should go in`);
    //console.log(`wife: no i am hungy`);

    //let popocorn=await getpopcorn;
    //console.log(`husband: i got some ${popocorn}`);
    //console.log(`husband: we should go in`);
    //console.log(`wife: no i want drink`);

    //let drinks=await getdrink   ;
    //console.log(`husband: i got some ${drinks}`);
    //console.log(`husband: we should go in`);
    //console.log(`wife: i want 3d glasses`);

    //let glass=await getglasses;
    //console.log(`husband: i got 3d ${glass} for you`);
    //console.log(`husband: we sould go in`);
    //console.log(`sure`)

    // instead of waiting for each promise to complete synchronously
    //we can do this in asynchronous way instead
    // like if husband went for get popcorn, wife will went for get drinks 

    let [popcorn,drink,glasses]=await Promise.all([getpopcorn,getdrink,getglasses]);

    console.log(`${popcorn} ${drink} ${glasses}`);
    
    return ticket;
}

premovie().then((m)=>console.log(`person3: shows ${m}`));


console.log(`person 5: shows ticket`);
console.log(`person 4: shows ticket`);














//async function jani(){
//    return "hello world";
//}
//
//jani().then((m)=>console.log(m));