//your JS code here. If required.
const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        const row = e.target.parentElement.parentElement; 
        bookList.removeChild(row); 
    }
});
