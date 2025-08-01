let workDuration = 25 * 60;
let shortBreak = 5 * 60;
let longBreak = 15 * 60;
let pomodorosBeforeLong = 4;

let timer = workDuration;
let interval = null;
let isRunning = false;
let pomodoroCount = 0;
let currentSession = 'Work';

const countdownEl = document.getElementById('countdown');
const sessionTypeEl = document.getElementById('session-type');
const cycleIndicatorEl = document.getElementById('cycle-indicator');

function updateSettings() {
  workDuration = parseInt(document.getElementById('work-duration').value) * 60;
  shortBreak = parseInt(document.getElementById('short-break-duration').value) * 60;
  longBreak = parseInt(document.getElementById('long-break-duration').value) * 60;
  pomodorosBeforeLong = parseInt(document.getElementById('pomodoros-before-long').value);
  if (currentSession === 'Work') timer = workDuration;
  updateDisplay();
  updateCycleIndicator();
}

function updateDisplay() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
 countdownEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  sessionTypeEl.textContent = currentSession;
}

function updateCycleIndicator() {
  let indicator = '';
  for (let i = 0; i < pomodorosBeforeLong; i++) {
    indicator += i < pomodoroCount ? '🔴 ' : '⚪ ';
  }
  cycleIndicatorEl.textContent = indicator.trim();
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      if (timer > 0) {
        timer--;
        updateDisplay();
      } else {
        clearInterval(interval);
        isRunning = false;
        transitionSession();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  pomodoroCount = 0;
  currentSession = 'Work';
  timer = workDuration;
  updateDisplay();
  updateCycleIndicator();
}

function transitionSession() {
  if (currentSession === 'Work') {
    pomodoroCount++;
    if (pomodoroCount >= pomodorosBeforeLong) {
      currentSession = 'Long Break';
      timer = longBreak;
      pomodoroCount = 0; // reset cycle
    } else {
      currentSession = 'Short Break';
      timer = shortBreak;
    }
  } else {
    currentSession = 'Work';
    timer = workDuration;
  }
  updateDisplay();
  updateCycleIndicator();
  startTimer(); // auto start next session
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', () => {
    updateSettings();
    resetTimer();
  });
});

updateSettings();