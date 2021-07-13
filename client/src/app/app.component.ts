import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { FormControl } from "@angular/forms";
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  Todos:any = [];
  newTodo = new FormControl('');
  isProcessing: boolean = false;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getTodos().subscribe(res => {
      console.log(res)
      this.Todos =res;
    });    
  }

  delete(id:any, i:any) {
    console.log(id);
    this.restService.deleteTodo(id).subscribe((res) => {
      this.Todos.splice(i, 1);
    })
  }

  add() {
    console.log(this.newTodo.value);
    this.isProcessing = true;
    this.restService.addTodo(<Todo>({value: this.newTodo.value}))
    .subscribe((res) => {
        console.log('Data added successfully!')
        this.Todos.push(res)
        this.isProcessing = false;
        this.newTodo.reset();
      }, (err) => {
        console.log(err);
    });
  }
}
