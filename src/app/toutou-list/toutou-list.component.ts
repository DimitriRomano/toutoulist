import { ToutouTaskComponent } from "../toutou-task/toutou-task.component";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toutou-list',
  templateUrl: './toutou-list.component.html',
  styleUrls: ['./toutou-list.component.scss']
})
export class ToutouListComponent implements OnInit {
  inputData = '';
  toutous:{
    textTask:string;
    isDone:boolean;
  }[] = [];
  toutousActives:string[]=[];

  constructor() {
   }

  ngOnInit(): void {
  }

  add() {
    this.toutous.push({textTask:this.inputData,isDone:false});
  }

  delete(index:number){
    this.toutous.splice(index,1)
  }

  updateToutouList({isDone, textTask}:any):void {
    if(isDone){
      this.toutousActives.push(textTask);
    }else{
      let i = this.toutousActives.indexOf(textTask);
      this.toutousActives.splice(i,1);
    }
    
    
  }

  


}
