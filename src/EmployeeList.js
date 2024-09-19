import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'Alice Smith' },
    { id: 2, name: 'Bob Johnson' },
    { id: 3, name: 'Charlie Brown' },
  ];

  return (
    <ul className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} name={employee.name} />
      ))}
    </ul>
  );
};

export default EmployeeList;

