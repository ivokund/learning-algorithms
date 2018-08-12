
const toRadians = (degrees) => degrees * (180 / Math.PI);

const getNodeDistance = (node1, node2) => Math.sqrt(
    toRadians(node1.lon - node2.lon) ** 2
    + toRadians(node1.lat - node2.lat) ** 2
);

const getPathFromNodeTrail = (nodeTrail, start, end) => {
    const path = [end];
    while (path[0] !== start) {
        Object.entries(nodeTrail).forEach(([nodeId, prevNodeId]) => {
            if (parseInt(nodeId) === path[0]) {
                path.unshift(prevNodeId);
            }
        });
    }
    return path;
};

module.exports = (start, end, graph, nodesById) => {
    const breadcrumbTrail = {};

    const getHeuristicDistance = (start, end) => getNodeDistance(nodesById[start], nodesById[end]);

    const nodes = Object.keys(graph);

    const visitedNodes = [];
    const unvisitedNodes = [start];

    const distancesFromStart = nodes.reduce((acc, nodeId) => {
        acc[nodeId] = nodeId === start ? 0 : Infinity;
        return acc;
    }, {});
    distancesFromStart[start] = 0;

    const distancesViaNode = nodes.reduce((acc, nodeId) => {
        acc[nodeId] = Infinity;
        return acc;
    }, {});
    distancesViaNode[start] = getHeuristicDistance(start, end);

    const findClosestUnvisitedNode = () => { // todo: jesus christ
        let min = Infinity;
        let node = null;
        unvisitedNodes.forEach((nodeId) => {
            if (distancesViaNode[nodeId] < min) {
                node = nodeId;
                min = distancesViaNode[nodeId];
            }
        });
        return node;
    };


    while (unvisitedNodes.length > 0) {
        const currentNodeId = findClosestUnvisitedNode();

        if (currentNodeId === end) {
            return getPathFromNodeTrail(breadcrumbTrail, start, end)
        }

        const currentIndex = unvisitedNodes.indexOf(currentNodeId);
        unvisitedNodes.splice(currentIndex, 1); // remove
        visitedNodes.push(currentNodeId);

        graph[currentNodeId].forEach(([neighbourId, distance]) => {
            if (visitedNodes.indexOf(neighbourId) !== -1) {
                return;
            }
            if (unvisitedNodes.indexOf(neighbourId) === -1) {
                unvisitedNodes.push(neighbourId);
            }

            const tentativeDistanceFromStart = distancesFromStart[currentNodeId] + distance;
            if (tentativeDistanceFromStart >= distancesFromStart[neighbourId]) {
                return; // This is not a better path.
            }

            breadcrumbTrail[neighbourId] = currentNodeId;

            distancesFromStart[neighbourId] = tentativeDistanceFromStart;
            distancesViaNode[neighbourId] = tentativeDistanceFromStart + getHeuristicDistance(neighbourId, end);
        });
    }
    throw new Error('Could not find a path');
};
