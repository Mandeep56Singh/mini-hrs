import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Button, Alert } from 'antd';
import { VisitType } from '@prisma/client';
import { getProgramVisitTypes } from '../../resources/visit-types.resouorce';
import { getEnrolledPrograms } from '../../resources/program-enrollment.resource';
import './visits.css';
import { startVisit } from '../../resources/visit-resource';
import { CreateVisitPayload, Visit } from '../../models/visit';
import { useLocations } from '../../resources/hooks/use-location';
import ErrorAlert from '../../components/error/error-alert';
import Loader from '../../components/loader/loader';
import { PatientProgramEnrollment } from '../../models/program-enrollment';
import { AlertMessage } from '../../models/alert-message';
import { getErrorMessage } from '../../utils/error-message-helper';

const NewVisit: React.FC<{
  patientUuid: string;
  onNewVisitCreated: (nv: Visit) => void;
}> = ({ patientUuid, onNewVisitCreated }) => {
  const [visitTypes, setVisitTypes] = useState<VisitType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>();
  const [selectedVisitType, setSelectedVisitType] = useState<string>('');
  const { locations, error, isLoading, isError } = useLocations();
  const [enrolledPrograms, setEnrolledPrograms] = useState<PatientProgramEnrollment[]>([]);
  const [visitMsg,setVisitMsg] = useState<AlertMessage>();

  useEffect(()=>{
     if(patientUuid){
      getEnrolledPrograms(patientUuid)
      .then((programs)=>{
         setEnrolledPrograms(programs);
      });
     }
  },[patientUuid]);

  const programChangeHandler = async (v: string) => {
    setSelectedProgram(v);
    const programVisitTypes = await getProgramVisitTypes(v);
    setVisitTypes(programVisitTypes);
    setSelectedVisitType('');
  };
  const locationChangeHandler = (v: string) => {
    setSelectedLocation(v);
  };
  const visitTypeChangeHandler = (e: string) => {
    setSelectedVisitType(e);
  };
  const startVisitHandler = async () => {
    const newVisitPayload: CreateVisitPayload = {
      visitDate: new Date(),
      locationUuid: selectedLocation,
      visitTypeUuid: selectedVisitType,
      patientUuid: patientUuid,
    };

    let msg: AlertMessage = {
      message: '',
      type: 'info'
    };
    try{
      const newVisit = await startVisit(newVisitPayload);
      msg = {
        message: 'New visit has been started successfully',
        type: 'success'
      };
     
      onNewVisitCreated(newVisit);
    }catch(e: any){
       const errMsg = getErrorMessage(e);
       msg = {
        message: errMsg.errorText || 'Something went wrong please try agin',
        type: 'error'
       };
    }
    setVisitMsg(msg);
   
  };
  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  if (locations && enrolledPrograms) {
    return (
      <>
      {visitMsg && visitMsg.message.length > 0 ? (
            <Alert
              message={visitMsg.message}
              type={visitMsg.type}
              showIcon
            />
          ) : (
            ''
        )}
        <Row className="visit-row">
          {locations.length > 0 ? (
            <Col>
              <label>Location : </label>
              <Select
                placeholder="Select Location"
                style={{ width: 300 }}
                onChange={(e: string) => locationChangeHandler(e)}
                options={locations.map((location) => {
                  return { value: location.uuid, label: location.name };
                })}
              />
            </Col>
          ) : (
            ''
          )}
        </Row>
        <Row className="visit-row">
          <Col>
            <label>Program : </label>
            <Select
              style={{ width: 300 }}
              onChange={(e: string) => programChangeHandler(e)}
              placeholder="Select Program"
              options={enrolledPrograms.map((p: PatientProgramEnrollment) => {
                return { value: p.program.uuid, label: p.program.name };
              })}
            />
          </Col>
        </Row>
        <Row className="visit-row">
          <Col>
            {selectedProgram?.length && visitTypes.length && (
              <>
                <label>Visit Type : </label>
                <Select
                  placeholder="Select Visit"
                  style={{ width: 300 }}
                  onChange={(e: string) => visitTypeChangeHandler(e)}
                  options={visitTypes.map((visitType) => {
                    return { value: visitType.uuid, label: visitType.name };
                  })}
                />
              </>
            )}
          </Col>
        </Row>
        <Row className="visit-row">
          <Col>
            {selectedVisitType.length > 0 && (
              <Button type="primary" onClick={startVisitHandler}>
                {' '}
                Start Visit
              </Button>
            )}
          </Col>
        </Row>
      </>
    );
  }
};

export default NewVisit;
