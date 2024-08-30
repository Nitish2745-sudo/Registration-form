document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const college = document.getElementById('college').value;
    const skills = document.getElementById('skills').value;
    const project = document.getElementById('project').value;
    const about = document.getElementById('about').value;

    const displayData = `
        <div class="box">
            <h2>Registration Summary</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>College/City:</strong> ${college}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <p><strong>Project Categories:</strong> ${project}</p>
            <p><strong>About:</strong> ${about}</p>
        </div>
    `;

    document.body.innerHTML = displayData;
});
