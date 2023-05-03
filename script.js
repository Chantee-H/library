'use strict';

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
  let a = document.getElementById('title').value
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
    let input =  '<tr><td>' + title.value + '</td><td>' + author.value + '</td><>' + pages.value + '</td></tr>';
    document.getElementById("output").innerHTML += input;
  }