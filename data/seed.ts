import type { LeaveRequest } from "@/features/leave/types";
import type { Member, Team } from "@/features/team/types";

export const teams: Team[] = [{ id: "team-1", name: "Odra Digital" }];

export const members: Member[] = [
  {
    id: "member-1",
    firstName: "Anna",
    lastName: "Kowalska",
    title: "Engineering Manager",
    role: "manager",
    teamId: "team-1",
    annualLeaveDays: 26,
  },
  {
    id: "member-2",
    firstName: "Piotr",
    lastName: "Nowak",
    title: "Senior Frontend Developer",
    role: "employee",
    teamId: "team-1",
    annualLeaveDays: 26,
  },
  {
    id: "member-3",
    firstName: "Zofia",
    lastName: "Wiśniewska",
    title: "Product Designer",
    role: "employee",
    teamId: "team-1",
    annualLeaveDays: 20,
  },
  {
    id: "member-4",
    firstName: "Jakub",
    lastName: "Wójcik",
    title: "Backend Developer",
    role: "employee",
    teamId: "team-1",
    annualLeaveDays: 26,
  },
  {
    id: "member-5",
    firstName: "Maja",
    lastName: "Kamińska",
    title: "QA Engineer",
    role: "employee",
    teamId: "team-1",
    annualLeaveDays: 20,
  },
  {
    id: "member-6",
    firstName: "Tomasz",
    lastName: "Lewandowski",
    title: "Junior Frontend Developer",
    role: "employee",
    teamId: "team-1",
    annualLeaveDays: 20,
  },
];

export const leaveRequests: LeaveRequest[] = [
  {
    id: "leave-1",
    employeeId: "member-2",
    status: "approved",
    startDate: "2026-09-14",
    endDate: "2026-09-18",
    note: "Family trip",
  },
  // Fri → Tue: spans a weekend
  {
    id: "leave-2",
    employeeId: "member-3",
    status: "approved",
    startDate: "2026-10-23",
    endDate: "2026-10-27",
    note: null,
  },
  // Overlaps leave-2 on 26–27 Oct
  {
    id: "leave-3",
    employeeId: "member-4",
    status: "pending",
    startDate: "2026-10-26",
    endDate: "2026-10-28",
    note: "Brother's wedding",
  },
  {
    id: "leave-4",
    employeeId: "member-5",
    status: "rejected",
    startDate: "2026-10-26",
    endDate: "2026-10-30",
    note: "Short trip to Gdańsk",
    reason:
      "Release week, and Zofia is already off on 26–27 Oct. Could you move it to November?",
  },
  // Includes 11 Nov (Polish public holiday)
  {
    id: "leave-5",
    employeeId: "member-6",
    status: "pending",
    startDate: "2026-11-09",
    endDate: "2026-11-13",
    note: null,
  },
  {
    id: "leave-6",
    employeeId: "member-2",
    status: "cancelled",
    startDate: "2026-11-02",
    endDate: "2026-11-03",
    note: null,
  },
  {
    id: "leave-7",
    employeeId: "member-3",
    status: "approved",
    startDate: "2026-12-28",
    endDate: "2026-12-31",
    note: "Christmas break",
  },
];
