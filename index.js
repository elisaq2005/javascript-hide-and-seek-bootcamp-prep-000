function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  var nodes = document.querySelector('#grand-node')
  var deepestNode = nodes.children[0];
  for (var i = 0; i < !deepestNode.childred[i]; i) {
    deepestNode = deepestNode.children[0];
  } 
  return deepestNode;
}