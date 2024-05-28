//Create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties)
let allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "The_Great_Gatsby_Cover_1925_Retouched.jpg",
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        alreadyRead: false
    }
];

//Select the div with class listBooks
let listBooksDiv = document.querySelector('.listBooks');

//Create a table element
let table = document.createElement('table');

// Loop through allBooks array and create table rows for each book
allBooks.forEach(book => {
    //Create a table row
    let row = document.createElement('tr');

    //Create a cell for the book's image
    let imageCell = document.createElement('td');
    let img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imageCell.appendChild(img);
    row.appendChild(imageCell);

    //Create a cell for the book's title and author
    let detailsCell = document.createElement('td');
    detailsCell.textContent = `${book.title} written by ${book.author}`;
    //If the book is already read, set the color to red
    if (book.alreadyRead) {
        detailsCell.style.color = 'red';
    }
    row.appendChild(detailsCell);

    //Append the row to the table
    table.appendChild(row);
});

//Append the table to the div
listBooksDiv.appendChild(table);
