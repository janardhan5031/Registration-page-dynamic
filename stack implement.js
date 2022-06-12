class mystack{
    constructor(){
        this.arr=[];
    }
    
   
    Push(value){
        this.arr.push(value);
    }
    Pop(){
        this.arr.pop();
    }
    Top(){
        let top=this.arr.length-1;
        return this.arr[top];
    }
    Is_empty(){
        let top=this.arr.length-1;
        if(top==-1){
            return true;
        }else return false;
    }

    display(){
        console.log(this.arr);
    }

}

// dirver code
let st =new mystack();
st.Push(10);
st.Push(20);
st.Push(30);
st.Push(40);
st.Pop();
console.log(st.Is_empty());
console.log(st.Top());
st.display();

while(!st.Is_empty()){
    console.log(st.Top());
    st.Pop();
}
