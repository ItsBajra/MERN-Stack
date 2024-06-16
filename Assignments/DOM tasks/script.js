// Question 1
function addBook() {
    let bookTitle = prompt("Enter the book title:");
    if (bookTitle) {
        let ul = document.getElementById('book-list');
        let li = document.createElement('li');
        li.textContent = bookTitle;
        li.onclick = toggleFavorite; 
        ul.insertBefore(li, ul.firstChild);
    }
}

// Question 2
function searchBook() {
    let searchTerm = document.getElementById('search-bar').value.toLowerCase();
    let ul = document.getElementById('book-list');
    let items = ul.getElementsByTagName('li');
    
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().includes(searchTerm)) {
            items[i].style.backgroundColor = '#f8541e';
            items[i].style.color='white';
        } else {
            items[i].style.backgroundColor = ''
            items[i].style.color='black';
        }
    }
}

// Question 3
function removeBook() {
    let bookTitle = prompt("Enter the book title to remove:");
    if (bookTitle) {
        let ul = document.getElementById('book-list');
        let items = ul.getElementsByTagName('li');
        let found = false;

        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent.toLowerCase() === bookTitle.toLowerCase()) {
                if (confirm(`Are you sure you want to remove "${items[i].textContent}"?`)) {
                    ul.removeChild(items[i]);
                }
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Book not found in the list.");
        }
    }
}

// Question 4
function toggleFavorite(event) {
    event.target.classList.toggle('favorite');
}

// Question 5
function clearSearchHighlights() {
    let ul = document.getElementById('book-list');
    let items = ul.getElementsByTagName('li');
    
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = ''
        items[i].style.color = 'black';
        items[i].classList.remove('favorite');
    }
}
