function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li');
  for (let n = 0; n < ranked-list.length; n++) {
    rank[n].innerHTM = (n+1).parseInt();
   return document.getElementById('app').querySelectorAll('ul.ranked-list li');
  }
}