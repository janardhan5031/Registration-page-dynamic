
const posts=[
    {title: 'post one', body: 'this is post one',activityTime:new Date().getTime()},
    {title: 'post two', body: 'this is post two',activityTime:new Date().getTime()}

]

function getdata(){
    setTimeout(() => {
        let data="";
        posts.forEach((value)=>{
            data+=`<li>${value.title} Last seen at ${parseInt((new Date().getTime()- value.activityTime)/1000)} sec</li>`;
        });
        document.body.innerHTML=data;
    }, 2000);
}

//promises
function createpost(obj){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let time=new Date().getTime();
            const error=false;
            
            if(!error){
                resolve(posts.push({...obj,activityTime:time}));
            }
            else{reject();}

        }, 2000);
    })
}

function delete_post(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const arr=posts.length;
            if(arr){
                posts.pop()
                resolve();
            }else{reject('Array is empty')}

        }, 1000);
    })
}



//console.log(posts);
createpost({title:'post three',body:'this is post three'})
.then(()=>{
    getdata();
    delete_post().then(getdata)
    .catch((error)=>console.log(error));

    createpost({title: 'post four',body:'this is post four'})
    .then(getdata)
    .catch((error)=>{console.log(error)})

    createpost({title: 'post five',body:'this is post five'})
    .then(getdata)
    .catch((error)=>{console.log(error)})
   
})
.catch(()=>{console.log("something went wrong")});

//delete_post().then(getdata)
//.catch((error)=>{console.log(error)});

//createpost({title: 'post four',body:'this is post four'})
//.then(getdata)
//.catch((error)=>{console.log(error)})

//createpost({title: 'post five',body:'this is post five'})
//.then(getdata)
//.catch((error)=>{console.log(error)})