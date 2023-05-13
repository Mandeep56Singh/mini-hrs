import React, { useState } from 'react';
import { Button, Select, Col, Row } from 'antd';
import { Program } from '../../models/programs';
import { Location } from '../../models/location';
import { enroll } from '../../resources/program-enrollment.resource';
import { ProgramEnrollmentPayload } from '../../models/program-enrollment';

const NewEnrollment: React.FC<{
  programs: Program[];
  locations: Location[];
  patientUuid: string;
}> = ({ programs, locations, patientUuid }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const enrollHandler = async () => {
    const payLoad: ProgramEnrollmentPayload = {
      programUuid: selectedProgram,
      locationUuid: selectedLocation,
      patientUuid: patientUuid,
    };

    await enroll(payLoad);
    resetControls();
  };
  const programChangeHandler = (v: string) => {
    setSelectedProgram(v);
  };
  const locationChangeHandler = (v: string) => {
    setSelectedLocation(v);
  };
  const resetControls = () => {
    setSelectedLocation('');
    setSelectedProgram('');
  };
  return (
    <>
      <h4>Enroll</h4>
      <Row>
        <Col>
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
          <Button type="primary" onClick={enrollHandler}>
            Enrol into Program
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NewEnrollment;
