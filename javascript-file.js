//Input
//const string = prompt("Please enter the text to analyse", "Text"); 
const string = 'The sun shines over the lake.'; //Store string which will be used to count the words
const specifiedWord = "The"; //Store the single word to count for 


function displayString() {
    document.getElementById("displayText").innerHTML = string; //Replace HTML ID "displayText" to the 'string'
    document.getElementById("displayWord").innerHTML = specifiedWord; //Replace HTML ID "displayText" to the 'specifiedWord'
}
window.onload = displayString; //Execute the function at loading screen


//########################################################
//1. Returns frequency of most frequent word
//########################################################
function displayCalculateHighestFrequency() { //To display highest frequency in HTML
    document.getElementById("displayCalculateHighestFrequency").innerHTML = calculateHighestFrequency(string); //Replace the ID in HTML with the result of this function 
}

function calculateHighestFrequency(text) {
    //DEBUG text
    const textToLowercase = text.toLowerCase(); //Store text in lowercase
    const textNoNumbers = textToLowercase.replace(/[^a-z ]/g, ''); //Store text where all characters other than a-z and " " are replaced by '' (blanc)
    const arrayWords = textNoNumbers.match(/\w+/g); //Seperates each word of characters /w - https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    console.log("%c1. CalculateHighestFrequency", "color:green; font-weight:bold");
    //console.log(arrayWords); // ["the", "sun", "shines", "over", "the", "lake"] //Saved as an array
    const occurrences = {};  //Make an empty object (Array would store some values as NaN)
    for (const word of arrayWords) { //Loops the 'arrayWords' array, where as every single key/entry is 'word'
        if (occurrences[word]) { //If the word was already seen
            occurrences[word]++; //Increment its count
        }
        else { //If it didn't appear another time
            occurrences[word] = 1; //Store value 1
        }
    }

    let max = 0; //Store index variable with 0
    //console.log("arrayWords: ", arrayWords); //arrayWords:  (6) ["the", "sun", "shines", "over", "the", "lake"] //Saved as an array
    //console.log("occurrences: ", occurrences); //occurrences:  {the: 2, sun: 1, shines: 1, over: 1, lake: 1} //Saved as an object
    for (const word of arrayWords) { //Loops the 'arrayWords' array, where as every single key/entry is 'word'
        if (occurrences[word] > max) { //If the value is bigger than max. occurrences[word] is the value of the object
            max = occurrences[word]; //Store the VALUE as max
        }
    }
    console.log("The highest word frequency is: ", max) //Log 'max' in console
    return max; //Return 'max'
}
console.log(calculateHighestFrequency(string)); //Execute and displays (without clicking button) in console in lowercase
//## End of first exercise


//########################################################
//2 Returns frequency of chosen word in variable 'searchWord'
//########################################################
function displayCalculateFrequencyForWord() { //To display highest frequency for specified 'searchWord' in HTML
    document.getElementById("displayCalculateFrequencyForWord").innerHTML = calculateFrequencyForWord(string, specifiedWord); //Replace the ID in HTML with the result of frequency for specified word
}

function calculateFrequencyForWord(text, word) {
    //DEBUG text
    const textToLowercase = text.toLowerCase(); //Store text in lowercase
    const textNoNumbers = textToLowercase.replace(/[^a-z ]/g, ''); //Store text where all characters other than a-z and " " are replaced by '' (blanc)
    const arrayWords = textNoNumbers.match(/\w+/g); //Seperates each word of characters /w - https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    //DEBUG specifiedWord
    const wordLowercase = word.toLowerCase(); //Store word in lowercase
    const searchWord = wordLowercase.replace(/[^a-z ]/g, ''); //Store text where all characters other then a-z and " " are replaced by '' (blanc)

    console.log("%c2. CalculateFrequencyForWord", "color:green; font-weight:bold");
    let count = 0; //Start initial count at 0, Let in stead of Const because it is incrementing its value
    for (const words of arrayWords) { //Loops the 'arrayWords' array, where as every single key/entry is 'word'
        if (words == searchWord) { //If the looped 'word' is equal to 'searchWord'...
            count++; //Increment its count
        }
    }
    console.log("The highest frequency for word '", word, "' is: ", count) //Log in the console the 'count' of the specified 'word'
    return count;
}
console.log(calculateFrequencyForWord(string, specifiedWord)); //Execute and displays function in console in lowercase
//## End of second exercise



