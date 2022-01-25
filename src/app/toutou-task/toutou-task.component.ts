import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toutou-task',
  templateUrl: './toutou-task.component.html',
  styleUrls: ['./toutou-task.component.scss']
})
export class ToutouTaskComponent implements OnInit {
  @Input() isDone=false;
  stateText='Pending';
  @Input() textTask='';
  @Output() updateActivity = new EventEmitter<{isDone: boolean, textTask:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  

  public changeIsDone() {
    this.isDone=!this.isDone;
    if(this.isDone){
      this.stateText='Done'
    }else{
      this.stateText='Pending'
    }
    this.updateActivity.emit({isDone : this.isDone, textTask: this.textTask});
  }

}
