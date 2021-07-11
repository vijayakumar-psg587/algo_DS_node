export class Stack {
    private data: any[];
    private lastElement: any
    private firstElement: any;
    
    constructor(){
        this.data = [];
        this.lastElement =null;
        this.firstElement=null;
    }

    push = (ele) => {
        this.data.push(ele);
        this.firstElement = this.data[0];
        this.lastElement = ele;
    }
    pop = () => {
         if(this.data && this.data.length >=1) {
             if(this.firstElement === this.lastElement && this.data.length === 1){
                 // means its the llast element here
                 this.firstElement = null;
                 this.lastElement = null;
                 this.data = []
             } else {
                this.data = this.data.slice(0, this.data.length-1)
                this.firstElement = this.data[0];
                this.lastElement = this.data[this.data.length-1]
             }
             
         } else {
             throw new Error('Index out of bounds: Going  beyond index 0 is not permitted')
         }
         
    }

    getElements = () => {
        if(this.data){
            return this.data;
        }else {
            throw new Error('Index out of bounds: stackList is empty')
        }
    }

    setElements = (elementArr:any[]) => {

        elementArr.forEach(item => this.push(item));
    }

    getFirstElement= () => {
        if(this.data && this.data.length >= 1){
            return this.firstElement;
        }else {
            return null;
        }
    }

    getLastElement = ()=> {
        if(this.data && this.data.length >= 1){
            return this.lastElement;
        }else {
            return null;
        }
    }
}