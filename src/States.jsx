function Store(initialState = {}) {
  this.state = {
    rows: 5,
    cols: 5,
  };
}
Store.prototype.mergeState = function (partialState) {
  Object.assign(this.state, partialState);
};

var store = new Store();

export default store;

// ReactDOM.render(
//   <FirstComponent mergeState={myStore.mergeState.bind(myStore)} />,
//   firstElement
// );
// ReactDOM.render(
//   <SecondComponent mergeState={myStore.mergeState.bind(myStore)} />,
//   secondElement
// );
