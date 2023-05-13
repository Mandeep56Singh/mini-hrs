import React from 'react';
import { PatientProgramEnrollment } from '../../models/program-enrollment';
import TableList from '../table-list/table-list';
import { Button } from 'antd';
import { CompleteEnrollmentPayload } from '../../models/program-enrollment';
import { completeProgram } from '../../resources/program-enrollment.resource';

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
    title: 'Completed Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const EnrolledPrograms: React.FC<{
  patientPrograms: PatientProgramEnrollment[];
}> = ({ patientPrograms }) => {
  const onClickHandler = async (enrollmentUuid: string) => {
    const payload: CompleteEnrollmentPayload = {
      endDate: new Date(),
      enrollmentUuid: enrollmentUuid,
    };
    await completeProgram(payload);
  };

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
          action: (
            <Button
              type="primary"
              danger
              onClick={() => onClickHandler(patientProgram.uuid)}
            >
              Complete
            </Button>
          ),
        };
      })}
    />
  );
};

export default EnrolledPrograms;
