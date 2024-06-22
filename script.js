document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const uploadForm = document.getElementById('upload-form');
    const assessmentList = document.getElementById('assessment-list');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Signed up with Name: ${name}, Email: ${email}`);
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const files = document.getElementById('documents').files;
        if (files.length > 0) {
            alert(`${files.length} files uploaded successfully.`);
        } else {
            alert('No files selected.');
        }
    });

    const assessments = [
        { title: 'Assessment 1', description: 'Description for assessment 1' },
        { title: 'Assessment 2', description: 'Description for assessment 2' }
    ];

    if (assessments.length > 0) {
        assessmentList.innerHTML = assessments.map(a => `
            <div class="assessment">
                <h3>${a.title}</h3>
                <p>${a.description}</p>
            </div>
        `).join('');
    }
});
