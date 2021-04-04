import { Graph_DS } from "src/DS/graph";
import { NodeModel } from "src/DS/models/node";
import { BFSNodeWithEdges } from "./models/bfs-node";
// important to pass the starting nide, just the nodeName, 
// Goal - Calculate the weight associated to each node from startNode

export function traverse_bfs<T>( graphObj: Graph_DS<T>, originNode: NodeModel<T>, destinationNode: NodeModel<T> ): BFSNodeWithEdges<T>[] {
    // only if startNode is found we should continue
    const nodeModelList = graphObj.getNodesInGraph();
    const searchList = searchNode(nodeModelList, originNode.nodeName);
    if ( searchList && searchList.length >= 1 ) {
        // means startNode is available and we can doing bfs
        // create a list of bfsNodeWithEdges
        const bfsNodeWithEdgeList: BFSNodeWithEdges<T>[] = [];
        // get the nodemap corresponding to the start/originNdde
        const linkedNodes = graphObj.linkedNodesMap.get( originNode.nodeName );
        console.log( 'linkedNodes:', linkedNodes );
        return recursive_nodeItr(graphObj, bfsNodeWithEdgeList, linkedNodes, originNode, destinationNode, 0);
    } else {
        throw new Error( 'Given Node is not in the graph and cannot be searched' );
    }
    

}

function recursive_nodeItr<T>( grapObj: Graph_DS<T>, nodeEgdeListToAdd: BFSNodeWithEdges<T>[], linkedNodeList: NodeModel<T>[],
    startNode: NodeModel<T>, destinationNode: NodeModel<T>, itrCountToAddToEdgeList: number ): BFSNodeWithEdges<T>[] {
    console.log( 'inside recursion:', linkedNodeList );
    linkedNodeList.forEach( node => {
        const nodeToAdd = new BFSNodeWithEdges<T>();
        nodeToAdd.edgeVal = node.edgeWeight;
        nodeToAdd.linkedNode = node;
        nodeToAdd.originNode = startNode;
        nodeToAdd.itrCount = itrCountToAddToEdgeList;
        nodeEgdeListToAdd.push( nodeToAdd );
        if ( node.nodeName.toLowerCase() === destinationNode.nodeName.toLowerCase() ) {
            nodeToAdd.foundDestination = true;
            console.log( 'List of nodeEdgesList:', nodeEgdeListToAdd );
            // calculate the edgeWeight and show the path
            return;
        } else {
            nodeToAdd.foundDestination = false;
            const nextNodeToVisit = grapObj.linkedNodesMap.get( node.nodeName );
            // only if there is nextNodeToVisit call the below
            if ( nextNodeToVisit ) {
               return recursive_nodeItr(grapObj, nodeEgdeListToAdd, nextNodeToVisit, node, destinationNode, itrCountToAddToEdgeList+1);
            }
            
        }
    } );
    return nodeEgdeListToAdd;

}

function pathCalculation<T>( nodesWithEdgesList: BFSNodeWithEdges<T>[], destinationNode: NodeModel<T> ) {
    nodesWithEdgesList.forEach( nodeWithEdge => {
         nodeWithEdge.originNode
    })

}

function searchNode<T>( allNodeList: NodeModel<T>[],  nodeName: string ) {
    if ( allNodeList && allNodeList.length >= 1 ) {
        return allNodeList.filter( item => item.nodeName.toLowerCase() === nodeName.toLowerCase());
    } else {
        return null;
    }
}