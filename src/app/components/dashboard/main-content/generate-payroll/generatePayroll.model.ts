export interface IGeneratePayrollDetails {
    employeeId: number;
    payrollMonth: string;
    payrollYear:number;
    deductions:number;
    netSalary: number;
  }