import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Select } from 'antd';
import { createEncounter } from '../../resources/encounter.resource';
import { CreateEncounterPayLoad, Encounter } from '../../models/encounter';
import { EncounterType } from '../../models/encounter-type';
import { getEncounterTypes } from '../../resources/encounter-types.resource';

interface createEncounterProps {
  patientUuid: string;
  visit: {
    location: {
      uuid: string;
    };
    uuid: string;
  };
  isModalOpen: boolean;
  handleCancel: () => void;
  onNewEncounter: (ne: Encounter)=>void
}

const CreateEnconterModal: React.FC<createEncounterProps> = ({
  patientUuid,
  visit,
  isModalOpen,
  handleCancel,
  onNewEncounter
}) => {
  const [_, setLoading] = useState(false);
  const [selectedEncounterType, setSelectedEncounterType] = useState('');
  const [encounterTypes, setEncounterTypes] = useState<EncounterType[]>([]);

  useEffect(() => {
    getEncounterTypes().then((et) => {
      setEncounterTypes(et);
    });
  }, [patientUuid]);

  const handleSubmit = async () => {
    setLoading(true);
    const payLoad: CreateEncounterPayLoad = {
      locationUuid: visit?.location.uuid,
      visitUuid: visit?.uuid,
      encounterTypeUuid: selectedEncounterType,
      patientUuid: patientUuid,
      encounterDate: new Date(),
    };
    const newEncounter = await createEncounter(payLoad);
    onNewEncounter(newEncounter);
    setLoading(false);
    handleCancel();
  };

  const encounterTypeChangeHandler = (encounterTypeUuid: string) => {
    setSelectedEncounterType(encounterTypeUuid);
  };

  return (
    <Modal
      title="Create New Encounter"
      open={isModalOpen}
      footer={[
        <Button key="back" onClick={handleCancel} danger>
          Cancel
        </Button>,
        <Button type="primary" onClick={handleSubmit}>
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
  );
};

export default CreateEnconterModal;
