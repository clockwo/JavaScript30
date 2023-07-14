const keys = document.getElementsByClassName('key');

function playMusic(key) {
  let audio = document.querySelector(`audio[data-key=${key}]`);
  audio.play();
}

function setCssClass(element, cssClass) {
  element.classList.add(cssClass);
}

function removeTransition(e) {
  // console.log(e);
  e.target.classList.remove('playing');
}

// Get key from user input
window.addEventListener('keydown', (e) => {
  // Determine if the key is in the array
  for (const item of keys) {
    if (item.dataset.key === e.code) {
      // if key is in the array play music and set css class to element
      playMusic(e.code);
      setCssClass(item, 'playing');
    }
  }
});

// after setting css class to element wait for 100ms and then set default css class to element
[...keys].forEach((key) =>
  key.addEventListener('transitionend', removeTransition)
);
