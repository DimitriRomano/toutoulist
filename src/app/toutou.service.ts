import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { ITask } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ToutouService {

  private tasks: ITask[] = [];
  public tasks$ : BehaviorSubject<ITask[]>;

  constructor() { 
    this.tasks$ = new BehaviorSubject<ITask[]>(this.tasks)
   }

   addTask(newTask : ITask){
     this.tasks.push(newTask); 
     this.tasks$.next(this.tasks);
   }

  deleteTask(taskToDelete : ITask){
    const id = this.tasks.findIndex((myTask) => taskToDelete.idTask === myTask.idTask)
    this.tasks.splice(id,1);
    this.tasks$.next(this.tasks);
  }

  updateState(task : ITask){
    const id = this.tasks.findIndex((myTask) => task.idTask === myTask.idTask)
    this.tasks[id].isDone = !this.tasks[id].isDone
    if(this.tasks[id].isDone){
      this.tasks[id].stateText='Done'
    }else{
      this.tasks[id].stateText='Pending'
    }
    this.tasks$.next(this.tasks);
    console.log(this.tasks[id]);
    
  }

  updateTextTag(idTask : string, newTextTag: string){ 
    const id = this.tasks.findIndex((myTask) => myTask.idTask === idTask);
    this.tasks[id].textTask = newTextTag;
    this.tasks$.next(this.tasks);
  }

  

  


    
}
