var toggleButton = document.getElementById('toggleskills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.textContent = 'Hide';
    }
    else {
        skills.style.display = 'none';
        toggleButton.textContent = 'Show';
    }
});
