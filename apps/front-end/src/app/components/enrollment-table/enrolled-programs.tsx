import React,{ useState} from 'react';
import { PatientProgramEnrollment } from '../../models/program-enrollment';
import TableList from '../table-list/table-list';
import { Button, Alert } from 'antd';
import { CompleteEnrollmentPayload } from '../../models/program-enrollment';
import { completeProgram } from '../../resources/program-enrollment.resource';
import { formatDate } from '../../utils/date-formatter';
import { AlertMessage } from '../../models/alert-message';

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
  patientPrograms: PatientProgramEnrollment[]; onComplete: (completedEnrollment: PatientProgramEnrollment)=>void
}> = ({ patientPrograms, onComplete}) => {
  const [enrollMsg,setEnrollMessage] = useState<AlertMessage>();
  const onClickHandler = async (enrollmentUuid: string) => {
    resetAlertMsg();
    const payload: CompleteEnrollmentPayload = {
      endDate: new Date(),
      enrollmentUuid: enrollmentUuid,
    };
    let alertMsg: AlertMessage;
    try{
      const result = await completeProgram(payload);
      alertMsg = {
        message: 'Patient enrollment has been succesfully completed',
        type: 'success'
      }
      
      onComplete(result);
    }catch(e){
       alertMsg = {
        message: 'Program completion was unsuccessful. Please try again',
        type: 'error'
       };
    }

    setEnrollMessage(alertMsg);
    
  };

  const resetAlertMsg = ()=>{
       setEnrollMessage({
        message: '',
        type: 'info'
      });
  };

  return (
    <>
    {enrollMsg && enrollMsg.message.length > 0 ? (
            <Alert
              message={enrollMsg.message}
              type={enrollMsg.type}
              showIcon
            />
          ) : (
            ''
      )}
    <TableList
      cols={columns}
      data={patientPrograms.map((patientProgram) => {
        return {
          key: patientProgram.uuid,
          program: patientProgram.program.name,
          location: patientProgram.location.name,
          startDate: formatDate(patientProgram.startDate),
          endDate: formatDate(patientProgram.endDate),
          action: patientProgram?.endDate === null ? (
            <Button
              type="default"
             
              onClick={() => onClickHandler(patientProgram.uuid)}
            >
              Complete
            </Button>
          ) : '',
        };
      })}
    />
    </>
  );
};

export default EnrolledPrograms;
