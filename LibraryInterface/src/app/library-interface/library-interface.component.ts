import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-library-interface',
  templateUrl: './library-interface.component.html',
  styleUrls: ['./library-interface.component.scss']
})
export class LibraryInterfaceComponent implements OnInit {

  //creating stream list for books
  LibraryBookList$!: Observable<any[]>;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.LibraryBookList$ = this.api.GetLibraryBooks();
  }

  //variables(properties)
  modalTitle : string = '';
  activateCreateFormComponent : boolean = false;
  book: any

  openModal(){
    this.modalTitle = "Add new Library Book";
    this.activateCreateFormComponent = true;
    this.book ={
      category : null,
      book_Id : 0,
      title: null,
      author: null
    }
  }

  closeModal(){
    this.activateCreateFormComponent = false;
    this.LibraryBookList$ = this.api.GetLibraryBooks();
  }
  
  deleteBook(id : number | string){
    this.api.DeleteLibraryBook(id)
    .subscribe({
      next: (res) =>{
        var showDeleteSuccess = document.getElementById("delete-success-alert");
        if(showDeleteSuccess){
          showDeleteSuccess.style.display ="block"
        }
        //don't want the alert message to stay
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display ="none"
          }
        },4000);
        this.LibraryBookList$ = this.api.GetLibraryBooks();
      },
      error: (err) => {
        alert("Error deleting library book: " + err.message);
        console.log(err.message);
      }
    });
  }

  modalEdit(element: any){
    this.book = element;
    this.modalTitle = "Edit Library Book";
    this.activateCreateFormComponent= true;
  }

  modalClose(){
    this.activateCreateFormComponent= false;
    this.LibraryBookList$ = this.api.GetLibraryBooks();
  }

}
