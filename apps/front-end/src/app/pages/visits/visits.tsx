import React, { useState, useEffect } from 'react';
import { Tabs, TabsProps } from 'antd';
import { Row, Col } from 'antd';
import { useLoaderData } from 'react-router-dom';
import NewVisit from './new-visit';
import PatientVisits from './patient-visits';
import { Visit } from '../../models/visit';
import { getPatientVisits } from '../../resources/visit-resource';
import { Encounter } from '../../models/encounter';

const Visits: React.FC = () => {
  const data = useLoaderData() as { uuid: string};
  const [visits, setPatientVisits] = useState<Visit[]>([]);
  const [newEncounter,setNewEncounter] = useState<Encounter>();
  const [newVisit,setNewVisit]= useState<Visit>();
  const [completedVisit,setCompletedVisit]= useState<Visit>();

  const filterCompleteVisits = (visits: Visit[], complete: boolean) => {
    return visits.filter((v) => {
      if (complete) {
        return v.visitEnd !== null;
      } else {
        return v.visitEnd === null;
      }
    });
  };

  const newEncounterHandler = (newEncounter: Encounter)=>{
       setNewEncounter(newEncounter);
  };

  const newVisitsHandler = (newVisit: Visit)=>{
     setNewVisit(newVisit);
  };

  const completeVisitHandler = (completedVisit: Visit)=>{
     setCompletedVisit(completedVisit);
  };

  useEffect(() => {
    getPatientVisits(data.uuid).then((pv) => {
      setPatientVisits(pv);
    });
  }, [data,newEncounter,newVisit,completedVisit]);
  const items: TabsProps['items'] = [
    {
      key: 'active-visits',
      label: `Active Visits`,
      children: <PatientVisits 
         patientVisits={filterCompleteVisits(visits,false)} 
         complete={false} 
         patientUuid={data.uuid}
         onNewEncounter = { newEncounterHandler }
         onCompleteVisit = { completeVisitHandler }
         />,
    },
    {
      key: 'completed-visits',
      label: `Completed Visits`,
      children: <PatientVisits 
         patientVisits={filterCompleteVisits(visits,true)} 
         complete={true} 
         patientUuid={data.uuid}
         onNewEncounter = { newEncounterHandler }
         onCompleteVisit = { completeVisitHandler}
         />,
    },
    {
      key: 'newVisit',
      label: `New Visit`,
      children: <NewVisit patientUuid={data.uuid} onNewVisitCreated = {newVisitsHandler}/>,
    },
  ];
  return (
    <Row>
      <Col span={22}>
        <h4>Visits</h4>
        <Tabs defaultActiveKey="active-visits" items={items} />
      </Col>
    </Row>
  );
};

export default Visits;
