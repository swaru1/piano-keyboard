const keys = document.querySelectorAll('.key');
const audio = new Audio();

// Notes per octave
const octaveNotes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];

// Sharp → Flat conversion for filenames
const sharpToFlat = {
  "c#": "Db",
  "d#": "Eb",
  "f#": "Gb",
  "g#": "Ab",
  "a#": "Bb"
};

// Build a mapping for 36 keys (C1–B3)
const noteMap = {};
let octave = 4;

for (let i = 0; i < 36; i++) {
  const note = octaveNotes[i % 12];
  if (i % 12 === 0 && i !== 0) octave++; // shift octave every 12 keys

  if (sharpToFlat[note]) {
    noteMap[i] = sharpToFlat[note] + octave + ".mp3"; // e.g. Db1.mp3
  } else {
    noteMap[i] = note.toUpperCase() + octave + ".mp3"; // e.g. C1.mp3
  }
}

// Function to play tune
const playTune = (index) => {
  const file = noteMap[index];
  if (!file) return;

  audio.src = "tunes/" + file; 
  audio.play();

  // highlight clicked key
  keys[index].classList.add("active");
  setTimeout(() => keys[index].classList.remove("active"), 200);
};

// Click listener
keys.forEach((key, index) => {
  key.addEventListener('click', () => playTune(index));
});

// Keyboard listener (optional)
// You can map physical keys to piano keys here
document.addEventListener('keydown', (e) => {
  // Example: press 'a' = first key
  const mapping = {
    "a": 0, "w": 1, "s": 2, "e": 3, "d": 4,
    "f": 5, "t": 6, "g": 7, "y": 8, "h": 9,
    "u": 10, "j": 11, "k": 12, "l": 13, "m": 14,
  };
  const index = mapping[e.key];
  if (index !== undefined) playTune(index);
});
