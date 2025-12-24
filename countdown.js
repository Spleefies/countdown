checkbox = document.querySelector("input")
function countdown(date, id) {
    let examDate = new Date(date).getTime();
    
    let x = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = examDate - now;
        
        let days = Math.floor(timeLeft / 86400000);
        let hours = Math.floor((timeLeft % 86400000) / 3600000);
        let minutes = Math.floor((timeLeft % 3600000) / 60000);
        let seconds = Math.floor((timeLeft % 60000) / 1000);
        let milliseconds = (timeLeft % 1000);
        
        document.getElementById(id).innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s "
        if (checkbox.checked == true) {
            document.getElementById(id).innerHTML += milliseconds + "ms"
        }

        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById(id).parentElement.style.display = 'none'
        }
    }, 1);
};
countdown("Nov 10, 2025 08:00:00", "ProgressReport");
countdown("Nov 10, 2025 13:00:00", "SIL");