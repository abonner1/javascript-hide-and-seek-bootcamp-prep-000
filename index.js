function getFirstSelector(select) {
  return document.querySelector(select)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }

  return lis
}

function deepestChild() {
  const divs = document.getElementById('grand-node').getElementsByTagName('div')
  let it = []

  for (let i = 0, l = divs.length; i < l; i++) {
    if (typeof divs[i].innerHTML === 'string') {
      it.push(divs[i])
      return it[0]
    }
  }

}
