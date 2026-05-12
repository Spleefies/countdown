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
        
        const notdisplayDays = days == 0
        const notdisplayHours = notdisplayDays && hours == 0
        const notdisplayMinutes = notdisplayHours && minutes == 0
        const notdisplaySeconds = notdisplayMinutes && seconds == 0

        if (!element) return

        element.innerHTML =
            (notdisplayDays ?'' : `${days}d `) +
            (notdisplayHours ? '' : `${hours}h `) +
            (notdisplayMinutes ? '' : `${minutes}m `) +
            (notdisplaySeconds ? '' : `${seconds}s `)
            
        if (checkbox.checked) {
            element.innerHTML += `${milliseconds}ms`.padStart(5, 0)
        }
            
        if (timeLeft < 0) {
            clearInterval(x)
            element.parentElement.remove()
        }
    }, 16.67)
}
countdown("May 12, 2026 11:15:00", "EL2131-p1")