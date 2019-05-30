import { Component, OnInit, Output, EventEmitter, OnDestroy, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../shared/data.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit, OnDestroy {
  datePickerConfig: Partial<BsDatepickerConfig>;
  @Output() public toDoListCreated = new EventEmitter<{dateTodo:string, toDoTask: string}>();
  userName: string;
  subscription: Subscription;
  dataAndTaskFilled: boolean = false;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router){
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        minDate: new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())
      });
      
  }

  ngOnInit(){
    this.subscription = this.dataService.currentNameSubject.subscribe(userName => this.userName = userName);
   
  }

  onAddClick(toDoTaskElement: HTMLInputElement, toDoDate: HTMLInputElement){
    if(!toDoTaskElement.value.length || !toDoDate.value.length){
      this.dataAndTaskFilled = false;
      return;
    }
    this.dataAndTaskFilled = true;
    this.toDoListCreated.emit({dateTodo: toDoDate.value,toDoTask: toDoTaskElement.value});
    toDoDate.value = '';
    toDoTaskElement.value = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
