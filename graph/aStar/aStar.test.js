describe('calculateAStar', () => {
    it('should calculate correct route', () => {
        const getShortestPath = require('./aStar');
        const getDistance = require('./getEuclidianDistance');

        const nodesById = {
            1: { lat: 59.436961, lon: 24.753575 }, // tallinn
            2: { lat: 58.377983, lon: 26.729038 }, // tartu
            3: { lat: 57.781457, lon: 26.055040 }, // valga
            4: { lat: 59.379693, lon: 28.179075 }, // narva
            5: { lat: 59.329323, lon: 18.068581 }, // stockholm
        };

        const neighbours = {
            1: [4, 5],
            2: [1, 3, 4, 5],
            3: [2, 5],
            4: [1, 2, 5],
            5: [1, 2, 3, 4],
        };

        const graph = Object.entries(neighbours).reduce((acc, [id, nodeNeighbours]) => {
            return {
                ...acc,
                [id]: nodeNeighbours.reduce((acc2, nid) => {
                    return [
                        ...acc2,
                        [nid, getDistance(nodesById[id], nodesById[nid])]
                    ]
                }, []),
            };
        }, {});

        expect(getShortestPath(1, 4, graph, nodesById)).toEqual([1, 4]);
        expect(getShortestPath(1, 3, graph, nodesById)).toEqual([1, 4, 2, 3]);
    });
});