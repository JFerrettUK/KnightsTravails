export default function bfs(adjacencyList) {
    console.log(adjacencyList)

    //put node values you have visited here
    let queue = []
    let visited = []

    const adjacencyArray = Object.entries(adjacencyList).map(([vertex, adjacent]) => {
        return [vertex, ...adjacent];
      });

    for (let i = 0; i < 64; i++) {
        console.log(adjacencyList[0])
        console.log(" is adjacencyList[0]")
        console.log(adjacencyList[i])
        console.log(" is adjacencyList[i]")
        console.log(adjacencyList)
        adjacencyList.splice(0)
    }

    console.log(queue)
    console.log("is queue")
    console.log(adjacencyList)
    console.log("is adjacencyList")

}