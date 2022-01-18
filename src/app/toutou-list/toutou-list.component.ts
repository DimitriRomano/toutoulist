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

  


}
