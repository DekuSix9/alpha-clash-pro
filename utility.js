function hideElement(ElementId) {
    const element = document.getElementById(ElementId);
    element.classList.add('hidden');
}

function showElement(ElementId) {
    const element = document.getElementById(ElementId);
    element.classList.remove('hidden');
}