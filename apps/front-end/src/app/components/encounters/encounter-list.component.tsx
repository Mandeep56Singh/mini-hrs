import React from 'react';
import TableList from '../table-list/table-list';
import { Button } from 'antd';
import { Encounter } from '../../models/encounter';
import { formatDate } from '../../utils/date-formatter';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


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
  const onClickHandler =  (encounterUuid: string): void => {
    return;
  };

  const onClickEditHandler = (encounterTypeUuid: string,visitUuid: string)=>{
     navigate(`./${visitUuid}/encounter-form/${encounterTypeUuid}`)

  };


  return (
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
              onClick={() => onClickHandler(e.uuid)}
            >
            <EyeOutlined />
           
            </Button>
            <Button
             type="default"
             onClick={() => onClickEditHandler(e.encounterType?.uuid,e.visit?.uuid)}
            >
              <EditOutlined />
            </Button>
          </>
          ),
        };
      })}
    />
  );
};

export default EncounterList;
