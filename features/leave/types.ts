interface LeaveRequestBase {
  id: string;
  employeeId: string;
  startDate: string;
  endDate: string;
  note: string | null;
}

export interface PendingLeaveRequest extends LeaveRequestBase {
  status: "pending";
}
export interface ApprovedLeaveRequest extends LeaveRequestBase {
  status: "approved";
}
export interface CancelledLeaveRequest extends LeaveRequestBase {
  status: "cancelled";
}
export interface RejectedLeaveRequest extends LeaveRequestBase {
  status: "rejected";
  reason: string;
}

export type LeaveRequest =
  | PendingLeaveRequest
  | ApprovedLeaveRequest
  | CancelledLeaveRequest
  | RejectedLeaveRequest;
