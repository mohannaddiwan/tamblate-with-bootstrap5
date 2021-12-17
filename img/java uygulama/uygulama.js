


// var slider = Array.from(document.querySelectorAll('.slider img'));

// var X = 1;
// var slidercount = slider.length;
// var sliderNum = document.getElementById('slider-num');
// var nextB = document.getElementById('next');
// var prevB = document.getElementById('prev');

// nextB.onclick = nextSlide;
// prevB.onclick = prevSlide;


// var ulElement = document.createElement('ul');
// ulElement.setAttribute('id', 'Element-ul');




// for (var i = 1; i <= slidercount; i++) {
//     var liElement = document.createElement('li');
//     liElement.setAttribute('data-Index', i);

//     liElement.appendChild(document.createTextNode(i));
//     ulElement.appendChild(liElement);
    
// }

// document.getElementById('indicators').appendChild(ulElement);

// var Ul = document.getElementById('Element-ul');

// var arrayOfspan = Array.from(document.querySelectorAll('#Element-ul li'));


// for(var i=0; i<arrayOfspan.length; i++){
//     arrayOfspan[i].onclick = function(){
//         X = parseInt(this.getAttribute('data-Index'))
//         check()
//     }
// } 
// check();
// function nextSlide() {

//     if(nextB.classList.contains('disabled')){
//         return false;
//     }else{X++
//         check();
       
//     }
    
// }
// function prevSlide() {
//     if(prevB.classList.contains('disabled')){
//         return false;
//     }else{
//         X--
//         check();
//     }
// }
//  function check(){
//  sliderNum.textContent = `slide # ${X} of ${slidercount} ` ;
// remove()
 
//  slider[X-1].classList.add('active');
//  ulElement.children[X-1].classList.add('active');

//  if(X == 1){
//     prevB.classList.add('disabled');
//  }else{
//     prevB.classList.remove('disabled');

//  }


//  if(X == slidercount){
//     nextB.classList.add('disabled');
//  }else{
//     nextB.classList.remove('disabled');

//  }


//  }
// function remove(){
//     slider.forEach(function(img){
//         img.classList.remove('active');

//     });

//     arrayOfspan.forEach(function(li){
//         li.classList.remove('active');
//     })
// }

//----------------------------------------------------------------

//  var control = document.querySelector('.control-B span').onclick = function(){
//     let yourName = prompt('your name');
//     if(yourName == null || yourName == ''){
//         document.querySelector('.name span').innerHTML = 'unknown'
//     }else{
//         document.querySelector('.name span').innerHTML = yourName

//     }

//     document.querySelector('.control-B').remove();
// }
// let duration = 1000;

// let blocksContainer = document.querySelector('.memory-game-blocks');

// let blocks = Array.from(blocksContainer.children);

// let orderRange = [...Array(blocks.length).keys()];


// shuffle(orderRange);

// blocks.forEach((block,index) => {
//     block.style.order = orderRange[index];

//     block.addEventListener('click',function(){
//         flipBlock(block);
//     });
// });

// function stopClicking(){
//     blocksContainer.classList.add('no-clicking');
    
//     setTimeout(() => {
//         blocksContainer.classList.remove('no-clicking');
//     },duration);
// }

// function shuffle (array){
//     let current = array.length,
//     temp,
//     random;

//     while(current > 0){
//         random = Math.floor(Math.random() * current);
//         current--;

//         temp = array[current];
//         array[current] = array[random];
//         array[random] = temp;

//     }
//     return array;
// }

// function flipBlock(selectedBlock){
//     selectedBlock.classList.add('is-flipped');
//     let allFlippedBlock = blocks.filter(flippedBlocks => flippedBlocks.classList.contains('is-flipped'));

//     if(allFlippedBlock.length === 2){
//         stopClicking();
//         check(allFlippedBlock[0],allFlippedBlock[1]);
//     }
// }
// function check(firstBlock, secondBlock){
// let triesElement = document.querySelector('.tries span');
   

//     if (firstBlock.dataset.technology === secondBlock.dataset.technology){

//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');

//         firstBlock.classList.add('isMatched');
//         secondBlock.classList.add('isMatched');

//        document.getElementById('success').play();
    
//     }
//     else
//     {
//         triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

//         setTimeout(() => {
//             firstBlock.classList.remove('is-flipped');
//             secondBlock.classList.remove('is-flipped');
//         },duration);
       
