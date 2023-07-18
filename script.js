'use strict';

let form = document.getElementById('form');

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(){
  let a = document.getElementById('title').value;
  let b = document.getElementById('author').value;
  let c = document.getElementById('pages').value;
  let d = document.getElementById('read').checked;
  
  if(a !== '' && b !== '' && c !== ''){
    myLibrary.push(new Book(a, b, c, d));
    console.log(myLibrary);
    display();
  }
  
}

function display(){
    let read = document.getElementById('read').checked ? '<input type="button" value="Read" class="read-btn" />' : 
  '<input type="button" value="Not Read" class="read-btn not-read" />';
    let remove = '<input type="checkbox" value="Remove" class="remove"/>';
    let input =  '<tr><td>' + title.value + '</td><td>' + author.value + '</td><td>' + pages.value + '</td><td>' + read + '</td><td>' + remove + '</td></tr>';
    document.getElementById("output").innerHTML += input;
  }


function deleteRow() {
    document.querySelectorAll('#table .remove:checked').forEach(e => {
      e.parentNode.parentNode.remove()
  });
}

document.querySelector('#table').addEventListener('click', e => {
    if (e.target.matches('.read-btn'))  
      if(e.target.value === 'Read'){
        e.target.value = 'Not Read';
        e.target.style.backgroundColor = "#db3636";
      }else if(e.target.value === 'Not Read'){
        e.target.value = 'Read';
        e.target.style.backgroundColor = "#37ac37";
      };
  });


let modal = document.getElementById("modal");
let newBook = document.getElementById("new-book");
let exit = document.getElementsByClassName("close")[0];

newBook.onclick = function() {
  modal.style.display = "block";
}

exit.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = e => {
  e.preventDefault();
  addBookToLibrary();
}
