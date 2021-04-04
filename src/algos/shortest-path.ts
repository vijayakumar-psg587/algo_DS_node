import { NodeModel } from "src/DS/models/node";
import { BFSNodeWithEdges } from "./models/bfs-node";
import { stringify } from "qs";

export function iterate_over_paths<T>( originNode: NodeModel<T>, destinationNode: NodeModel<T>, listofBSFNodeWithEdges: BFSNodeWithEdges<T>[]){

    const completePathMap = new Map<string, object>(); 
    // first get to the point where foundDestination boolean value is true
    listofBSFNodeWithEdges.forEach( ( bsfNode, index ) => {
        if ( bsfNode.foundDestination ) {
            // get its corresponding iteration done -if 2, it means u have to iterate the give list 2 times reverse to find the origin - excluding the given current index
            // if its 1, it means, u have to iterate it once, excluding the given current index, but that gives the number of iterations to be done
            // make sure to add the edges along the way, better store it in a map with key being ('originNodeNaem'+'itrCount') and value being the path and edge value calc
            const originNode = bsfNode.originNode;
            const itrCount = bsfNode.itrCount;
            console.log( 'getting origin node here and number of times to iterate:', originNode, itrCount );
        }
    })
}

function recursive_iteration<T>(completePathMap:Map<string, object>, listofBSFNodeWithEdges: BFSNodeWithEdges<T>[], noOfTimesToIterate: number ) {
    
}

export function shortestPath() {

}