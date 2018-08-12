const { FibonacciHeap } = require('@tyriar/fibonacci-heap/lib/fibonacciHeap');

const getPathFromNodeTrail = (nodeTrail, start, end) => {
    const path = [end];
    while (parseInt(path[0]) !== start) {
        Object.entries(nodeTrail).forEach(([nodeId, prevNodeId]) => {
            if (parseInt(nodeId) === path[0]) {
                path.unshift(prevNodeId);
            }
        });
    }
    return path;
};

module.exports = (start, end, graph) => {

    const nodes = Object.keys(graph);
    const distances = nodes.reduce((acc, nodeId) => {
        acc[nodeId] = parseInt(nodeId) === start ? 0 : Infinity;
        return acc;
    }, {});

    // initialize min priority queue
    const unvisitedHeap = new FibonacciHeap();

    // keep separate index for fast index checks
    const unvisitedIndex = {};
    nodes.forEach((nodeId) => {
        unvisitedIndex[nodeId] = unvisitedHeap.insert(distances[nodeId], parseInt(nodeId));
    });

    const breadcrumbTrail = {};

    let currentNode = unvisitedIndex[start];

    while (currentNode) {
        graph[currentNode.value].forEach(([nodeId, weight]) => {
            if (unvisitedIndex[nodeId]) {
                const tentativeWeight = distances[currentNode.value] + weight;
                if (tentativeWeight < distances[nodeId]) {
                    distances[nodeId] = tentativeWeight;
                    breadcrumbTrail[nodeId] = currentNode.value;
                    unvisitedHeap.decreaseKey(unvisitedIndex[nodeId], tentativeWeight);
                }
            }
        });
        delete unvisitedIndex[currentNode.value];

        if (currentNode.value === end) {
            // end node reached
            break;
        }
        currentNode = unvisitedHeap.extractMinimum();
    }

    return getPathFromNodeTrail(breadcrumbTrail, start, end);
};
