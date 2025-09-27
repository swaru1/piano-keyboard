// Map each keyboard key to one piano note
const KEY_MAP = {
  z: "C1",
  s: "Db1", // instead of C#1
  x: "D1",
  d: "Eb1", // instead of D#1
  c: "E1",
  v: "F1",
  g: "Gb1", // instead of F#1
  b: "G1",
  h: "Ab1", // instead of G#1
  n: "A1",
  j: "Bb1", // instead of A#1
  m: "B1",

  // Octave 2
  q: "C2",
  2: "Db2",
  w: "D2",
  3: "Eb2",
  e: "E2",
  r: "F2",
  5: "Gb2",
  t: "G2",
  6: "Ab2",
  y: "A2",
  7: "Bb2",
  u: "B2",

  // Octave 3
  i: "C3",
  9: "Db3",
  o: "D3",
  0: "Eb3",
  p: "E3",
  "[": "F3",
  "=": "Gb3",
  "]": "G3",
  "\\": "Ab3",
  ";": "A3",
  "'": "Bb3",
  "/": "B3"
};


const keys = document.querySelectorAll(".key");

// 🎹 Click support
keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});

// 🎹 Keyboard support
document.addEventListener("keydown", e => {
  if (e.repeat) return; // ignore holding key down
  const note = KEY_MAP[e.key];
  if (note) {
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) playNote(keyElement);
  }
});

function playNote(keyElement) {
  const noteAudio = document.getElementById(keyElement.dataset.note);
  if (!noteAudio) return;

  noteAudio.currentTime = 0;
  noteAudio.play();
  keyElement.classList.add("active");

  noteAudio.addEventListener("ended", () => {
    keyElement.classList.remove("active");
  });
}
