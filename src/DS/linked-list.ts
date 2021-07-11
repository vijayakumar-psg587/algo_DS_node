
import { LinkedListNode } from "./models/linked-list-node";

export class LinkedList<T> {
    private linkedListData:LinkedListNode<T>[];
    private prevNode: LinkedListNode<T>;
    private head: LinkedListNode<T>;
    constructor() {
        this.linkedListData = [];
     }

    add(element: T|T[]): boolean {  
        
        let linkedNode;
        linkedNode = new LinkedListNode<T>();
        linkedNode.data = element;  
        
        if(!this.head){
            // create it as new linkedListNode
            this.prevNode = linkedNode;
            this.head = linkedNode;
            linkedNode.next = null;
        } else {
            // so new element being added, so the next should contain the incoming element
            linkedNode.next = null;
            this.prevNode = this.linkedListData[this.linkedListData.length-1];
            this.prevNode.next = linkedNode;
        }
        this.linkedListData.push(linkedNode);
        return true;
    }

    get = () => {
        return this.linkedListData;
    }

    headElement = () => {
        return this.head.data;
    }
}