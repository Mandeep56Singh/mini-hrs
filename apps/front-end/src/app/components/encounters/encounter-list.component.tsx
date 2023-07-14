import React,{ useState } from 'react';
import TableList from '../table-list/table-list';
import { Button } from 'antd';
import { Encounter } from '../../models/encounter';
import { formatDate } from '../../utils/date-formatter';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ViewEncounterModal from './view-encounter-modal';


const columns = [
  {
    title: 'Encounter Date',
    dataIndex: 'encounterDate',
    key: 'encounterDate',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Encounter Type',
    dataIndex: 'encounterType',
    key: 'encounterType',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
];

const EncounterList: React.FC<{
  encounters: Encounter[];
}> = ({ encounters }) => {
  const navigate = useNavigate();
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [selectedEncounter, setSelectedEncounter] = useState<Encounter>();

  const viewEncounterHandler =  (encounter: Encounter): void => {
    setSelectedEncounter(encounter);
    setIsViewModalOpen(true)
  };

  const onClickEditHandler = (visitUuid: string,encounterTypeUuid: string,encounterUuid: string)=>{
     navigate(`./${visitUuid}/encounter/${encounterUuid}/encounter-form/${encounterTypeUuid}`)

  };

  const cancelViewModal = ()=>{
   setIsViewModalOpen(false);
  };


  return (
    <>
    <TableList
      cols={columns}
      data={encounters.map((e) => {
        return {
          key: e.uuid,
          encounterDate: formatDate(e.encounterDate),
          location: e.location.name,
          encounterType: e.encounterType?.name,
          action: (
            <>
            <Button
              type="default"
              onClick={() => viewEncounterHandler(e)}
            >
            <EyeOutlined />
           
            </Button>
            <Button
             type="default"
             onClick={() => onClickEditHandler(e.visit.uuid,e.encounterType?.uuid,e.uuid)}
            >
              <EditOutlined />
            </Button>
          </>
          ),
        };
      })}
    />
    {selectedEncounter? <ViewEncounterModal 
    isModalOpen={isViewModalOpen} 
    handleCancel={cancelViewModal} 
    encounter={selectedEncounter}
    />: ''}
    </>
  );
};

export default EncounterList;
