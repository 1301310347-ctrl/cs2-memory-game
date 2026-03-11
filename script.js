console.log("Script started");

let guesses = 0;
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    console.log("click");
    //print click into console to make sure it clicking 
//get the crad by it Id and store it 
    let card = document.getElementById(cardId);
    //Changes it color to reveal the text of the card 
     card.style.color = "red";
     card.style.backgroundColor = "Yellow";
// check if ths is their first choice 
     if (firstCardId == "") {
        // store first card id 
     firstCardId  = cardId;
     } else {
        secondCardId = cardId;
        //now check for match
        setTimeout(checkMatch, 100); 
        
     }
     console.log(firstCardId);
     console.log(secondCardId);
     
}            
;

function checkMatch() {
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId);

      if (card1.innerText == card2.innerText) {
        console.log("Match")
        card1.style.backgroundColor = "green";
        card2.style.backgroundColor = "green";
      } else {
        card1.style.color = "green";
        card2.style.color = "green";
        card1.style.backgroundColor = "red";
        card2.style.backgroundColor = "red";
      }

      firstCardId = "";
      secondCardId = "";
}

//now we need to track the user guesses(guesses variable)
//Track which card was clicked first(firstCardId variable)
//Track which card was clicked second(secondCardId variable)
//After the second choice, check if the card match. like background color turning green. 
