// Check and retrieve cookie values 
document.addEventListener('DOMContentLoaded', function() {
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (let c of cookies) {
            const [key, value] = c.split('=');
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    }
    let userName = getCookie('name');
    let userTheme = getCookie('theme');
    if (!userName || !userTheme) {
        // Prompts for the visitor
        userName = prompt("Welcome to my website! Please enter your name:");
        userTheme = prompt("Choose your preferred theme (dark/light):").toLowerCase();
        localStorage.setItem('name', userName);
        localStorage.setItem('theme', userTheme);
        alert(`Great to see you, ${userName}`);
    }

    document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;

    // Apply theme
    if (userTheme === 'dark') {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#f1f1f1";
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#121212";
    }
});