import React, { useEffect, useState } from 'react';
import { getPatientVisits, endVisit } from '../../resources/visit-resource';
import { Button, Card, Space } from 'antd';
import { Visit } from '../../models/visit';
import { formatDate } from '../../utils/date-formatter';
import CreateEnconterModal from '../../components/encounters/create-encounter-modal';
import EncounterList from '../../components/encounters/encounter-list.component';
import { Descriptions } from 'antd';

const PatientVisits: React.FC<{ patientUuid: string; complete: boolean }> = ({
  patientUuid,
  complete,
}) => {
  const [visits, setPatientVisits] = useState<Visit[]>([]);
  const [selectedVisit, setSelectedVisit] = useState<Visit>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getPatientVisits(patientUuid).then((pv) => {
      const filteredVisits = filterCompleteVisits(pv, complete);
      setPatientVisits(filteredVisits);
    });
  }, [patientUuid, complete]);

  const endVisitHandler = (visitUuid: string) => {
    const visitEnd = new Date();
    endVisit(visitUuid, visitEnd);
  };

  const filterCompleteVisits = (visits: Visit[], complete: boolean) => {
    return visits.filter((v) => {
      if (complete) {
        return v.visitEnd !== null;
      } else {
        return v.visitEnd === null;
      }
    });
  };

  function displayActionButton(uuid: string) {
    if (complete) return '';
    return (
      <>
      <Button
      type="primary"
      onClick={() => startEncounter(v, v.location.uuid)}
    >
      +
    </Button>
    { ' ' }
      <Button type="primary" danger onClick={() => endVisitHandler(uuid)}>
        End Visit
      </Button>
      </>
    );
  }

  function startEncounter(visit: Visit, locationUuid: string) {
    setSelectedVisit(visit);
    setIsModalOpen(true);
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {visits.map((v) => {
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
              { displayActionButton(v.uuid)}
          {v.encounters.length> 0 && <EncounterList encounters={v.encounters} />}
         
          </Card>
        );
      })}

      <CreateEnconterModal
        patientUuid={patientUuid}
        visit={selectedVisit}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
    </Space>
  );
};

export default PatientVisits;
