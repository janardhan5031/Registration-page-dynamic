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
            str+='  '+this.arr[ptr];
            ptr++;
        }
        console.log(str);
    }
}

// driver code
let qu=new Queue();
qu.Enqueue(10);
qu.Enqueue(20);
qu.Enqueue(30);
qu.Enqueue(40);
qu.Enqueue(50);
qu.Dequeue();

qu.display();
