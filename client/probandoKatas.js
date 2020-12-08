function dirReduc(arr){
  let solucion= ''
    function filterItems(query) {
        return  (arr.filter(function(el) {
             return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
         }))
       }
       let numNoth =filterItems('NORTH')
       let numSouth =filterItems('SOUTH')
       let numEast =filterItems('EAST')
       let numWest =filterItems('WEST')

       function removeItemFromArr ( array, item ) {
        let i = array.indexOf( item );     
        if ( i !== -1 ) {
            array.splice( i, 1 );
        }
        if (numNoth !== 0 & numSouth.length === numNoth.length){
            removeItemFromArr(arr, 'NORTH');
            removeItemFromArr(arr, 'NORTH');

        }

    }
       

console.log(arr)
  }
  let array=["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

  



// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])



dirReduc(array)