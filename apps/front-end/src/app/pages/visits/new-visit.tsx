import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Button } from 'antd';
import { getLocations } from '../../resources/location-resource';
import { getPrograms } from '../../resources/program-resource';
import { Program } from '../../models/programs';
import { Location } from '../../models/location';
import { VisitType } from '@prisma/client';
import { getProgramVisitTypes } from '../../resources/visit-types.resouorce';
import './visits.css';
import { startVisit } from '../../resources/visit-resource';
import { CreateVisitPayload } from '../../models/visit';

const NewVisit: React.FC<{ patientUuid: string }> = ({ patientUuid }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [visitTypes, setVisitTypes] = useState<VisitType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>();
  const [selectedVisitType, setSelectedVisitType] = useState<string>('');

  useEffect(() => {
    getLocations().then((locations) => {
      setLocations(locations);
    });
    getPrograms().then((programs) => {
      setPrograms(programs);
    });
  }, [patientUuid]);

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
  const startVisitHandler = () => {
    const newVisitPayload: CreateVisitPayload = {
      visitDate: new Date(),
      locationUuid: selectedLocation,
      visitTypeUuid: selectedVisitType,
      patientUuid: patientUuid,
    };

    startVisit(newVisitPayload);
  };

  return (
    <>
      <Row className="visit-row">
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
      </Row>
      <Row className="visit-row">
        <Col>
          <label>Program : </label>
          <Select
            style={{ width: 300 }}
            onChange={(e: string) => programChangeHandler(e)}
            placeholder="Select Program"
            options={programs.map((program) => {
              return { value: program.uuid, label: program.name };
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
        {selectedVisitType.length>0 && 
        <Button type="primary" onClick={startVisitHandler}>
            {' '}
            Start Visit
          </Button>}
        </Col>
      </Row>
    </>
  );
};

export default NewVisit;
