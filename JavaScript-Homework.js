//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogStr, dogNames){
    //Your code goes here
    dogStr = dogStr.replace(",", "");
    let newList = dogStr.split(' ');
    for(let i = 0; i < newList.length; i++){
        for(let j = 0; j < dogNames.length; j++){
            if(newList[i] == dogNames[j]){
                // console.log('entered')
                return 'Matched dog_names';
            }
        }
    }
    return 'No Matches';
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names));
//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let i = 0; i < arr.length; i+=2){
        arr.splice(i, 1, 'even index');
    }
    return arr
}

//Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
console.log(replaceEvens(Given_arr));
