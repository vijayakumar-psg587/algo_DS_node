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
        return recursive_nodeItr(graphObj, bfsNodeWithEdgeList, linkedNodes, originNode, destinationNode, originNode, 0);
    } else {
        throw new Error( 'Given Node is not in the graph and cannot be searched' );
    }
    

}
/**
 * This function simply merges two node paths and edges
 * @param node1 
 * @param node2 
 */
function mergeNodes<T>( node1: NodeModel<T>, node2: NodeModel<T> ):NodeModel<T> {
    const nodeMerged = new NodeModel<T>();
    // when its a node , with no links, there will no edgeweight associated to it, hence done like below
    nodeMerged.edgeWeight = node1.edgeWeight ? node1.edgeWeight+ node2.edgeWeight: node2.edgeWeight;
    nodeMerged.nodeName = node1.nodeName+"=>"+node2.nodeName;
    return nodeMerged;
}


/**
 * This function recursively iterates over the linkedset of nodes for each originNode
 * From the linkedNodes, it goes to the next set of nodes, from that to next and so on 
 * @param grapObj - Complete graph
 * @param nodeEgdeListToAdd - New list to keep track of the paths and edgeweights
 * @param linkedNodeList  -  LinkedNodes fr a given start node
 * @param startNode  -  Node at which the iteration is to be started
 * @param destinationNode - Indicating where the final stop is
 * @param originNodeAgain -  This is the very first node where we start the recursion
 * @param itrCountToAddToEdgeList -  Just a counter to keep track of number of recursion done
 */
function recursive_nodeItr<T>( grapObj: Graph_DS<T>, nodeEgdeListToAdd: BFSNodeWithEdges<T>[], linkedNodeList: NodeModel<T>[],
    startNode: NodeModel<T>, destinationNode: NodeModel<T>, originNodeAgain: NodeModel<T>, itrCountToAddToEdgeList: number ): BFSNodeWithEdges<T>[] {
    // idea is to create a new list, which holds a boolean value, if the final desitionation is reached (any destination specified)
    // now to get the path traversed to reach the final desitionation, i.e ATL=>WA=>OHI, the nodenames are being merged and also to
    // arrive at the calculated edges, the edgeweights are also getting merged. 


    linkedNodeList.forEach( node => {
        const nodeToAdd = new BFSNodeWithEdges<T>();
        nodeToAdd.edgeVal = node.edgeWeight;
        nodeToAdd.linkedNode = node;
        nodeToAdd.originNode = startNode.nodeName === originNodeAgain.nodeName ? startNode : mergeNodes(originNodeAgain, startNode);
        nodeToAdd.itrCount = itrCountToAddToEdgeList;
        nodeEgdeListToAdd.push( nodeToAdd );
        if ( node.nodeName.toLowerCase() === destinationNode.nodeName.toLowerCase() ) {
            nodeToAdd.foundDestination = true;
            // calculate the edgeWeight and show the path
            return;
        } else {
            nodeToAdd.foundDestination = false;
            const nextNodeToVisit = grapObj.linkedNodesMap.get( node.nodeName );
            // only if there is nextNodeToVisit call the below
            if ( nextNodeToVisit ) {
               return recursive_nodeItr(grapObj, nodeEgdeListToAdd, nextNodeToVisit, node, destinationNode, originNodeAgain, itrCountToAddToEdgeList+1);
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

/**
 * Function to search for a given node
 * @param allNodeList 
 * @param nodeName 
 */
function searchNode<T>( allNodeList: NodeModel<T>[],  nodeName: string ) {
    if ( allNodeList && allNodeList.length >= 1 ) {
        return allNodeList.filter( item => item.nodeName.toLowerCase() === nodeName.toLowerCase());
    } else {
        return null;
    }
}