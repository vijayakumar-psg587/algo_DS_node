import { BSTNode } from "./models/bst-node";

export class BinarySearchTree<T> {
    private data: BSTNode<T>[];
    
    constructor() {
    }

    addElement = (element: T) => {
        const bstNode = new BSTNode<T>();
        if(!this.data || this.data.length === 0) {
            // means there is no node at all, so add the element to the root node
        
            bstNode.key = element;
            bstNode.left = null;
            bstNode.right = null;
            this.data = [];
            this.data.push(bstNode);
        } else {
            // now binary tree has some data, make sure to arrange the elements there on add
            // use recursion to do this
            const recursiceAdd = (curretBSTNode: BSTNode<T>) => {
            
                // we are recurisvely trying to find the position where the element is to be added
                if(curretBSTNode.key < element){
                    // means put it in right side of the node
                    if(curretBSTNode.right !== null) {
                        recursiceAdd(curretBSTNode.right);
                    }else {
                        console.log('root node less and right null')
                        
                        bstNode.key = element;
                        bstNode.left = null;
                        bstNode.right = null;
                        curretBSTNode.right = bstNode;
                        this.data.push(bstNode);
                    }

                } else if(curretBSTNode.key > element) {
                    // put in left side
                    if(curretBSTNode.left !== null) {
                        // no data -  then add it
                        recursiceAdd(curretBSTNode.left);
                    } else {
                        bstNode.key = element;
                        bstNode.left = null;
                        bstNode.right = null;
                        curretBSTNode.left = bstNode;
                        this.data.push(bstNode);
                    } 
                } else {
                    // no need to add data, when they are same
                    return;
                }
                
            }  
            // start with the first element -  pass the ref of the data here!!! -  only then the left, right assisgnments will reflect
            recursiceAdd(this.data[0]);
        }
        return true;
        
    }

    get = () => {
        return this.data;
    }

    findMin = () => {
        // the element to the left most leaf is the minimum element
        let currentNode = this.data[0];
        while(currentNode.left) {
            currentNode = currentNode.left
        } 
        
        return currentNode.key;
    }

    findMax = () => {
        // element to the right most is the max
        let currentNode = this.data[0];
        while(currentNode.right) {
            currentNode = currentNode.right
        } 
        
        return currentNode.key;
    }

    isPresent = (element: T) => {
        // start with root node
        let currentNode = this.data[0];
        let isPresentFlag = false;
        // trying with a recursice method
        const recursiveFind = (node: BSTNode<T>) => {
            
            if(node.key > element){
                if(node.left !== null) {
                    recursiveFind(node.left);
                }
            } else if(node.key < element) {
                if(node.right != null) {
                    recursiveFind(node.right);
                } 
            } else {
                isPresentFlag = true;
            }
        }

        recursiveFind(currentNode);
        return isPresentFlag;
    }

    remove = (element: T) => {

        if(this.data.length === 1) {
            // then there is only one element to remove
            this.data.pop();
        } else {
            const currentNode = this.data[0];
            const recursiveDelete = (node: BSTNode<T>, dataV: T) => {
                // 4 scenarios are possible
                // node we wanted to remove has only left child
                if(node.key === element) {
                   let tempNode = node.left;
                   if((node.left && node.right === null)
                        || (node.right && node.left === null)) {
                       // effectively replace it with the node below
                       node.key = tempNode.key;
                       node.left = tempNode.left;
                       node.right = tempNode.right;
                   } else if(node.left && node.right) {
                       // then iterate to the right and to the last left element
                       let currentNode = node.right;
                       while(currentNode.left != null) {
                           currentNode = currentNode.left;
                       }
                       node.key = currentNode.key;
                       node.right = recursiveDelete(node.right, currentNode.key as T);
                       return node;
                   }
                } else {
                    if(node.key > element) {
                        // search left
                        recursiveDelete(node.left, node.key as T);
                        return node;
                    } else {
                        recursiveDelete(node.right, node.key as T);
                        return node;
                    }
                }
            } 
            
            recursiveDelete(currentNode, currentNode.key as T);
            // node has both childs

            // node has no child - leaf node - this doesnt need any rearragements
        }
    }
}