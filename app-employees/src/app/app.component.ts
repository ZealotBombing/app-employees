import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './empleado.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-employees';

  employees: Employee[]=[

    new Employee("Fernanda", "Piña", "Resident", 1000),
    new Employee("フェルナンダ", "パイナップル", "Resident", 1500),
    new Employee("페르난다", "파인애플", "Resident", 2000),
    new Employee("费尔南达", "菠萝", "Resident", 2500),
    new Employee("फ़र्नेंडा", "अनानास", "Resident", 3000),


  ];
  formName: string = "";
  formLastName: string = "";
  formPosition: string = "";
  formSalary: number = 0;

  addEmployee(){
    let myEmployee = new Employee(this.formName,  this.formLastName, this.formPosition, this.formSalary);
    
    this.employees.push(myEmployee)
  }
}
