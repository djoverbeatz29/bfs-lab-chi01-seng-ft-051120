function bfs(rootNode, vertices, edges) {
    const rez = [];
    rootNode = vertices[0];
    rootNode.distance = 0;
    const queue = [rootNode];
    while (queue.length > 0) {
        let currNode = queue.shift();
        const adjVerts = findAdjacent(currNode.name, vertices, edges);
        for (const vert of adjVerts) {
            markDistanceAndPredecessor(currNode, adjVerts);
            queue.push(vert);
        }
        rez.push(currNode);
    }
    return rez;
}

function findAdjacent(address, vertices, edges) {
    const adjacentNodes = [];
    for (const edge of edges) {
        if (address === edge[0] || address === edge[1]) {
            const name = address === edge[0] ? edge[1] : edge[0];
            const vertex = vertices.find(v => v.name === name);
            if (vertex.distance == null) {
                adjacentNodes.push(vertex);
            }
        }
    }
    return adjacentNodes;
}

function markDistanceAndPredecessor(vertex, adjacentNodes) {
    for (const node of adjacentNodes) {
        node.distance = vertex.distance + 1;
        node.predecessor = vertex;
    }
    return adjacentNodes;
}
