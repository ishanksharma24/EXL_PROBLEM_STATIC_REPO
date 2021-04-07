import { Component, OnInit } from '@angular/core';
import{ Employee } from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  "employees":Employee[];
  "employee":Employee=new Employee();
  "isShow":Boolean;
  "ispayload":Boolean;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
   // this.getEmployees();
  }
 
  private getEmployees(){
    this.employeeService.getEmployeeList(this.employee).subscribe(data=>{
      this.employees=data;
      if(this.employee.fname==undefined)
      {
        this.ispayload=false;
      }
      if(data.length>0){
        this.isShow=true;
      }
      else{
        this.isShow=false;
        
      }
      if(!this.isShow && !this.ispayload )
      {
        alert("No Records found for the given search criteria!!!!!")
      }
     

    });
  }
  onSubmit(){
  console.log( this.employee);
  this.getEmployees();

  }


}
