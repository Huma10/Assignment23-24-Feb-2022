class Employee {
    constructor(
      public EmpNo: number,
      public EmpName: string,
      public Salary: number,
      public Designation: string,
      public DeptName:string
    ) {}
  }
  
  
  class EmployeeOp {
      private Employees:Array<Employee>;
      private depts:Array<string>;
      private desig:Array<string>;
      constructor() {
          this.Employees = new Array<Employee>();
          this.Employees.push(
              new Employee(101, 'A', 1200,'Des1', 'DP1')
          );
          this.Employees.push(
              new Employee(102, 'B', 1300,'Des2', 'DP2')
          );        
          this.depts =new Array<string>();
          this.depts.push('IT');
          this.depts.push('HR');
          this.depts.push('SL');
  
          this.desig =new Array<string>();
          this.desig.push('Manager');
          this.desig.push('Lead');
          this.desig.push('Staff');
      }
  
      private validateData(emp:Employee):boolean {
          // Validation Rules
         let flag:boolean = true;
         // 1. EmpNo MUST be unique
          if(emp.EmpNo===200){
              return false;
          }
          // 2. EmpNAme MUST not have number or Special Characters
          if(!emp.EmpName.match(/^[A-Za-z]+$/)){
              flag = false;
          }
          // 3. DeptName and Designation names MUST be from the array of depts and desig
          if(!this.depts.includes(emp.DeptName) && this.desig.includes(emp.Designation)){
              flag = false;
          }
          // 4. Salary Must be Positive integer
          if(emp.Salary<0){
              flag = false;
          }
          return flag;
      }
  
      addEmployee(emp:Employee):Array<Employee>{
          // Call to validateData(), if it is true then push record in array
          if(this.validateData(emp)){
              this.Employees.push(emp);
          }
          // Logic to add employee in Employees Array
          return this.Employees;
      }
  
      updateEmployee(emp:Employee):Array<Employee>{
          // Call to validateData(), if it is true then push record in array
          if(this.validateData(emp)){
              this.Employees.push(emp);
          }
          
          // search Employee from array if found update it 
        const e = this.Employees.findIndex(x => x.EmpNo == emp.EmpNo);
        if (e != null && e != undefined) {
            this.Employees[e] = emp;
        }
          // Logic to add employee in Employees Array
          this.Employees.push(emp);
          return this.Employees;
      }
  
      deleteEmployee(emp:Employee):Array<Employee>{
          
          // search Employee from array if found delete it 
         this.Employees = this.Employees.filter(x => x.EmpNo!=emp.EmpNo);
          // Logic to add employee in Employees Array          
          return this.Employees;
      }
  
      getAllEmployees(criteria:string):Array<Employee>{
          // criteria could by DeptName, Designation
          this.Employees.filter(x => x.DeptName===criteria && x.Designation === criteria)
          return this.Employees;
      }
  }