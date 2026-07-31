document.getElementById("studyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const grade = document.getElementById("grade").value;
    const subjects = document.getElementById("subjects").value;
    const exam = document.getElementById("exam").value;
    const hours = document.getElementById("hours").value;
    const level = document.getElementById("level").value;
    const weak = document.getElementById("weak").value;
    const strong = document.getElementById("strong").value;
    const learning = document.getElementById("learning").value;
    const target = document.getElementById("target").value;

    const output = document.getElementById("output");

    output.style.display = "block";

    output.innerHTML = `
        <h2>Personalized Study Plan for ${name}</h2>

        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Subjects:</strong> ${subjects}</p>
        <p><strong>Exam Date:</strong> ${exam}</p>
        <p><strong>Available Study Time:</strong> ${hours} hours/day</p>
        <p><strong>Skill Level:</strong> ${level}</p>
        <p><strong>Learning Style:</strong> ${learning}</p>
        <p><strong>Target Score:</strong> ${target}</p>

        <hr>

        <h3>Student Analysis</h3>
        <p>Focus on improving the following weak topics: <strong>${weak}</strong>.</p>
        <p>Maintain regular practice in your strong topics: <strong>${strong}</strong>.</p>

        <h3>Daily Study Plan</h3>
        <ul>
            <li>30 minutes – Revise previous day's topics</li>
            <li>${Math.round(hours * 0.5)} hour(s) – Study weak subjects</li>
            <li>15 minutes – Short break</li>
            <li>${Math.round(hours * 0.3)} hour(s) – Practice questions</li>
            <li>Remaining time – Revise notes and solve sample papers</li>
        </ul>

        <h3>Weekly Goals</h3>
        <ul>
            <li>Complete all planned topics.</li>
            <li>Take one full-length mock test.</li>
            <li>Review mistakes and revise difficult concepts.</li>
        </ul>

        <h3>Study Tips</h3>
        <ul>
            <li>Follow a consistent study routine.</li>
            <li>Take short breaks to stay focused.</li>
            <li>Practice previous years' questions.</li>
            <li>Revise important concepts every week.</li>
            <li>Sleep well and stay hydrated.</li>
        </ul>

        <h3>Motivation</h3>
        <p>Success comes from consistent effort. Stay disciplined, trust your preparation, and keep moving toward your goal.</p>
    `;
});
