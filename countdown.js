const checkbox = document.querySelector("input")
const confetti = document.getElementById("confetti")
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
                document.getElementById(id).textContent="HAPPY NEW YEAR!"
            for (let i = 0; i < 100; i++) {
                const x = (Math.random() - 0.5) * window.innerWidth
                const y = (Math.random() - 0.5) * window.innerHeight
                const rotate = Math.random() * 360
                const rotatex = Math.random() * 360
                const rotatey = Math.random() * 360
            
                const div = document.createElement('div')
                div.style.setProperty("--x", x + "px")
                div.style.setProperty("--y", y + "px")
                div.style.setProperty("--r", rotate + "deg")
                div.style.setProperty("--rx", rotatex + "deg")
                div.style.setProperty("--ry", rotatey + "deg")
                div.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`
                confetti.appendChild(div)
            }
            confetti.querySelectorAll("div").forEach(div => {
                div.getBoundingClientRect()
                requestAnimationFrame(() => {
                    div.style.transform = `
                    translate(var(--x),var(--y))
                    rotate(var(--r))
                    rotateX(var(--rx))
                    rotateY(var(--ry))
                    `
                })
            })
        }
    }, 16.67)
}
countdown("Jan 1, 2026 00:00:00", "2026")
// countdown("Dec 31, 2025 16:16:16", "2026")
