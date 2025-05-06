import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../empleado.model';

@Component({
  selector: 'app-employee-child-c',
  imports: [],
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
}
