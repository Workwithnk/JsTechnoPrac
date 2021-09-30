import React from "react";
import UserDetails from "../UserData";
import "../CSS/Employee.css";

function Employee() {
  return (
    <table className="EmployeeTable" cellSpacing="0">
      <thead>
        <tr className="table_Row">
          <th className="count_Th_ET"></th>
          <th className="name_Th_ET">Name</th>
          <th className="department_Th_ET">Department</th>
          <th className="email_Th_ET">Email</th>
          <th className="no_Th_ET">Phone</th>
          <th className="photo_Th_ET">Photo</th>
          <th className="location_Th_ET">Location</th>
          <th className="birthDay_Th_ET">Birthday</th>
          <th className="hiredOn_Th_ET">Hired On</th>
          <th className="add_Th_ET">Home Address</th>
        </tr>
      </thead>
      <tbody>
        {UserDetails.map((data) => {
          return (
            <tr key={data.id} className="table_Row">
              <td className="count_ET">{data.count}</td>
              <td className="name_ET">{data.Name}</td>
              <td className="department_ET">{data.Department}</td>
              <td className="email_ET"> {data.Email}</td>
              <td className="no_ET">{data.no}</td>
              <td className="photo_ET">
                <img src={data.photo} />
              </td>
              <td className="location_ET">{data.location}</td>
              <td className="birthDay_ET">{data.birthday}</td>
              <td className="hiredOn_ET">{data.hiredon}</td>
              <td className="add_ET">{data.add}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Employee;