//     }
// }
//----------------------------------------------------------------

  var todo_container = document.querySelector('.todo-container');
  var add_task_input = document.querySelector('.add-task input');
  let theAddButton = document.querySelector('.add-task .plus');
  var NOtasks_content = document.querySelector('.no-tasks-message');
 var tasks_content = document.querySelector('.tasks-content');
  var tasks_count = document.querySelector('.tasks-count span');
  var tasks_completed= document.querySelector('.tasks-completed span');

 window.onload = function(){
     add_task_input.focus();
    
 }


 theAddButton.onclick = function () {
     if(add_task_input.value === ''){
         return false;
     }else{
         tasks_count.innerHTML = parseInt(tasks_count.innerHTML) + 1;
         NOtasks_content.style.display = 'none';
         var spanBox = document.createElement('span');
  var deletElement = document.createElement('span');
  var text = document.createTextNode(add_task_input.value);
  var delet = document.createTextNode('delet');
  spanBox.appendChild(deletElement);
  spanBox.appendChild(text);
  deletElement.appendChild(delet);
  tasks_content.appendChild(spanBox);
  spanBox.className = 'task-box';
  deletElement.className = 'delete';

       add_task_input.value = '';

       deletElement.onclick = function ()  {
         tasks_count.innerHTML = parseInt(tasks_count.innerHTML) - 1;

         spanBox.remove();
        
             if(tasks_count.innerHTML === '0'){
                 NOtasks_content.style.display = 'block';
                
    
             }
        
           
     }

   
     }
   
 }
//------------------------------

// Letters
// const letters = "abcdefghijklmnopqrstuvwxyz";

// // Get Array From Letters
// let lettersArray = Array.from(letters);

// // Select Letters Container
// let lettersContainer = document.querySelector(".letters");

// // Generate Letters
// lettersArray.forEach(letter => {

//   // Create Span
//   let span = document.createElement("span");

//   // Create Letter Text Node
//   let theLetter = document.createTextNode(letter);

//   // Append The Letter To Span
//   span.appendChild(theLetter);

//   // Add Class On Span
//   span.className = 'letter-box';

//   // Append Span To The Letters Container
//   lettersContainer.appendChild(span);

// });

// // Object Of Words + Categories
// const words = {
//   programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//   movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//   people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//   countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
// }

// // Get Random Property

// let allKeys = Object.keys(words);

// // Random Number Depend On Keys Length
// let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// // Category
// let randomPropName = allKeys[randomPropNumber];

// // Category Words
// let randomPropValue = words[randomPropName];

// // Random Number Depend On Words
// let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// // The Chosen Word
// let randomValueValue = randomPropValue[randomValueNumber];

// // Set Category Info
// document.querySelector(".game-info .category span").innerHTML = randomPropName;

// // Select Letters Guess Element
// let lettersGuessContainer = document.querySelector(".letters-guess");

// // Convert Chosen Word To Array
// let lettersAndSpace = Array.from(randomValueValue);

// // Create Spans Depened On Word
// lettersAndSpace.forEach(letter => {

//   // Create Empty Span
//   let emptySpan = document.createElement("span");

//   // If Letter Is Space
//   if (letter === ' ') {

//     // Add Class To The Span
//     emptySpan.className = 'with-space';

//   }

//   // Append Span To The Letters Guess Container
//   lettersGuessContainer.appendChild(emptySpan);

// });

// // Select Guess Spans
// let guessSpans = document.querySelectorAll(".letters-guess span");

// // Set Wrong Attempts
// let wrongAttempts = 0;

// // Select The Draw Element
// let theDraw = document.querySelector(".hangman-draw");

// // Handle Clicking On Letters
// document.addEventListener("click", (e) => {

//   // Set The Choose Status
//   let theStatus = false;

//   if (e.target.className === 'letter-box') {

//     e.target.classList.add("clicked");

//     // Get Clicked Letter
//     let theClickedLetter = e.target.innerHTML.toLowerCase();

//     // The Chosen Word
//     let theChosenWord = Array.from(randomValueValue.toLowerCase());

//     theChosenWord.forEach((wordLetter, WordIndex) => {

//       // If The Clicked Letter Equal To One Of The Chosen Word Letter
//       if (theClickedLetter == wordLetter) {

//         // Set Status To Correct
//         theStatus = true;

//         // Loop On All Guess Spans
//         guessSpans.forEach((span, spanIndex) => {

//           if (WordIndex === spanIndex) {

//             span.innerHTML = theClickedLetter;

//           }

//         });

//       }

//     });

//     // Outside Loop

//     // If Letter Is Wrong
//     if (theStatus !== true) {

//       // Increase The Wrong Attempts
//       wrongAttempts++;

//       // Add Class Wrong On The Draw Element
//       theDraw.classList.add(`wrong-${wrongAttempts}`);

