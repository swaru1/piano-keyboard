// Map each keyboard key to one piano note
const KEY_MAP = {
a :'C4',
w :'Db4',
s :'D4',
e :'Eb4',
d :'E4',
f :'F4',
t :'Gb4',
g :'G4',
y :'Ab4',
h :'A4',
u :'Bb4',
j :'B4',
};


const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", e => {
  if (e.repeat) return;
  const note = KEY_MAP[e.key];
  if (note) {
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
      playNote(keyElement);
      keyElement.classList.add("active");
    }
  }
});

document.addEventListener("keyup", e => {
  const note = KEY_MAP[e.key];
  if (note) {
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
      keyElement.classList.remove("active");
      stopNote(keyElement);
    }
  }
});

function playNote(keyElement) {
  const noteAudio = document.getElementById(keyElement.dataset.note);
  if (!noteAudio) return;
  noteAudio.currentTime = 0;
  noteAudio.play();
}

function stopNote(keyElement) {
  const noteAudio = document.getElementById(keyElement.dataset.note);
  if (!noteAudio) return;
  noteAudio.pause();
  noteAudio.currentTime = 0;
}
