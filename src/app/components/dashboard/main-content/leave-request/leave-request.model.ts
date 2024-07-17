export interface LeaveDto {
    employeeId: number;
    leaveType: string;
    startDate: Date;
    endDate: Date;
    appliedDate: Date;
    status: string;
    comments: string;
    managerId: number;
}
