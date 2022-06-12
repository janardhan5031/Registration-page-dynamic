
class Queue{
    constructor(){
        this.arr=[];
        
    }
    Enqueue(value){
        this.arr.push(value);
    }
    Dequeue(){
        if(this.is_empty()){
            console.log('under flow');
        }
        else{
            this.arr.shift();
        }
    }
    Front(){
        if(this.is_empty()){
            console.log('under flow');
        }
        else return this.arr[0];
    }
    is_empty(){
        let len=this.arr.length-1;
        if(len==-1){
            return true;
        }else return false;
    }

    display(){
        let  len=this.arr.length-1;
        let ptr=0;
        let str='';
        while(ptr<=len){
            str+=this.arr[ptr]+'  ';
            ptr++;
        }
        console.log(str);
    }
    Push(value){
        this.Enqueue(value);
    }
    Pop(){
        this.arr.pop();
    }
    Top(){
        if(!this.is_empty()){
            return this.arr[this.arr.length-1];
        }else{
            console.log('there is no elements in the top');
        }
    }
}

// driver code
let qu=new Queue();
qu.Push(80);
qu.Push(90);
qu.Push(10);
qu.Push(30);
qu.Push(40);

qu.Pop();
console.log(qu.Top());






qu.display();
