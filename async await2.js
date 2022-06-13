
function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('got our car');
        },2000);
    });
}

function gotogoa(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('go to goa');
        },1000)
    });
}

//console.log('hello')
async function fun(){

    let msg;
    let msg2;
    try{
        msg=await buycar();
        console.log(msg);
    }
    catch{
        msg=' dont have car';
        console.log(msg);
    }
    try{
        msg2=await gotogoa();
        console.log(msg2);
    }
    catch{
        msg2='cant go to goa';
        console.log(msg2);
    }
}

fun();