import { GraphLinkedListModel } from "src/DS/models/graph-linked-list";
import { NodeModel } from "src/DS/models/node";

export class Graph_DS<T>{
    nodesInGraph: NodeModel<T>[];
    linkedNodesMap: Map<string, NodeModel<T>[]>;
  
  createNodesInGraph(nodeName: string, nodeVal?: T) {
      if ( !this.nodesInGraph ) {
          this.nodesInGraph = new Array<NodeModel<T>>();
    }
    const newNode = new NodeModel<T>();
    newNode.nodeName = nodeName;
    newNode.nodeVal = nodeVal;
    this.nodesInGraph.push( newNode );

  }
    
    getNodesInGraph(): NodeModel<T>[] {
        return this.nodesInGraph ? this.nodesInGraph : null;
  }

  createLinksBetweenNodes(nodeNameOrigin: string, nodeNameDestination: string, edgeWeight?:number) {
    // first create the nodes if not already created
      const completeNodesList = this.getNodesInGraph();
      if ( completeNodesList.filter( item => item.nodeName.toLocaleLowerCase() === nodeNameOrigin.toLocaleLowerCase() ).length >=1 ) {
            // if destination doesn exit, then create the node and add it to the list
          if ( completeNodesList.filter( item => item.nodeName.toLocaleLowerCase() === nodeNameDestination.toLocaleLowerCase() ).length < 1 ) {
              this.createNodesInGraph( nodeNameDestination, null);
          }
          
          if(!this.linkedNodesMap) {
              // this is the first time creation of map
              this.linkedNodesMap = new Map<string, NodeModel<T>[]>();
              const node = new NodeModel<T>();
              node.nodeName = nodeNameDestination;
              node.edgeWeight = edgeWeight;
              this.linkedNodesMap.set( nodeNameOrigin, [node] );
          } else if ( this.linkedNodesMap.has( nodeNameOrigin ) ) {
              // means the key alreadt exists to just add the value
              const linkedNodeList = this.linkedNodesMap.get( nodeNameOrigin );
              const node = new NodeModel<T>();
              node.nodeName = nodeNameDestination;
             node.edgeWeight = edgeWeight;
              linkedNodeList.push( node );

          } else {
            this.linkedNodesMap.set( nodeNameOrigin, new Array<NodeModel<T>>() );
             const linkedNodeList = this.linkedNodesMap.get(nodeNameOrigin);
             const node = new NodeModel<T>();
             node.nodeName = nodeNameDestination;
             node.edgeWeight = edgeWeight;
             linkedNodeList.push(node);
          }
        
      }
  }
    
    
  getCompleteGraph() {
    let op = [];
      if ( this.nodesInGraph && this.linkedNodesMap && this.linkedNodesMap.size >= 1 ) {
        this.linkedNodesMap.forEach( ( linkedNodes:NodeModel<T>[], origin: string ) => {
          // frame the o/p
          op.push(`${origin} ===> ${linkedNodes.map(item => item.nodeName+'-('+item.edgeWeight+')  ').join(',')} \n`);

        } );
        return op.join('');
      } else {
        return op;
      }
  }
}
