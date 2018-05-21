import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Task } from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask:Task;

  constructor(private el:ElementRef) {
    this.el.nativeElement.innerHTML += "conteudo inserido";
  }

  get myTask(){
    return this._myTask;
  }

  @Input()
  set myTask(value:Task){
    this._myTask = value;
    this.ChangeColorTask();
  }

  @HostListener('click')
  
  onClick(){
    alert(this.myTask)    
  }

  ChangeColorTask(){
    this.el.nativeElement.style.color = this.myTask.value > 5 ? 'green': 'red';
  }
}
