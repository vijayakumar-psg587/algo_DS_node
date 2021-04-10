import { Graph_DS } from "./DS/graph";
import { traverse_bfs } from "./algos/bfs";
import { NodeModel } from "./DS/models/node";
import { iterate_over_paths } from "./algos/shortest-path";

( async function bootstrap() {

// ############Graph creation

    console.log( '##############- Graph Creation and Traversal ####################' );
    const graph = new Graph_DS<Number>();
    // creating 4 nodes
    graph.createNodesInGraph( 'KFJ', 10 );
    graph.createNodesInGraph( 'LUX', 20 );
    graph.createNodesInGraph( 'CAL', 40 );
    graph.createNodesInGraph( 'OHI', 30 );
    graph.createNodesInGraph('ATL', 30);
    graph.createNodesInGraph( 'WA', 30 );

    graph.createLinksBetweenNodes( 'ATL', 'WA', 200 );
    graph.createLinksBetweenNodes( 'ATL', 'KFJ', 100 );
    //graph.createLinksBetweenNodes( 'KFJ', 'WA', 150 );
    graph.createLinksBetweenNodes( 'ATL', 'LUX', 120 );
    graph.createLinksBetweenNodes( 'WA', 'CAL', 500 );
     graph.createLinksBetweenNodes('WA', 'LUX', 50);
    graph.createLinksBetweenNodes( 'WA', 'OHI', 100 );
    graph.createLinksBetweenNodes( 'OHI', 'LUX', 410 );
    //graph.createLinksBetweenNodes('LUX', 'OHI', 400)
    

    console.log( graph.getCompleteGraph() );

    console.log( '##### BFS_Travel ######' );
    const atl = new NodeModel<Number>();
    atl.nodeName = 'ATL';

    const ohi = new NodeModel<Number>();
    ohi.nodeName = 'OHI';
    // First get all possible paths via bfs search
    const finalListWithEdgesAndDesitination = traverse_bfs( graph, atl, ohi );
    console.log( 'THis is the final list:', finalListWithEdgesAndDesitination );

    iterate_over_paths<Number>(atl, ohi, finalListWithEdgesAndDesitination);
    // Now based on the list obtained find the shortest possible path

    console.log( '##############- ENd of Graph Creation and Traversal ####################' );
} )();