const { compose } = require('ramda');
const rl = require('readline').createInterface;

const Node = {
  init(val) {
    this.val = val;
    this.edges = [];
  },
  addEdge(node) {
    this.edges.push(node);
    node.edges.push(this);
  },
  removeEdge(node) {
    this.edges = this.edges.filter(edge => edge !== node);
    node.edges = node.edges.filter(edge => edge !== this);
  },
  clearEdges() {
    this.edges.forEach(edge =>
      edge.edges = edge.edges.filter(edge =>
        edge !== this
      )
    );
    this.edges = [];
  },
  hasEdge(node) {
    for (const edge of this.edges) {
      if (edge === node) return true;
    }
    return false;
  }
};

const setProp = (prop, val, instance) => { instance[prop] = val; return instance };

const initGraph = compose(setProp('edges', []), Object.create);

function Graph() {
  return initGraph(Graph.prototype);
}

// Graph.prototype.fromStream = function fromStream()
const lineReader = function lineReader() {
  return rl({ input: stdin });
};

const fromAdjacencyList = function fromAdjacencyList(stream) {
  stream.on('line')
}

export default Graph;
