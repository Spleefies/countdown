const checkbox = document.querySelector("input")
function countdown(date, id) {
    const element = document.getElementById(id)
    const targetDate = new Date(date).getTime()
    
    const x = setInterval(() => {
        const now = new Date().getTime()
        const timeLeft = targetDate - now
        
        const days = Math.floor(timeLeft / 86400000)
        const hours = Math.floor((timeLeft % 86400000) / 3600000)
        const minutes = Math.floor((timeLeft % 3600000) / 60000)
        const seconds = Math.floor((timeLeft % 60000) / 1000)
        const milliseconds = (timeLeft % 1000)
        
        element.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s "
            
            if (checkbox.checked == true) {
                element.innerHTML += milliseconds + "ms"
            }
            
            if (timeLeft < 0) {
                clearInterval(x)
                document.getElementById(id).parentElement.remove()
        }
    }, 16.67)
}
countdown("Jan 21, 2026 09:15:00", "bio-enzyme-quiz")
countdown("Mar 5, 2026 08:00:00", "phy-ct1")