import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function EmployeesList() {
  const employees = [
    { id: 1, name: "Prabha", role: "Developer" },
    { id: 2, name: "Lakshmi", role: "Designer" }
  ];

  return (
    <div>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}