//       // Play Fail Sound

//       if (wrongAttempts === 8) {

//         endGame();

//         lettersContainer.classList.add("finished");

//       }

//     } else {

//       // Play Success Sound

//     }

//   }

// });

// // End Game Function
// function endGame() {

//   // Create Popup Div
//   let div = document.createElement("div");

//   // Create Text
//   let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

//   // Append Text To Div
//   div.appendChild(divText);

//   // Add Class On Div
//   div.className = 'popup';

//   // Append To The Body
//   document.body.appendChild(div);

// }
//-----------------------------------------
// const A_Z = 'abcdefghijklmnopqrstvxzy';
// let lettersContainer = document.querySelector('.letters');

// let arrayofword = Array.from(A_Z);

// arrayofword.forEach(letter => {
//   let span = document.createElement('span');
//   let spanText = document.createTextNode(letter);
//   span.appendChild(spanText);
//   span.classList.add('letter-box');

//   lettersContainer.appendChild(span);
// })

// const words = {
//     programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
//     movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
//     people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
//     countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
//   }
  
//   let allOfkeys = Object.keys(words);
//   let random = Math.floor(Math.random() * allOfkeys.length);
//   let randomOfkey = allOfkeys[random];
//   let randomOfvalue = words[randomOfkey];
//   let randomOfvalueValue = Math.floor(Math.random() * randomOfvalue.length);
//   let valueValue = randomOfvalue[randomOfvalueValue];
//   document.querySelector('.game-info .category span').innerHTML = randomOfkey;

//   let textContainer = document.querySelector('.letters-guess');

//  let arrayOfvalue = Array.from(valueValue);

//  arrayOfvalue.forEach(letter => {
//    let newSpan = document.createElement('span');
//   if(letter === ' '){
//     newSpan.classList.add('with-space')
//   }
//    textContainer.appendChild(newSpan);
//  })

//  let guessSpans = document.querySelectorAll(".letters-guess span");
//  let men = document.querySelector('.hangman-draw');

//  document.addEventListener('click',(e) =>{
//   let state = false;


//   if(e.target.ClassName === 'letter-box'){
//     e.target.classList.add('clicked');

//     let theClicked = e.target.innerHTML.toLowerCase();
//     let chossenWord = Array.from(valueValue.toLowerCase());
//     console.log(chossenWord);
//     console.log(theClicked);

//     chossenWord.forEach((letter,indexLitter) => {
//       if(theClicked === letter){
//         state = true;
//         guessSpans.forEach((span,spanIndex) => {

//           if(spanIndex === letter){
//             span.innerHTML = theClicked;
//           }
//         })

        
//       }
//     })
    
//   }

 
//  })

//-------------------

/*   Local storage  */

let allSpan = document.querySelectorAll('.button span');
let result = document.querySelector('.result > span');
let theInput = document.getElementById('the-input');


allSpan.forEach(span => {
    span.addEventListener('click',(e) => {
        if(e.target.classList.contains('check-item')){
            checkItem();
            
        }
        if(e.target.classList.contains('add-item')){
            addItem();

        }
        if(e.target.classList.contains('delet-item')){
            deletItem();

        }
        if(e.target.classList.contains('show-item')){
            showItem();

        }
    })
});

function showMessage(){
    result.innerHTML = 'empty'
}

function checkItem(){
    if(theInput.value !== ''){
        if(localStorage.getItem(theInput.value)){
            result.innerHTML = `Found local item called <span> ${theInput.value} </span>`;
        }else{
            result.innerHTML = `No local item called <span> ${theInput.value} </span>`;

        }
        
    }else{
        showMessage();

    }
}
function addItem(){
    if(theInput.value !== ''){
      localStorage.setItem(theInput.value,'test');
        result.innerHTML = `Local storage item <span>${theInput.value}</span> added`;
        // theInput.value = '';
        
    }else{
        showMessage();

    }
}

function deletItem(){

    if(theInput.value !== ''){

        if(localStorage.getItem(theInput.value)){
            result.innerHTML = ` local item  <span> ${theInput.value} </span> deleted`;
            localStorage.removeItem(theInput.value);
            result.value = '';

        }else{
            result.innerHTML = `No local item with the name <span> ${theInput.value} </span>`;

        }

    }else{
        showMessage();
    }
}
function showItem(){
    console.log(localStorage.length);
    result.innerHTML = '';
    if(localStorage.length){
        for(let [key,value] of Object.entries(localStorage)){
            result.innerHTML += `<span class='keys'>${key}</span>`;
        }


    }else{
        result.innerHTML = 'local is empty';
    }
}

/*   Local storage  */
