import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../task.model';
import { ToutouService } from '../toutou.service';

@Component({
  selector: 'app-toutou-task',
  templateUrl: './toutou-task.component.html',
  styleUrls: ['./toutou-task.component.scss']
})
export class ToutouTaskComponent implements OnInit {
  @Input() idTask!:string;
  @Input() textTask!:string;
  @Input() isDone!:boolean;
  @Input() stateText='Pending';
  @Input() onUpdate = false;

  constructor(private ToutouService: ToutouService) { }

  ngOnInit(): void {
  }

  getInformationTask() : ITask{
    return {idTask:this.idTask, textTask : this.textTask, isDone:this.isDone,stateText: this.stateText}
  }

  delete(){
    this.ToutouService.deleteTask(this.getInformationTask());
  }

  changeState(){
    this.ToutouService.updateState(this.getInformationTask());
  }

  update(){
    this.onUpdate=!this.onUpdate;
    if(!this.onUpdate){
      this.ToutouService.updateTextTag(this.idTask,this.textTask)
    }
  }

}
