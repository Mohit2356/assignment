// // Toggle live status on button click
// const statusEl = document.querySelector('.status');
// const buttonEl = document.querySelector('.live-btn');

// let isLive = false;

// buttonEl.addEventListener('click', () => {
//   isLive = !isLive;

//   if (isLive) {
//     statusEl.textContent = 'Online';
//     statusEl.style.backgroundColor = '#28a745'; // Green
//     buttonEl.textContent = 'Stop Live Stream';
//     buttonEl.style.borderColor = '#28a745';
//     buttonEl.style.color = '#fff';
//     buttonEl.style.backgroundColor = '#28a745';
//   } else {
//     statusEl.textContent = 'Offline';
//     statusEl.style.backgroundColor = '#e95f9c'; // Pink
//     buttonEl.textContent = 'Start Live Stream';
//     buttonEl.style.borderColor = '#e95f9c';
//     buttonEl.style.color = '#e95f9c';
//     buttonEl.style.backgroundColor = 'transparent';
//   }
// });