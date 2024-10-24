function generateResume(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

    // Generate resume content for the new tab
    const resumeContent = `
        <html>
        <head>
            <title>${name}'s CV</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                    background-color: #f4f4f4;
                }
                .resume-container {
                    width: 70%;
                    margin: 0 auto;
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                }
                .resume-header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px;
                }
                .resume-header h1 {
                    margin: 0;
                    font-size: 36px;
                }
                .resume-header p {
                    margin: 5px 0;
                    font-size: 16px;
                }
                h3 {
                    color: #4CAF50;
                    border-bottom: 2px solid #4CAF50;
                    padding-bottom: 5px;
                    margin-bottom: 15px;
                }
                ul {
                    list-style-type: disc;
                    padding-left: 20px;
                }
                .section {
                    margin-top: 20px;
                    padding: 15px;
                    border-left: 3px solid #4CAF50;
                    background-color: #f9f9f9;
                    border-radius: 5px;
                }
                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    display: block;
                    margin: 20px auto;
                }
                button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <div class="resume-container">
                <div class="resume-header">
                    <h1>${name}</h1>
                    <p>Email: ${email} | Phone: ${phone}</p>
                </div>
                <div class="section">
                    <h3>Profile Summary</h3>
                    <p>${summary}</p>
                </div>
                <div class="section">
                    <h3>Education</h3>
                    <p>${education}</p>
                </div>
                <div class="section">
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </div>
                <div class="section">
                    <h3>Skills</h3>
                    <ul>
                        ${skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <button onclick="window.print()">Print Resume</button>
        </body>
        </html>
    `;

    // Open the resume in a new tab and write the content
    const newTab = window.open();
    newTab.document.write(resumeContent);
    newTab.document.close(); // Important to finish writing and render the content
}
