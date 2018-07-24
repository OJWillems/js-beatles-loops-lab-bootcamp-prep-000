function theBeatlesPlay(musicians, instruments){
  var beatlesArray = []
  for (var i = 0; i < 4; i++){
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(lennonArray){
<<<<<<< HEAD
  var n = 0
  //var lennonFactsArray = []
  while (n < lennonArray.length){
    //lennonFactsArray.push(`${lennonArray[n]}!!!`)
    lennonArray[n] = lennonArray[n] + "!!!"
    n++
  }
  return lennonArray
}

function iLoveTheBeatles(x){
  var loveBeatles = []
  do {
    loveBeatles.push("I love the Beatles!")
    x++
  } while(x < 15)
  return loveBeatles
=======
  while (x = 5){
    lennonArray.push("!!!")
  }
  return lennonArray
>>>>>>> 7d54f426968eb1c9e86191083f00b77faeeffaf6
}