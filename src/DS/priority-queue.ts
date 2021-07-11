import { QueueNode } from "./models/queue-node";

export class PriorityQueue<T> {
    private queueNodes:QueueNode<T>[]; 
    private count:number;
    constructor(){
        this.queueNodes = new Array<QueueNode<T>>();
        this.count = 0;
    }

    size = () => {
        return this.count;
    }

    get(){
        return this.queueNodes;
    }

    // add elements 
    enqueue = (element:QueueNode<T>) => {
        //queue the element based on priority - if the incoming element has least priorty then add it to the last
        let isElementAdded: boolean = false;
        if(this.queueNodes.length === 0){
            this.queueNodes[0] = element;
            isElementAdded = true;
        } else {
            this.queueNodes.forEach((currNode, index) => {
                if(!isElementAdded && currNode.priority < element.priority){
                    
                    this.queueNodes.splice(index,0,element);
                    isElementAdded = true;
                    
                }
            });
        }
        if(!isElementAdded) {
            // means even after all iterations - it doesnt satisfy, queue the element at the very end
            this.queueNodes.push(element);
            isElementAdded = true;
        }

        this.count++;
        return this.queueNodes.length;
    }

    dequeue =()=> {
        //always remove the first element from the array
       this.queueNodes.shift();
       this.count--;
       return this.queueNodes.length;
    }
}