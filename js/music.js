// music.js — 背景音乐（Web Audio合成儿歌旋律）

let audioCtx = null;
let musicPlaying = false;
let musicTimeout = null;
let gainNode = null;

// 简单儿歌旋律（C大调，类似小星星/两只老虎节奏）
const MELODY = [
  // [音符频率, 时长(拍)]
  [262, 1], [262, 1], [392, 1], [392, 1], [440, 1], [440, 1], [392, 2],
  [349, 1], [349, 1], [330, 1], [330, 1], [294, 1], [294, 1], [262, 2],
  [392, 1], [392, 1], [349, 1], [349, 1], [330, 1], [330, 1], [294, 2],
  [392, 1], [392, 1], [349, 1], [349, 1], [330, 1], [330, 1], [294, 2],
  [262, 1], [262, 1], [392, 1], [392, 1], [440, 1], [440, 1], [392, 2],
  [349, 1], [349, 1], [330, 1], [330, 1], [294, 1], [294, 1], [262, 2],
];

const BPM = 140;
const BEAT_MS = 60000 / BPM;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.3;
    gainNode.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playNote(freq, duration) {
  if (!audioCtx || !musicPlaying) return;
  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.value = freq;
  
  noteGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
  noteGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration * 0.9);
  
  osc.connect(noteGain);
  noteGain.connect(gainNode);
  
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + duration);
}

let melodyIndex = 0;

function playMelody() {
  if (!musicPlaying) return;
  
  const [freq, beats] = MELODY[melodyIndex];
  const duration = (beats * BEAT_MS) / 1000;
  
  playNote(freq, duration);
  
  melodyIndex = (melodyIndex + 1) % MELODY.length;
  musicTimeout = setTimeout(playMelody, beats * BEAT_MS);
}

function startMusic() {
  initAudio();
  musicPlaying = true;
  melodyIndex = 0;
  playMelody();
  updateMusicBtn();
}

function stopMusic() {
  musicPlaying = false;
  if (musicTimeout) {
    clearTimeout(musicTimeout);
    musicTimeout = null;
  }
  updateMusicBtn();
}

function toggleMusic() {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}

function updateMusicBtn() {
  const btn = document.getElementById('btn-music');
  if (btn) {
    btn.textContent = musicPlaying ? '♫' : '♪';
    btn.style.opacity = musicPlaying ? '1' : '0.5';
  }
}
