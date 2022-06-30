import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {

   //creating stream list for books
   LibraryBookList$!: Observable<any[]>;

  constructor(private api:ApiService) { }
  //getting data from the one component input to another component
  @Input() book:any;
  //variables
  book_Id: number = 0;
  title: string ="";
  category: string ="";
  author: string ="";

  ngOnInit(): void {
    //assigning variables with data fom input form
    this.book_Id = this.book.book_Id;
    this.title = this.book.title;
    this.category = this.book.category;
    this.author = this.book.author;
    //getting  data from web api service
    this.LibraryBookList$ = this.api.GetLibraryBooks();
  }

  //Adding a new book into the database
  createBook(){
    //creating an object containing book properties
    var book = {
      title: this.title,
      category: this.category,
      author: this.author
    };

    //calling the server method and passing the book object
    this.api.PostLibraryBook(book)
    .subscribe(res =>{
      //close modal automatic
      var closeModelBtn = document.getElementById("add-edit-modal-close");
      if(closeModelBtn){
        //click clock automatically
        closeModelBtn.click();
      }

      //fade alert message that will be shown under table after information is add.
      var showAddSuccess = document.getElementById("add-success-alert");
      if(showAddSuccess){
        showAddSuccess.style.display ="block"
      }
      //don't want the alert message to stay there for more than 4 seconds
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display ="none"
        }
      },4000);

    });
  }

  //calling the server method and passing the id and book object
  updateBook(){
    var book = {
      book_Id: this.book_Id,
      title: this.title,
      category: this.category,
      author: this.author
    };

    //creating a id and assigning the book id from the current book
    var id : number = this.book_Id;
4
    this.api.PutLibraryBook(id, book)
    .subscribe(res =>{
      //close modal automatic
      var closeModelBtn = document.getElementById("add-edit-modal-close");
      if(closeModelBtn){
        //click clock automatically
        closeModelBtn.click();
      }
       //fade alert message that will be shown under table after information is update.
      var showUpdateSuccess = document.getElementById("update-success-alert");
      if(showUpdateSuccess){
        showUpdateSuccess.style.display ="block"
      }
       //don't want the alert message to stay there for more than 4 seconds
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display ="none"
        }
      },4000);

    });
  }
}
