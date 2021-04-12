import { NodeModel } from "src/DS/models/node";
import { BFSNodeWithEdges } from "./models/bfs-node";


export function find_shortest_path<T>( originNode: NodeModel<T>, destinationNode: NodeModel<T>, listofBSFNodeWithEdges: BFSNodeWithEdges<T>[]){

    const filteredBFSNodes = destinationPathList(listofBSFNodeWithEdges); 
    const edgeList = calc_edges( filteredBFSNodes );
    edgeList.sort( dynamicsort('edge', 'asc'));
    return edgeList[0];
}

function destinationPathList<T>( listofBSFNodeWithEdges: BFSNodeWithEdges<T>[]) {
    // first get to the point where foundDestination boolean value is true
    return listofBSFNodeWithEdges.filter( item => item.foundDestination );
}


function calc_edges<T>( listofBSFNodeWithEdges: BFSNodeWithEdges<T>[] ) {
    const edgeList = [];
    listofBSFNodeWithEdges.forEach( item => {
        const edgeWeight = item.linkedNode.edgeWeight ? item.linkedNode.edgeWeight + item.originNode.edgeWeight : item.linkedNode.edgeWeight;
        const path = item.originNode.nodeName + "=>" + item.linkedNode.nodeName;
        edgeList.push( { edge: edgeWeight, path: path } );
    } );
    return edgeList;
}

function dynamicsort( property, order ) {
    var sort_order = 1;
    if ( order === "desc" ) {
        sort_order = -1;
    }
    return function ( a, b ) {
        // a should come before b in the sorted order
        if ( a[property] < b[property] ) {
            return -1 * sort_order;
            // a should come after b in the sorted order
        } else if ( a[property] > b[property] ) {
            return 1 * sort_order;
            // a and b are the same
        } else {
            return 0 * sort_order;
        }
    }
}