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
        name: "CS Lab Test 2",
        course: "CS2241",
        location: "Computer Lab 2",
        time: "October 8, 2026 16:30:00"
    },
    {
        name: "Chemistry Olympiad Test 2",
        course: "CM2231",
        location: "D4-06",
        time: "October 8, 2026 16:30:00"
    },
    {
        name: "Physics Olympiad Test 2",
        course: "PC2231",
        location: "D4-17",
        time: "October 8, 2026 16:30:00"
    },
    {
        name: "English EOY",
        course: "EL2131",
        location: "Hall",
        time: "October 13, 2026 14:00:00"
    },
    {
        name: "English EOY",
        course: "EL2131",
        location: "Hall",
        time: "October 13, 2026 14:00:00"
    },
    {
        name: "MT EOY",
        course: "CH2531/CL2531/CL2332/MH2531/TH2531",
        location: "Hall",
        time: "October 14, 2026 14:00:00"
    },
    {
        name: "Geography EOY",
        course: "GE2133",
        location: "Hall",
        time: "October 20, 2026 08:00:00"
    },
    {
        name: "History EOY",
        course: "HY2133",
        location: "Hall",
        time: "October 20, 2026 08:00:00"
    },
    {
        name: "English Literature EOY",
        course: "EN2131",
        location: "Hall",
        time: "October 20, 2026 08:00:00"
    },
    {
        name: "Biology EOY",
        course: "BL2131",
        location: "Hall",
        time: "October 21, 2026 08:00:00"
    },
    {
        name: "Chemistry EOY",
        course: "CM2131",
        location: "E1-13/14/15/16, E2-10/11",
        time: "October 22, 2026 14:00:00"
    },
    {
        name: "Physics EOY",
        course: "PC2131",
        location: "Hall",
        time: "October 23, 2026 14:30:00"
    },
    {
        name: "Math EOY",
        course: "MA2133 / MA3133",
        location: "Hall",
        time: "October 26, 2026 08:00:00"
    },
    {
        name: "3rd Language EOY",
        course: "CL2232 / ML2232",
        location: "E1-13/14",
        time: "October 29, 2026 08:00:00"
    },
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
