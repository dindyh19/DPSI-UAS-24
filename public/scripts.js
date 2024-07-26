document.addEventListener('DOMContentLoaded', () => {
    // Show the login page by default
    showPage('login');

    // Handle form submission for login
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Form Data:', { username, password }); // Tambahkan log di sini

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // On successful login, show the dashboard page
            showPage('dashboard');
        } else {
            alert('Login failed');
        }
    });

    // Fetch stakeholders and requirements
    document.getElementById('fetchStakeholders').addEventListener('click', async () => {
        const response = await fetch('/api/stakeholders');
        const data = await response.json();
        document.getElementById('stakeholderList').innerHTML = JSON.stringify(data, null, 2);
    });

    document.getElementById('fetchRequirements').addEventListener('click', async () => {
        const response = await fetch('/api/requirements');
        const data = await response.json();
        document.getElementById('requirementList').innerHTML = JSON.stringify(data, null, 2);
    });

    // Fetch and submit priority data
    document.getElementById('fetchData').addEventListener('click', async () => {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.getElementById('dataList').innerHTML = JSON.stringify(data, null, 2);
    });

    document.getElementById('priorityForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const criteria = document.getElementById('criteria').value;

        const response = await fetch('/api/prioritize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ criteria })
        });

        if (response.ok) {
            alert('Criteria submitted');
        } else {
            alert('Submission failed');
        }
    });

    // Update criteria and rank needs
    document.getElementById('updateCriteriaForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const updatedCriteria = document.getElementById('updateCriteria').value;

        const response = await fetch('/api/update-criteria', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ updatedCriteria })
        });

        if (response.ok) {
            alert('Criteria updated');
        } else {
            alert('Update failed');
        }
    });

    document.getElementById('rankNeeds').addEventListener('click', async () => {
        const response = await fetch('/api/rank-needs');
        const data = await response.json();
        document.getElementById('rankedNeeds').innerHTML = JSON.stringify(data, null, 2);
    });
});

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}
