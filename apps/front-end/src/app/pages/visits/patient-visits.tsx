import React, { useState } from 'react';

import { Button, Card, Space } from 'antd';
import { Visit } from '../../models/visit';
import { formatDate } from '../../utils/date-formatter';
import CreateEnconterModal from '../../components/encounters/create-encounter-modal';
import EncounterList from '../../components/encounters/encounter-list.component';
import { Descriptions } from 'antd';
import { endVisit } from '../../resources/visit-resource';
import { Encounter } from '../../models/encounter';

const PatientVisits: React.FC<{ 
  patientVisits: Visit[];
  complete: boolean;
  patientUuid: string;
  onNewEncounter: (ne: Encounter)=>void;
  onCompleteVisit: (cv: Visit)=> void;
  }> = ({
  patientVisits, complete, patientUuid, onNewEncounter, onCompleteVisit
}) => {
 
  const [selectedVisit, setSelectedVisit] = useState<Visit>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const endVisitHandler = async (visitUuid: string) => {
    const visitEnd = new Date();
    const completedVisit = await endVisit(visitUuid, visitEnd);
    onCompleteVisit(completedVisit);
  };



  function displayActionButton(v:Visit) {
    if (complete) return '';
    return (
      <>
      <Button
      type="primary"
      onClick={() => startEncounter(v)}
    >
      +
    </Button>
    { ' ' }
      <Button type="primary" danger onClick={() => endVisitHandler(v.uuid)}>
        End Visit
      </Button>
      </>
    );
  }

  function startEncounter(visit: Visit) {
    setSelectedVisit(visit);
    setIsModalOpen(true);
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {patientVisits.map((v) => {
        return (
          <Card
            key={v.uuid}
            size="small"
          >
              <Descriptions>
                  <Descriptions.Item label="Date">{formatDate(v.visitDate)}</Descriptions.Item>
                  <Descriptions.Item label="Visit">{v.visitType.name}</Descriptions.Item>
                  <Descriptions.Item label="Location">{v.location.name}</Descriptions.Item>
              </Descriptions>
              { displayActionButton(v)}
          {v.encounters.length> 0 && <EncounterList encounters={v.encounters} />}
         
          </Card>
        );
      })}

      <CreateEnconterModal
        patientUuid={patientUuid}
        visit={selectedVisit}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        onNewEncounter = { onNewEncounter }
      />
    </Space>
  );
};

export default PatientVisits;
