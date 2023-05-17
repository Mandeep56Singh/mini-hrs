import React, { useEffect, useState } from 'react';
import { getPatientVisits, endVisit } from '../../resources/visit-resource';
import { Button, Card, Space, Modal, Row, Col, Select } from 'antd';
import { Visit } from '../../models/visit';
import { formatDate } from '../../utils/date-formatter';
import { getEncounterTypes } from '../../resources/encounter-types.resource';
import { CreateEncounterPayLoad } from '../../models/encounter';
import { EncounterType } from '../../models/encounter-type';
import { createEncounter } from '../../resources/encounter.resource';

const PatientVisits: React.FC<{ patientUuid: string; complete: boolean }> = ({
  patientUuid,
  complete,
}) => {
  const [visits, setPatientVisits] = useState<Visit[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState<Visit>();
  const [encounterTypes, setEncounterTypes] = useState<EncounterType[]>([]);
  const [selectedEncounterType, setSelectedEncounterType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPatientVisits(patientUuid).then((pv) => {
      const filteredVisits = filterCompleteVisits(pv, complete);
      setPatientVisits(filteredVisits);
    });
    getEncounterTypes().then((et) => {
      setEncounterTypes(et);
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
      <Button type="primary" danger onClick={() => endVisitHandler(uuid)}>
        End Visit
      </Button>
    );
  }

  function startEncounter(visit: Visit, locationUuid: string) {
    setSelectedVisit(visit);
    setIsModalOpen(true);
  }

  const handleSubmit = async () => {
    setLoading(true);
    const payLoad: CreateEncounterPayLoad = {
      locationUuid: selectedVisit?.location.uuid,
      visitUuid: selectedVisit?.uuid,
      encounterTypeUuid: selectedEncounterType,
      patientUuid: patientUuid,
      encounterDate: new Date(),
    };
    await createEncounter(payLoad);
    setLoading(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const encounterTypeChangeHandler = (encounterTypeUuid: string) => {
    setSelectedEncounterType(encounterTypeUuid);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      {visits.map((v) => {
        return (
          <Card
            size="small"
            title={`${formatDate(v.visitDate)} ( ${v.visitType.name}  - ${
              v.location.name
            })`}
            actions={[
              <Button
                type="primary"
                onClick={() => startEncounter(v, v.location.uuid)}
              >
                {' '}
                Start Encounter
              </Button>,
              displayActionButton(v.uuid),
            ]}
          ></Card>
        );
      })}

      <Modal
        title="Create New Encounter"
        open={isModalOpen}
        footer={[
          <Button key="back" onClick={handleCancel} danger>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleSubmit}
          >
            Save
          </Button>,
        ]}
      >
        <Row>
          <Col>
            <label>Encounter Type : </label>
            <Select
              placeholder="Select Encounter Type"
              style={{ width: 300 }}
              onChange={(e: string) => encounterTypeChangeHandler(e)}
              options={encounterTypes.map((encounterType) => {
                return { value: encounterType.uuid, label: encounterType.name };
              })}
            />
          </Col>
        </Row>
      </Modal>
    </Space>
  );
};

export default PatientVisits;
