export class Queue<T>{
    private arr:T[]; 
    private count:number;
    constructor(){
        this.arr = [];
        this.count = 0;
    }

    size = () => {
        return this.count;
    }

    get(){
        return this.arr;
    }

    // add elements 
    enqueue = (element:T) => {
        if(this.arr.length == 0){
            // first element in array
            this.arr[0] = element;
            }else {
            this.arr.push(element); //adds the element to the end always
        }
        this.count++;
        return this.arr.length;
    }

    dequeue =()=> {
        //always remove the first element from the array
        this.arr.shift();
        this.count--;
        return this.arr.length;
    }
}