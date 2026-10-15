export interface Team {
  id: string;
  name: string;
}

export interface Member {
  id: string;
  title: string;
  role: "manager" | "employee";
  firstName: string;
  lastName: string;
  teamId: string;
  annualLeaveDays: number;
}
