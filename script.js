document.addEventListener('DOMContentLoaded', () => {
    const targetDateInput = document.getElementById('target-date');
    const startTimerButton = document.getElementById('start-timer');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const messageElement = document.getElementById('timer-message');
    
    let countdownInterval;

    // Function to pad single digits with a leading zero
    const pad = (num) => num.toString().padStart(2, '0');

    // Start the countdown
    startTimerButton.addEventListener('click', () => {
        // Clear any existing countdown
        clearInterval(countdownInterval);
        
        // Reset display and message
        messageElement.textContent = '';
        
        // Get the target date from input
        const targetDate = new Date(targetDateInput.value).getTime();

        // Validate input
        if (isNaN(targetDate)) {
            alert('Please select a valid date and time');
            return;
        }

        // Start countdown
        countdownInterval = setInterval(() => {
            // Get current time
            const now = new Date().getTime();
            
            // Calculate time remaining
            const timeRemaining = targetDate - now;
            
            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update display
            daysElement.textContent = pad(days);
            hoursElement.textContent = pad(hours);
            minutesElement.textContent = pad(minutes);
            secondsElement.textContent = pad(seconds);

            // Check if countdown is complete
            if (timeRemaining < 0) {
                clearInterval(countdownInterval);
                messageElement.textContent = 'Countdown Completed!';
                
                // Reset display
                daysElement.textContent = '00';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
            }
        }, 1000);
    });
});
