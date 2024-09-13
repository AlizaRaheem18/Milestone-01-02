const toggleButton = document.getElementById('toggleskills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.textContent ='Hide';
    } else {
        skills.style.display = 'none';
        toggleButton.textContent ='Show';
    }
});