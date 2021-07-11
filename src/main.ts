import { Graph_DS } from './DS/graph';
import { traverse_bfs } from './algos/bfs';
import { NodeModel } from './DS/models/node';
import { find_shortest_path } from './algos/shortest-path';
import { GenericArray } from './algos/models/arrays/generic_arr';
import { sort_arr_obj } from './algos/arrays/sorting_array_of_obj';
import { rm_brute_force } from './algos/arrays/remove_duplicates_sarray';
import { fibNormal, fibGen } from './questions/fib-with-generator/fib-gen';

(async function bootstrap() {
  // Sorting array strings of objects
  console.log('##############- Sorting array of objects ####################');
  const obj1 = { name: 'vijay' };
  const obj2 = { name: 'tamil' };
  const obj3 = { name: 'pradeepa', email: 'con@gmail.com' };

  const genArray = new GenericArray<object>();

  genArray.pushItems([obj1, obj2, obj3]);
  console.log(genArray.getAllItems());

  console.log(sort_arr_obj(genArray, 'name'));
  console.log('##############- Completed ####################');

  // ############# Removing duplicaets
  console.log('##############- REmoving duplicates from array ####################');

  const arr = [1, 3, 7, 7, 8, 9, 9];
  console.log(rm_brute_force(arr));

  console.log('##############- Completed ####################');
  // ############Graph creation

  console.log('##############- Graph Creation and Traversal ####################');
  const graph = new Graph_DS<Number>();
  // creating 4 nodes
  graph.createNodesInGraph('KFJ', 10);
  graph.createNodesInGraph('LUX', 20);
  graph.createNodesInGraph('CAL', 40);
  graph.createNodesInGraph('OHI', 30);
  graph.createNodesInGraph('ATL', 30);
  graph.createNodesInGraph('WA', 30);

  graph.createLinksBetweenNodes('ATL', 'WA', 200);
  graph.createLinksBetweenNodes('ATL', 'KFJ', 100);
  graph.createLinksBetweenNodes('KFJ', 'WA', 150);
  graph.createLinksBetweenNodes('ATL', 'LUX', 120);
  graph.createLinksBetweenNodes('WA', 'CAL', 500);
  graph.createLinksBetweenNodes('WA', 'LUX', 50);
  graph.createLinksBetweenNodes('WA', 'OHI', 100);
  graph.createLinksBetweenNodes('OHI', 'LUX', 410);
  graph.createLinksBetweenNodes('LUX', 'OHI', 400);

  console.log(graph.getCompleteGraph());

  console.log('##### BFS_Travel ######');
  const atl = new NodeModel<Number>();
  atl.nodeName = 'ATL';

  const ohi = new NodeModel<Number>();
  ohi.nodeName = 'OHI';
  // First get all possible paths via bfs search
  const finalListWithEdgesAndDesitination = traverse_bfs(graph, atl, ohi);
  console.log('THis is the final list:', finalListWithEdgesAndDesitination);

  console.log(find_shortest_path<Number>(atl, ohi, finalListWithEdgesAndDesitination));
  // Now based on the list obtained find the shortest possible path

  console.log('##############- ENd of Graph Creation and Traversal ####################');

  console.log('##########Fibnocci############');
  //cfbucket-325587.s3.amazonaws.com/27846.jpg
  //console.log(fibNormal(7));
  https: console.log(fibNormal(3, []));
  const fibItr = fibGen();
  console.log('f', fibItr.next());
  console.log('s', fibItr.next());
  console.log('t', fibItr.next());
  console.log(fibItr.next());
  console.log(fibItr.next());
  console.log(fibItr.next());
  console.log('##########End of Fibnocci############');
})();
