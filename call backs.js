//console.log("hello world!");
// callback funtcion
//a function which take another functio an parameter and call it
    // right after the present function ends
const posts=[
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}

]

function getposts(){
    setTimeout(() => {
        let output="";
        posts.forEach((value)=>{
            output += `<li>${value.title}</li>`;
        });
        document.body.innerHTML=output;

    }, 1000);
}

function createpost(obj,callback){
    setTimeout(()=>{
        posts.push(obj);
        callback();
    },2000);
}

//getposts();
createpost({title:'post three',body:'this is post three'},getposts);