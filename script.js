function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => document.getElementById('content').innerHTML = data)
        .catch(error => console.error('Error loading content:', error));
}

// Load Experience by default
window.onload = () => loadContent('experience.html');
