import React from "react";
import { PatientProgramEnrollment } from "../../models/program-enrollment";

const EnrolledPrograms:React.FC<{enrolledPrograms: PatientProgramEnrollment[]}> = ({enrolledPrograms})=>{
   return(
    <table>
      <thead>
        <th>Program </th>
        <th>Location </th>
        <th>Enrollment Date</th>
        <th>Completion Date</th>
      </thead>
      <tbody>
      { enrolledPrograms.map((program)=>{
          return <tr>
            <td>{program?.program?.name}</td>
            <td>{program?.location?.name}</td>
            <td>{program.startDate}</td>
            <td>{program.endDate}</td>
          </tr>
      })}
      </tbody>
    </table>
   );
};

export default EnrolledPrograms;