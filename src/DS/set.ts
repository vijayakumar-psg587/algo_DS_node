export class CustomSet<T>{
    private arr: T[]
    private count: number;
    constructor() {
        this.arr = [];
        this.count = 1;
    }

    size = function() {
        return this.count;
    }

    add = (element: T) => {
        if(this.has(element)) {
            return false;
        } else {
            this.arr.push(element);
            this.count++;
            return true;
        }
    }

    addAtIndex = (index: number, element:T): boolean => {
        if(this.arr.length >= index && !this.has(element)) {
          
               
                this.arr.splice(index, 0, element);
            
            this.count++;
          
            return true;
           
        } else {
           return false;
        }
    }

    remove = (element:T): T[] => {
        if(this.has(element)) {
            const index = this.arr.indexOf(element);
            const result = this.arr;
            delete this.arr[index];
            this.count--;
            return result;  
        } else {
            return null;
        }
    }

    removeAtIndex = (index: number):T[] => {
        if(this.size() > index) {
            const result = this.arr;
            delete this.arr[index];
            this.count--;
            return result;  
        } else {
            return null;
        }
    }


    has = (element: T): boolean => {
        return this.arr.indexOf(element) !== -1;
    }

    get = () => {
        return this.arr;
    }
}