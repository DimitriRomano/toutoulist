import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toutou-task',
  templateUrl: './toutou-task.component.html',
  styleUrls: ['./toutou-task.component.scss']
})
export class ToutouTaskComponent implements OnInit {
  @Input() isDone=false;
  stateText='Pending';
  @Input() textTask=''

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
  }

}
