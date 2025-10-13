addEventListener("keydown", playSound);
let isPlaying = false;
let isRecording = false;
let recordedKey = {};
let audioRecorded = {};
let start;


function playSound(event) {
  if (event.repeat) {
    return;
  }
  if (event.keyCode != 80 && event.keyCode != 82) {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    key.classList.add("playing");

    if (key && audio) {
      audio.currentTime = 0;
      audio.play();

      
      if (isRecording) {
        // on enregistre la note
        
        let millis = Date.now() - start;
        recordedKey[millis] = event.keyCode;
        audioRecorded = [audio]
        console.log(audioRecorded);
       
        // console.log(recordedKey);
        
        
      }
     
    }
  } else {
    recordOrPlay(event.keyCode);
  }
}

function recordOrPlay(keyCode) {

  if (keyCode === 80) {
    isPlaying = !isPlaying
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (isPlaying) {
      
      
    }

  }

  if (keyCode === 82) {
    isRecording = !isRecording;
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    key.classList.toggle("playing");

    if (isRecording) {
      start = Date.now();
      recordedKey = {};
      
    }
  } else {
    beatBox();
  }
}

// addEventListener("keydown", recordAndPlay);
// function recordAndPlay(event) {
//   let keyRecord = [event.keyCode];
//   keyRecord.forEach((element) => {});
// }

addEventListener("keyup", removeTransition);
function removeTransition(event) {
  if (event.keyCode === 80 || event.keyCode === 82) return;
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (key) {
    key.classList.remove("playing");
  }
}

//  fonction qui simule la pression d'une touche

function simulateKey(keyPressed) {
  let keyDown = new KeyboardEvent("keydown", { keyCode: keyPressed });
  let keyUp = new KeyboardEvent("keyup", { keyCode: keyPressed });
  dispatchEvent(keyDown);
  setTimeout(() => {
    dispatchEvent(keyUp);
  }, 300);
}

async function beatBox() {
  // await playBeat(recordedKey);
  
  console.log(audioRecorded);
  
  
}

function playBeat(keyDelay, keyCode) {
  return new Promise((resolve) => {
    setTimeout(() => {
      simulateKey(keyCode);
      resolve();
    }, keyDelay);
  });
}

// addEventListener("keydown", BeatBox);
// function BeatBox(event) {

//   function simulateKey(event) {
//     new KeyboardEvent ("keydown")

//   }

//   function playBeat(event) {

//   }
// }

//  if (event.keyCode === 82) {
//     console.log("hello");

// function preparerCafe() {
//   return new Promise((resolve, reject) => {
//     console.log("Etape 1 : Préparer le café");

//     setTimeout(() => {
//       const succes = true;
//       if (succes) {
//         resolve("Café pret !");
//       } else {
//         reject("Plus de café !");
//       }
//     }, 2000);
//   });
// }
// async function routineMatin() {
//   console.log("Reveil...");
//   const cafe = await preparerCafe();
//   console.log(cafe);
//   console.log("Je bois le café");
// }

// routineMatin();

// console.log("Pendant ce temps là je regarde mes mails");
