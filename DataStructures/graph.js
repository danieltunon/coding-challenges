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
const Graph = {
  init() {
    this.nodes = [];
    Object.defineProperty(this, 'size', { get() { this.nodes.length } });
  },

};

export default Graph;
