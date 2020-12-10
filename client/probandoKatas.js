function cakes(recipe, available) {
  let arrRecipe= Object.keys(recipe)
  let ArrAvailable = Object.keys(available)
  let include = '';
  let arrInclude=[]
  
  for (let i = 0; i < arrRecipe.length; i++) {
   include += ArrAvailable.indexOf( arrRecipe[i]) 
   if(include !=-1){arrInclude.push(ArrAvailable[include])}    
  }

  if (arrInclude.length === recipes.length){
    for (let i = 0; i < recipes.length; i++) {
      arrInclude[i].i/recipe[i].i
      
    }
  
  }else{return 0}

  console.log (ArrAvailable)
}




function cakes(){
let recipes = {flour: 500, sugar: 200, eggs: 1}
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200} 
let arrRecipe= Object.keys(recipes)
let ArrAvailable = Object.keys(available)
let include = '';
let arrInclude=[]

for (let i = 0; i < arrRecipe.length; i++) {
 include = ArrAvailable.indexOf( arrRecipe[i]) 
 if(include !=-1){arrInclude.push(ArrAvailable[include])}  
}
if (arrInclude.length === recipes.length){
  for (let i = 0; i < recipes.length; i++) {
    arrInclude[]
    
  }

}else{return 0}
console.log (arrInclude)
}

cakes()
