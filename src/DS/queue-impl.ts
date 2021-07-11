import { QueueNode } from "./models/queue-node";
import { QueueModelNode } from "./models/queue-model-node";

export class QueueImpl<T> implements QueueModelNode<T> {

    counter = 0;
    private dataArray: T[];
    constructor() {
        this.dataArray = [];
    }
    enqueue(dataToQueue:T): boolean {
        this.dataArray.push(dataToQueue);
        this.counter++;
        return true;
        
    }
    dequeue(): T {
        if(this.counter === 0) {
            throw new Error('No data in queue to dequeue');
        }else {
            this.counter--;
            return this.dataArray.shift();
        }
    }

    size = () => {
        return this.counter;
    }
    
    
}