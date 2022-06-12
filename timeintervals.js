const posts=[
    {title: 'post one', body: 'this is post one',createdat: new Date().getTime()},
    {title: 'post two', body: 'this is post two',createdat: new Date().getTime()}

]

let id=0;
function getposts(){
    clearInterval(id);
    id=setInterval(() => {
        let output="";
        posts.forEach((value)=>{
            output += `<li>${value.title} Last seen at :- ${parseInt((new Date().getTime()-value.createdat)/1000)}  sec</li>`;
        });
        document.body.innerHTML=output;

    }, 1000);
    //clearInterval(id);
}

function createpost(obj,callback){      //using callback funciton
    clearInterval(id);
    id=setInterval(()=>{
        posts.push({...obj, createdat: new Date().getTime()});
        callback();
    },2000);
    //clearInterval(id);
}

function create4thpost(obj,callback){       //using callback function
    setTimeout(()=>{
        posts.push({...obj, createdat: new Date().getTime()});
        callback();
    },5000)
}

//getposts();
createpost({title:'post three',body:'this is post three'},getposts);
create4thpost({title:'post four',body:'this is post four'},getposts);



