const book = document.querySelector('.book');
const fontSize = document.querySelector('.book__control_font-size');

fontSize.addEventListener('click', function(button) {
    const fontSizeActive = document.querySelector('.font-size_active');
    fontSizeActive.classList.remove('font-size_active');
    button.target.classList.add('font-size_active');

    if (button.target.dataset.size === 'small') {
        if (book.classList.contains('book_fs-big')) book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if (button.target.dataset.size === 'big') {
        if (book.classList.contains('book_fs-small')) book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        if (book.classList.contains('book_fs-small')) book.classList.remove('book_fs-small');
        else if (book.classList.contains('book_fs-big')) book.classList.remove('book_fs-big');
    }

    button.preventDefault();
});