import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from'@angular/animations';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  animations: [
    trigger('list',[
      state('in',style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
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
