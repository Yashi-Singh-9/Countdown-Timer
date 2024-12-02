// Set the target date to the upcoming New Year
const targetDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

// Update the countdown every second
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the DOM elements
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    document.querySelector('.timer').innerHTML = '<h2>Happy New Year!</h2>';
  }
}

// Initial call and interval setup
updateCountdown();
setInterval(updateCountdown, 1000);
