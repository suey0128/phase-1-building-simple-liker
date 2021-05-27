// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


//hide the error msg on top
// let modal = document.querySelector('#modal').hidden = true;
let modal = document.querySelector('#modal');
modal.className = 'hidden';

const init = () => {
  fetch('http://mimicServer.example.com')
    // .then(data => data.forEach(renderAnimal))
  .then(data => {
    const likeBtns = document.querySelectorAll('.like');
    for (likeBtn in likeBtns) {
      likeBtn.addEventListener('click',(e) => {
        e.target.className = 'activated-heart';
      })
    }
    })
    // .catch(error => console.error('Error:', error))
  .catch(error => {
      modal.className = '';
      setTimeout(timeOutCB, 3000)
  })
}

const timeOutCB = () => {
  modal.className = 'hidden';
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
