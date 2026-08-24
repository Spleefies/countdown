import 'https://cdn.jsdelivr.net/npm/hash-wasm@4/dist/xxhash3.umd.min.js'

const checkbox = document.querySelector("input")
function countdown(date, id) {
    const element = document.getElementById(id)
    const targetDate = new Date(date).getTime()
    
    const x = setInterval(() => {
        const now = new Date().getTime()
        const timeLeft = targetDate - now
        
        const days         = Math.floor( timeLeft / 86400000)
        const hours        = Math.floor((timeLeft % 86400000) / 3600000)
        const minutes      = Math.floor((timeLeft % 3600000) / 60000)
        const seconds      = Math.floor((timeLeft % 60000) / 1000)
        const milliseconds = (timeLeft % 1000)
        
        const notdisplayDays    = days == 0
        const notdisplayHours   = notdisplayDays    && hours   == 0
        const notdisplayMinutes = notdisplayHours   && minutes == 0
        const notdisplaySeconds = notdisplayMinutes && seconds == 0

        if (!element) return

        element.innerHTML =
            (notdisplayDays    ? '' : `${days}d `   ) +
            (notdisplayHours   ? '' : `${hours}h `  ) +
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
const exams = [
    {
        name: "Chemistry Common Test",
        course: "CM2131",
        location: "Lower Auditorium",
        time: "August 26, 2026 14:00:00",
    },
    {
        name: "Biology Common Test",
        course: "BL2131",
        location: "Auditorium",
        time: "August 26, 2026 16:00:00",
    },
    {
        name: "Math Graded Task 7",
        course: "MA2133",
        location: "Classroom",
        time: "August 31, 2026 14:15:00"
    },
    {
        name: "Geography Class Test",
        course: "GE2133",
        location: null,
        time: "Sep 16, 2026 11:15:00"
    },
    {
        name: "Biology Olympiad Test",
        course: "BL2233",
        location: null,
        time: "Sep 17, 2026 16:30:00"
    },
    {
        name: "作文",
        course: "CH2531",
        location: "Classroom",
        time: "Sep 29, 2026 10:00:00"
    },
    {
        name: "Math Graded Task 8",
        course: "MA2133",
        location: "Classroom",
        time: "Sep 29, 2026 12:15:00"
    }
]
const examTable = document.getElementById('exam')

exams.forEach(async (exam) => {
    const examRow = document.createElement('tr')
    const id = await hashwasm.xxhash3(JSON.stringify(exam))
    examRow.innerHTML = /*html*/`
    <td>
        <details>
            <summary>${exam.name}</summary>
            <div>
                Course: ${exam.course}<br>
                ${exam.location ? `Location: ${exam.location}` : ''}
            </div>
        </details>
    </td>
    <td id='${id}'>${exam.time}</td>
    `
    examTable.append(examRow)
    countdown(exam.time, id)
})