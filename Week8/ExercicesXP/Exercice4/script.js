(function(userName) {
    const userProfileHTML = `
        <div class="d-flex align-items-center">
            <img src="https://via.placeholder.com/30" alt="Profile Picture" class="rounded-circle mr-2">
            <span>Welcome, ${userName}!</span>
        </div>
    `;
    document.getElementById('user-info').innerHTML = userProfileHTML;
})('John');
