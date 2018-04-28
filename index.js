function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranked-list.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}