/**
 * A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
 * A union-find algorithm is an algorithm that performs two useful operations on such a data structure:
 * 
 * Find: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset.
 * Union: Join two subsets into a single subset. Here first we have to check if the two subsets belong to same set. If no, then we cannot perform union.
 * 
 * Usage: Union-Find Algorithm can be used to check whether an undirected graph contains cycle or not.
 * 
 * Reference: https://www.geeksforgeeks.org/union-find/
 */

// V-> no. of vertices &
// E->no.of edges 
var V = 3, E = 3;

class Edge {
  constructor() {
    this.src = 0
    this.dest = 0
  }
}

// Collection of all edges
let edge = new Edge();

/* Let us create the following graph
      0
      | \
      |  \
      1---2 
*/

initialize(V, E);

// Add edge 0-1
edge[0].src = 0;
edge[0].dest = 1;

// Add edge 1-2
edge[1].src = 1;
edge[1].dest = 2;

// Add edge 0-2
edge[2].src = 0;
edge[2].dest = 2;

console.log(edge)

// Creates a graph with V vertices and E edges
function initialize(v, e) {
  V = v
  E = e
  edge = Array.from(Array(E), () => Array())
}

// Utility function to find a subset of an element i
function find(parent, i) {
  if (parent[i] == -1) {
    return i
  }

  return find(parent, parent[i])
}

// Utility function to do union of 2 subsets
function union(parent, x, y) {
  parent[x] = y
}

// The main function to check whether a given graph contains a cycle or not.
function isCycle() {

  // allocate memory for creating V subsets
  let parent = Array(V).fill(-1)

  // Iterate through all edges of the graph
  // find subset of both vertices of every edge
  // if both subsets are same then there is a cycle
  for (let i = 0; i < E; i++) {
    let x = find(parent, edge[i].src)
    let y = find(parent, edge[i].dest)

    if (x == y) {
      console.log(parent)
      return 1
    }

    union(parent, x, y)
  }

  console.log(parent)
  return 0
}

if (isCycle() == 1) {
  console.log("graph contains cycle");
} else {
  console.log("graph is clean");
}