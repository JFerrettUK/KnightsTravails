export default function chessGraph() {
    const matrix = [  
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
        ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
    ];

    const adjacencyList = {
        a8: ["b8", "a7", "b7"],
        b8: ["a8", "c8", "a7", "b7", "c7"],
        c8: ["b8", "d8", "b7", "c7", "d7"],
        d8: ["c8", "e8", "c7", "d7", "e7"],
        e8: ["d8", "f8", "d7", "e7", "f7"],
        f8: ["e8", "g8", "e7", "f7", "g7"],
        g8: ["f8", "h8", "f7", "g7", "h7"],
        h8: ["g8", "g7", "h7"],
        a7: ["a8", "b8", "c8", "a6", "b7", "b6"],
        b7: ["a7", "c7", "a8", "b8", "c8", "a6", "b6", "c6"],
        c7: ["b7", "d7", "b8", "c8", "d8", "b6", "c6", "d6"],
        d7: ["c7", "e7", "c8", "d8", "e8", "c6", "d6", "e6", "e8"],
        e7: ["d7", "f7", "d8", "e8", "f8", "d6", "e6", "f6"],
        f7: ["e7", "g7", "e8", "f8", "g8", "e6", "f6", "g6"],
        g7: ["f7", "h7", "f8", "g8", "h8", "f6", "g6", "h6"],
        h7: ["g7", "g8", "h8", "f6", "g6"],
        a6: ["a7", "b6", "b7", "a5", "b5"],
        b6: ["a6", "c6", "a7", "b7", "c7", "a5", "b5", "c5"],
        c6: ["b6", "d6", "b7", "c7", "d7", "b5", "c5", "d5"],
        d6: ["c6", "e6", "c7", "d7", "e7", "c5", "d5", "e5"],
        e6: ["d6", "f6", "d7", "e7", "f7", "d5", "e5", "f5"],
        f6: ["e6", "g6", "e7", "f7", "g7", "e5", "f5", "g5"],
        g6: ["f6", "h6", "f7", "g7", "h7", "f5", "g5", "h5"],
        h6: ["g6", "g7", "f5", "g5"],
        a5: ["a6", "b5", "b6", "a4", "b4"],
        b5: ["a5", "c5", "a6", "b6", "c6", "a4", "b4", "c4"],
        c5: ["b5", "d5", "b6", "c6", "d6", "b4", "c4", "d4"],
        d5: ["c5", "e5", "c6", "d6", "e6", "c4", "d4", "e4"],
        e5: ["d5", "f5", "d6", "e6", "f6", "d4", "e4", "f4"],
        f5: ["e5", "g5", "e6", "f6", "g6", "e4", "f4", "g4"],
        g5: ["f5", "h5", "f6", "g6", "h6", "f4", "g4", "h4"],
        h5: ["g5", "g6", "f4", "g4"],
        a4: ["a5", "b4", "b5", "a3", "b3"],
        b4: ["a4", "c4", "a5", "b5", "c5", "a3", "b3", "c3"],
        c4: ["b4", "d4", "b5", "c5", "d5", "b3", "c3", "d3"],
        d4: ["c4", "e4", "c3", "d3", "e3"],
        e4: ["d4", "f4", "d5", "e5", "f5", "d3", "e3", "f3"],
        f4: ["e4", "g4", "e5", "f5", "g5", "e3", "f3", "g3"],
        g4: ["f4", "h4", "f5", "g5", "h5", "f3", "g3", "h3"],
        h4: ["g4", "g5", "f3", "g3"],
        a3: ["a4", "b3", "b4", "a2", "b2"],
        b3: ["a3", "c3", "a4", "b4", "c4", "a2", "b2", "c2"],
        c3: ["b3", "d3", "b4", "c4", "d4", "b2", "c2", "d2"],
        d3: ["c3", "e3", "c4", "d4", "e4", "c2", "d2", "e2"],
        e3: ["d3", "f3", "d4", "e4", "f4", "d2", "e2", "f2"],
        f3: ["e3", "g3", "e4", "f4", "g4", "e2", "f2", "g2"],
        g3: ["f3", "h3", "f4", "g4", "h4", "f2", "g2", "h2"],
        h3: ["g3", "g4", "f2", "g2"],
        a2: ["a3", "b2", "b3", "a1", "b1"],
        b2: ["a2", "c2", "a3", "b3", "c3", "a1", "b1", "c1"],
        c2: ["b2", "d2", "b3", "c3", "d3", "b1", "c1", "d1"],
        d2: ["c2", "e2", "c3", "d3", "e3", "c1", "d1", "e1"],
        e2: ["d2", "f2", "d3", "e3", "f3", "d1", "e1", "f1"],
        f2: ["e2", "g2", "e3", "f3", "g3", "e1", "f1", "g1"],
        g2: ["f2", "h2", "f3", "g3", "h3", "f1", "g1", "h1"],
        h2: ["g2", "g3", "f1", "g1"],
        a1: ["a2", "b1", "b2"],
        b1: ["a1", "c1", "a2", "b2", "c2"],
        c1: ["b1", "d1", "b2", "c2", "d2"],
        d1: ["c1", "e1", "c2", "d2", "e2"],
        e1: ["d1", "f1", "d2", "e2", "f2"],
        f1: ["e1", "g1", "e2", "f2", "g2"],
        g1: ["e1", "g1", "e2", "f2", "g2"],
        h1: ["g1", "g2", "h2"]
    }

    // All it means is that the Knight needs to take 3 steps to reach 
    // its target, as long as it doesnt repeat itself!

    //bfs:

    //let q = [s]
    let queue = []
    let visited = []

    // Start by selecting a starting node or vertex in the graph or tree
    // to begin the search.

    // Add the starting node to a queue, which will be used to keep 
    // track of the nodes that need to be visited.
    
    // While the queue is not empty, remove the first node
    // from the queue and examine its neighbors.
    
    // For each neighbor of the current node that has not been visited,
    // add it to the queue and mark it as visited.
    
    // Repeat steps 3 and 4 until the queue is
    // empty or the desired node is found.
    
    // If the desired node is found, stop the search and 
    // return the result. Otherwise, the search will continue
    //  until all reachable nodes have been visited.
    
    

    console.log(adjacencyList);

      
      // Test the bfs function
      
}