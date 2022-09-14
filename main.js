let fighters = ["heihachi", "kazuya", "bryan", "anna", "feng", "steve", "hwoarang", "jin", "lars", "paul", "eddy", "yoshimitsu", "ganryu", "claudio", "king", "kuma"]

// Recreate the Fighters grid using this function

const fighterUrl = (name) => {
  return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png` 
}

let fightersGrid = document.getElementById("fighters-grid")
console.log("fighters grid", fightersGrid)

// we have a list of fighters (the array)
// we a function that builds urls for their images
// now we need to iterate over the list of fighter names
// create images
// and add them to the grid

fighters.forEach((fighter) => {
  let div = document.createElement("div")
  div.classList.add("fighter-thumb")
  let img = document.createElement("img")
  img.src = fighterUrl(fighter)
  img.style.height = "100px"
  img.style.width = "100px"
  div.append(img)
  fightersGrid.append(div)
})
