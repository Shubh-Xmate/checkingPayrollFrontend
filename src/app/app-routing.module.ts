// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/dashboard/main-content/profile/profile.component';
import { LeaveRequestComponent } from './components/dashboard/main-content/leave-request/leave-request.component';
import { LeaveDetailsComponent } from './components/dashboard/main-content/leave-details/leave-details.component';
import { PayrollDetailsComponent } from './components/dashboard/main-content/payroll-details/payroll-details.component';
import { GeneratePayrollComponent } from './components/dashboard/main-content/generate-payroll/generate-payroll.component';
import { CreateEmployeeComponent } from './components/dashboard/main-content/create-employee/create-employee.component';
import { RequestedLeavesComponent } from './components/dashboard/main-content/requested-leaves/requested-leaves.component';
import { UpdateEmployeeComponent } from './components/dashboard/main-content/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './components/dashboard/main-content/delete-employee/delete-employee.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'leave-request', component:  LeaveRequestComponent},
      { path: 'leave-details', component:  LeaveDetailsComponent },
      { path: 'payroll-details', component:  PayrollDetailsComponent},
      { path: 'generate-payroll', component: GeneratePayrollComponent },
      { path: 'create-employee', component:  CreateEmployeeComponent},
      { path: 'update-employee', component: UpdateEmployeeComponent },
      { path: 'delete-employee', component: DeleteEmployeeComponent },
      { path: 'requested-leaves', component: RequestedLeavesComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, RouterLink, RouterModule, FormsModule]
})
export class AppRoutingModule { }
