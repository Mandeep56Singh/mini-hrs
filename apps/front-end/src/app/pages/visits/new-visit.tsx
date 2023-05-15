import React, { useState, useEffect } from "react";
import { Row, Col, Select } from 'antd';
import { getLocations } from '../../resources/location-resource';
import { getPrograms } from '../../resources/program-resource';
import { Program } from "../../models/programs";
import { Location } from "../../models/location";

const NewVisit: React.FC<{patientUuid: string}> = ({patientUuid})=>{

    const [locations,setLocations] = useState<Location[]>([]);
    const [programs,setPrograms] = useState<Program[]>([]);
    const [selectedLocation,setSelectedLocation] = useState<string>('');
    const [selectedProgram,setSelectedProgram] = useState<string>();

    useEffect(()=>{
        getLocations().then((locations)=>{
            setLocations(locations);
        });
        getPrograms().then((programs)=>{
            setPrograms(programs)
        });
    },[patientUuid]);

     const programChangeHandler = (v: string) => {
        setSelectedProgram(v);
      };
      const locationChangeHandler = (v: string) => {
        setSelectedLocation(v);
      };

    return(
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
          <Select
            placeholder="Select Visit"
            style={{ width: 300 }}
            onChange={(e: string) => locationChangeHandler(e)}
            options={locations.map((location) => {
              return { value: location.uuid, label: location.name };
            })}
          />
        </Col>
        </Row>
    );
}


export default NewVisit;