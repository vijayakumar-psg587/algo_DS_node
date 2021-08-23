import { LinkedListNode } from './models/linked-list-node';

export class HashTable<V> {
  private tableSize: number;
  private dataHash: LinkedListNode<V>[][];
  constructor(size) {
    this.tableSize = size;
    this.dataHash = new Array<Array<LinkedListNode<V>>>();
  }

  insert(dataValue: V) {
    const indexToStore = this.hashFunction(dataValue);
    console.log(indexToStore);
    const linkedNode = new LinkedListNode<V>();
    linkedNode.data = dataValue;
    linkedNode.next = null; // At present none to be linkedto
    if (this.dataHash[indexToStore]) {
      // means some value is already present at that index, then add it to the linkedList array
      const prevNodeList = this.dataHash[indexToStore];
      prevNodeList[prevNodeList.length - 1].next = linkedNode;
      prevNodeList.push(linkedNode);
    } else {
      // this is the first data to be added to linkedList at that index
      this.dataHash[indexToStore] = [linkedNode];
    }
  }

  lookup(value: V) {
    // first find if the hashVal calculated has an index in dataHash
    const calcHashVal = this.hashFunction(value);
    const nodeList = this.dataHash[calcHashVal];
    let isValAvailable = false;
    nodeList.forEach((node) => {
      if (node.data === value) {
        isValAvailable = true;
      }
    });
    return isValAvailable ? value : new Error('no such value exists');
  }

  private hashFunction(value: V): number {
    let hashVal = 0;
    // To make the collisions even lower, better to append some sort of lograthimic vakue
    if (typeof value === 'string') {
      //   Array.from(value).forEach((element, i) => {
      //     hashVal = hashVal + value.charCodeAt(i);
      //   });

      // IMP!! This is a sample implementation - more appropriate one is one at the above
      hashVal += Array.from(value).length % this.tableSize;
      return hashVal % this.tableSize;
    } else if (typeof value === 'object') {
      const stringifiedVal = JSON.stringify(value);
      Array.from(stringifiedVal).forEach((el, i) => {
        hashVal += stringifiedVal.charCodeAt(i);
      });
      return hashVal % this.tableSize;
    }
  }
}
