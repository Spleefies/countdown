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
        
        if (!element) return

        element.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s "
            
        if (checkbox.checked) {
            element.innerHTML += milliseconds + "ms"
        }
            
        if (timeLeft < 0) {
            clearInterval(x)
            element.parentElement.remove()
        }
    }, 16.67)
}
countdown("Feb 26, 2026 10:45:00", "HU2131-assesment")
countdown("Feb 27 2026 13:00:00", "MA2133-gt2")
countdown("Mar 10, 2026 10:00:00", "CH2531-compo1")
countdown("Apr 7, 2026 10:00:00", "CH2531-compo2")
countdown("Apr 21, 2026 10:00:00", "CH2531-email")
countdown("May 5, 2026 10:15:00", "CH2531-t2")
countdown("May 8, 2026 10:15:00", "BL2131-practical")
//c
countdown("Mar 3, 2026 13:00:00", "MA2133-ct")
countdown("Mar 3, 2026 15:00:00", "EL2131-ct")
countdown("Mar 5, 2026 13:00:00", "PC2131-ct")
countdown("Mar 5, 2026 15:00:00", "BL2131-ct")
countdown("Apr 27, 2026 08:30:00", "EL2131-ct2")
countdown("Apr 27, 2026 10:30:00", "CM2131-ct")
countdown("Apr 30, 2026 08:30:00", "MA2133-ct2")
countdown("Apr 30, 2026 10:30:00", "BL2131-ct2")