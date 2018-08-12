
const toRadians = (degrees) => degrees * (180 / Math.PI);

module.exports = (node1, node2) => Math.sqrt(
    toRadians(node1.lon - node2.lon) ** 2
    + toRadians(node1.lat - node2.lat) ** 2
);
