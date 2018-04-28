function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let n = 0; n < ranked-list.length; n++) {
    list[n].innerHTM = (n+1).parseInt();
  } return document.getElementById('app').querySelectorAll('ul.ranked-list li');
}