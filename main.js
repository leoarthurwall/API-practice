
//GET THE API ON THE PAGE

async function getData(){//remember async function!
    const response = await fetch ('http://www.boredapi.com/api/activity/'); //this fetches the API
    const data = await response.json(); //this converts the JSON response??
    
    console.log(data)
    let newIdea = document.getElementById('display'); //this selects the HTML tag
    newIdea.innerText = data.activity; //this displays the quote in the inner text of the HTML tag
    let listConnector = data.activity; // this assigns data.activity (the API Idea) a variable
    ideaList(listConnector); //this runs our API idea in the function 
}
    
   
// HAVE A BUTTON WHICH REFRESHES THE API
    
    const buttonElement = document.createElement("button");//create a button
    buttonElement.innerText = "click me";// add inner text on button
    document.body.appendChild(buttonElement);//adds the button to the page
    buttonElement.addEventListener("click", getData);//when button is clicked, the above function is run
    


//SAVE THE THE PREVIOUS SUGGESTIONS IN A LIST

function ideaList(savedIdea){
    let ol = document.getElementById('list'); //assigning the ol a variable
    let li = document.createElement("li"); // creating an li variable
    li.innerText = savedIdea; // this places the saved idea on the li
    ol.prepend(li); //this adds the li to the beginning of the ol (appendChild adds to the end of the ol)
    console.log(ol.children);
      
        if (ol.childElementCount > 10){ 
        li.remove(9);
     }    
}


//MAKE THE LIST THE 10 MOST RECENT
//removes the oldest and adds the newest

//assign the li list a variable
//if the list reaches 10 items
//item 10 is removed 

//how to do this??