import { ToutouTaskComponent } from "../toutou-task/toutou-task.component";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToutouService } from "../toutou.service";
import { ITask } from "../task.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-toutou-list',
  templateUrl: './toutou-list.component.html',
  styleUrls: ['./toutou-list.component.scss']
})
export class ToutouListComponent implements OnDestroy{
  inputData = '';
  toutous!: ITask[];
  toutouSubscription!: Subscription;

  constructor(private toutouService: ToutouService) {
    this.toutouService.tasks$.subscribe(
      (tasks)=>{
        this.toutous=tasks;
      }
    );
   }

  ngOnDestroy(): void {
      if(this.toutouSubscription){
        this.toutouSubscription.unsubscribe();
      }
  }

  add() {
    const id = new Date().getTime().toString() 
    + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();
    this.toutouService.addTask({idTask:id , textTask:this.inputData,isDone:false,stateText:"Pending"});
  }
  

  


}
