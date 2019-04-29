import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit{
  listItems = [];
  
  constructor(private router: Router, private dataService: DataService){
    
  }

  ngOnInit(){

    if (this.router.url === '/') {
      this.router.navigate(['/']); // Navigate away to some other page
      return false;
    }
  }

  toDoListAdded(listData: {dateTodo: string, toDoTask: string}){
    this.listItems.push(listData);
  }

  onDelete(index: number){
    this.listItems.splice( index, 1 );
  }
}
