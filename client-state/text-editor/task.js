const editField = document.getElementById('editor');

window.addEventListener('beforeunload', function() {
    localStorage.setItem('memo', editField.value);
});

window.addEventListener('load', function() {
    const notes = localStorage.getItem('memo');
    editField.value = notes;
});