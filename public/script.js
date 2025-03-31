function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Update the digits
    document.getElementById('hour1').textContent = hours[0];
    document.getElementById('hour2').textContent = hours[1];
    document.getElementById('minute1').textContent = minutes[0];
    document.getElementById('minute2').textContent = minutes[1];
    document.getElementById('second1').textContent = seconds[0];
    document.getElementById('second2').textContent = seconds[1];
  }
  
  // Initial call to set the clock
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  