//########################################################
//3. Returns most N frequent words N = 3
//Niet werkend--------------------------------Niet werkend
//########################################################
function displayCalculateMostFrequentNWords() {
    document.getElementById("displayCalculateMostFrequentNWords").innerHTML = calculateMostFrequentNWords(string, 3); //display html, send string (res) in lowercase
}

function calculateMostFrequentNWords(text, n) {
    //DEBUG text
    const textToLowercase = text.toLowerCase(); //Store text in lowercase
    const textNoNumbers = textToLowercase.replace(/[^a-z ]/g, ''); //Store text where all characters other then a-z and " " are replaced by '' (blanc)
    const arrayWords = textNoNumbers.match(/\w+/g); //Seperates each word in array by: /\w+/g" - https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    console.log("%c3. CalculateMostFrequentNWords", "color:red; font-weight:bold");
    const occurrences = {};
    for (const word of arrayWords) { //Loop the 'arrayWords' array, where every single entry is 'word'
        if (occurrences[word]) { //If the word was already seen
            occurrences[word]++; //Increment its count
        }
        else { //If it didn't yet appear
            occurrences[word] = 1; //Store the initial count at 1
        }
    }

    //............ //TODO:
    //Sort the object {occurrences} alphabetical - a1 b2 c1 d1 
    //Sort the object {occurrences} on its value - b2 a1 c1 d1
    //Store the sorted object in mostCommon
    //............
    const mostCommon = ["test0", "test1", "test3", "test2"] //Werkt niet!! Omdat ik de sorteerfunctie niet werkend kreeg voor deze array. Deze regel moet worden vervangen door "Store the sorted object in mostCommon"
    const answer = mostCommon.slice(0, n); //Slice from 0 Where n = 3
    return answer;
}
console.log(calculateMostFrequentNWords(string, 3)); //Execute and displays function in console in lowercase where n=3
//## End of third exercise







//########################################################
//Deze informatie leek op wat ik nodig dacht te hebben maar heeft niet gezorgd voor het juiste resultaat
//Ik heb het laten staan omdat als het antwoord hier tussen zit, ik hier later verder mee kan zoeken om het te begrijpen
//Alles hieronder is dus niet van mij en hoeft ook niet 'beoordeeld' te worden
//########################################################
    // for (const [key, value] of Object.entries(occurences)) {
    //     console.log(key, value);
    // }
    // https://stackoverflow.com/questions/4260308/getting-the-objects-property-name
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    // 
//########################################################


    // for (let key in occurrences) {
    //     console.log("key " + key + " has value " + occurrences[key]);
    // }

    // function sortoccurrences() {
    //     occurrences.sort(function(a, b){return a.value - b.value});
    //     console.log(occurrences);
    // }


//########################################################
    // const myMap = new occurrences();
    // //  myMap.set("a",3);
    // //  myMap.set("c",4);
    // console.log(myMap);
    // // myMap.set("b",1);
    // // myMap.set("d",2);

    // // sort by value
    // const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
    // console.log(mapSort1);
    // // Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

    // console.log(occurrences); //  { How: 1, do: 2, you: 1 }
    // let last_3_element = words.slice(-3);

//########################################################

// //To sort a map
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

// var andersom = [4, 2, 5, 1, 3];
// andersom.sort(function(a, b) {
//     return b - a;
//   });
// console.log(andersom)

// // [1, 2, 3, 4, 5]

//########################################################

// //########################################################
// //########################################################
// const myMap = new Map();
// myMap.set("a",3);
// myMap.set("c",4);
// myMap.set("b",1);
// myMap.set("d",2);
// console.log(myMap);
// // sort by value
// const mapSort1 = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
// console.log(mapSort1);
// // Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

// const mapSort2 = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
// console.log(mapSort2);
// // Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// // sort by key
// const mapSort3 = new Map([...myMap.entries()].sort());
// console.log(mapSort3);
// // Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

// const mapSort4 = new Map([...myMap.entries()].reverse());
// console.log(mapSort4);
// // Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}
// //########################################################
// //########################################################

// // var map = new Map();
// // map.set('2-1', "foo");
// // map.set('0-1', "bar");
// // map.set('3-1', "baz");

// // var mapAsc = new Map([...map.entries()].sort());

// // console.log(mapAsc)
