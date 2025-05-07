import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employees-char',
  imports: [],
  templateUrl: './employees-char.component.html',
  styleUrl: './employees-char.component.css'
})
export class EmployeesCharComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor(){

  }

  ngOnInit(): void{

  }

}
