let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

// 1 addBook

function addBook(title, author, libraryID){
    let newBook = {title:title, author:author, libraryID: libraryID
    }

    libraryBooks.push(newBook);
    return newBook;
}

let newAddedBook = addBook("The Da Vinci Code", "Dan Brown", 7812);
console.log(libraryBooks);

// getTitles

function getTitles(){
    return libraryBooks.map((book) => book.title).sort();
}

console.log(getTitles());


//findBooks

function findBooks(keyword){
    return libraryBooks.filter((book) => book.title.includes(keyword)).sort((a, b) =>{a.author.localeCompare(b)})
}

console.log(findBooks("Ahead"));



//2 create Array.map your own version
function myMap(arr, fun){
    return arr.reduce((acc, current, i, array) => {
        acc.push(fun(current, i, array));
        return acc;
    }, []);
}


console.log(myMap(libraryBooks, (book => book.author.toUpperCase())));