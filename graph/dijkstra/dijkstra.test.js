describe('calculateDijkstra', () => {
    it('should calculate correct route', () => {
        const getShortestPath = require('./dijkstra');

        const graph = {
            100: [[400, 1], [200, 6]],
            200: [[100, 6], [400, 2], [500,2], [300, 5]],
            300: [[200, 5], [500, 5]],
            400: [[100, 1], [200, 2], [500, 1]],
            500: [[400, 1], [200, 2], [300, 5]],
        };
        expect(getShortestPath(100, 300, graph)).toEqual([100, 400, 500, 300]);
        expect(getShortestPath(200, 200, graph)).toEqual([200]);
    });
});