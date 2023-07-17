import React, { useState } from 'react';
import { Button, Select, Col, Row, Alert } from 'antd';
import { Program } from '../../models/programs';
import { Location } from '../../models/location';
import { enroll } from '../../resources/program-enrollment.resource';
import { ProgramEnrollmentPayload, PatientProgramEnrollment } from '../../models/program-enrollment';
import { AlertMessage } from '../../models/alert-message';

const NewEnrollment: React.FC<{
  programs: Program[];
  locations: Location[];
  patientUuid: string;
  onNewEnrollment: (e:PatientProgramEnrollment) => void;
}> = ({ programs, locations, patientUuid, onNewEnrollment }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [enrollmentMsg,setEnrollMessage] = useState<AlertMessage>();

  const enrollHandler = async () => {
     if(!isInputValid()){

      const errorMsg:AlertMessage = {
        type: 'error',
        message: 'Please select a Program and Location before enrolling patient'
      };
      setEnrollMessage(errorMsg);
      return;

     }
    const payLoad: ProgramEnrollmentPayload = {
      programUuid: selectedProgram,
      locationUuid: selectedLocation,
      patientUuid: patientUuid,
    };

    let msg: AlertMessage;
    try{
      const result = await enroll(payLoad);
      msg = {
        type: 'success',
        message: 'Patient has been succesfully enrolled'
      };
      
      onNewEnrollment(result);
    }catch(e){
      msg = {
           type: 'error',
           message: 'An error occured. Please retry'
      };
    }
    setEnrollMessage(msg);
    resetFormFields();
   
  };
  const programChangeHandler = (v: string) => {
    setSelectedProgram(v);
  };
  const locationChangeHandler = (v: string) => {
    setSelectedLocation(v);
  };
  const resetFormFields = ()=>{
    setSelectedProgram('');
    setSelectedLocation('');
  };
  const isInputValid = ()=>{
      if(selectedProgram === '' || selectedLocation === ''){
         return false;
      }

      return true;
  };
  const displayEnnrollBtn = ()=>{
   return isInputValid();
  };
  return (
    <>
      <h4>Enroll</h4>
      <Row>
        <Col>
        {enrollmentMsg && enrollmentMsg.message.length > 0 ? (
            <Alert
              message={enrollmentMsg.message}
              type={enrollmentMsg.type}
              showIcon
            />
          ) : (
            ''
          )}
          <Select
            style={{ width: 300 }}
            onChange={(e: string) => programChangeHandler(e)}
            placeholder="Select Program"
            options={programs.map((program) => {
              return { value: program.uuid, label: program.name };
            })}
          />
          <Select
            placeholder="Select Location"
            style={{ width: 300 }}
            onChange={(e: string) => locationChangeHandler(e)}
            options={locations.map((location) => {
              return { value: location.uuid, label: location.name };
            })}
          />
          {
            displayEnnrollBtn() ? (<Button type="primary" onClick={enrollHandler}>
            Enrol into Program
          </Button>): (<Button type="primary" onClick={enrollHandler} disabled>
            Enrol into Program
          </Button>)
          }
          
        </Col>
      </Row>
    </>
  );
};

export default NewEnrollment;
