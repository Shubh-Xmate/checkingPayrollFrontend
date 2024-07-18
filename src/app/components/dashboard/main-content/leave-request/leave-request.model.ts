export interface LeaveDto {
    employeeId: number;
    leaveType: string;
    startDate: Date;
    endDate: Date;
    appliedDate: string;
    status: string;
    comments: string;
    managerId: number;
}
