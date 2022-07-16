let cntPeople = document.getElementById("count-display")
let prvsEntry  = document.getElementById("previous")
let count = 0
function incr(){
  count += 1
  cntPeople.innerText = count
}

function save(){
  prvsEntry.textContent += count + " - "
  count = 0
  cntPeople.innerText = 0
}