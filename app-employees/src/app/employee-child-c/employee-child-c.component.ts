import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../empleado.model';
import { EmployeesCharComponent } from "../employees-char/employees-char.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-child-c',
  imports: [EmployeesCharComponent,NgFor],
  templateUrl: './employee-child-c.component.html',
  styleUrl: './employee-child-c.component.css'
})
export class EmployeeChildCComponent implements OnInit{

  @Input() listEmployee: Employee;
  @Input() index: number;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
