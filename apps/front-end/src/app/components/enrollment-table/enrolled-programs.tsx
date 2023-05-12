import React from 'react';
import { PatientProgramEnrollment } from '../../models/program-enrollment';
import TableList from '../table-list/table-list';

const columns = [
  {
    title: 'Program',
    dataIndex: 'program',
    key: 'program',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Enrollment Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Completion Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
];

const EnrolledPrograms: React.FC<{
  patientPrograms: PatientProgramEnrollment[];
}> = ({ patientPrograms }) => {
  return (
    <TableList
      cols={columns}
      data={patientPrograms.map((patientProgram) => {
        return {
          key: patientProgram.uuid,
          program: patientProgram.program.name,
          location: patientProgram.location.name,
          startDate: patientProgram.startDate,
          endDate: patientProgram.endDate,
        };
      })}
    />
  );
};

export default EnrolledPrograms;
