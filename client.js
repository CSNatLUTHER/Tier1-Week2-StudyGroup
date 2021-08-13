 // create an array of something (album collection, shoes, spice rack)
let colorWheel = ['red', 'blue', 'green', 'orange', 'pink'];
let notFound;
console.log('Colors in color wheel: ', colorWheel);

let favcolor = prompt('What is your favorite color?');
for (let i = 0; i < colorWheel.length; i++) {
    console.log(colorWheel[i]);
    if (colorWheel[i] === favcolor) {
        alert(favcolor + ' is a match!');
        console.log('match found!');
    }
    else {notFound = favcolor}
}

if (colorWheel.includes(favcolor)) {
}
else{
    alert(notFound + " was not found")
    console.log( notFound, ' was not found')
}


// // create an array of something (album collection, shoes, spice rack)

// let herbRack = ['parsley', 'sage', 'rosemary', 'thyme'];
// console.log("herbRack:", herbRack);

// // write to a for loop that will log them all out
//         //NOTE: [i] is the index that is always changing 

// for(let i=0; i<herbRack.length; i++ ){
//     console.log(herbRack[i]);
// }

// // indicate any matches (prompts, alerts, confirms)

// while(confirm('Do you want to search your herb rack?')){
//     let herb = prompt('What herb would you like to search for?'); //**IMPORTANT the herb is what your user will type in 
//     if(herbRack.includes(herb)){
//         alert(herb + " is in your herb rack!");
//     }
//     else{
//         alert(herb + " is not in your herb rack");
//     }
// }