import React from 'react';
import TableList from '../table-list/table-list';
import { Button } from 'antd';
import { Encounter } from '../../models/encounter';
import { formatDate } from '../../utils/date-formatter';
import { EyeOutlined } from '@ant-design/icons';


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
  const onClickHandler =  (encounterUuid: string): void => {
    return;
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
            <Button
              type="default"
              onClick={() => onClickHandler(e.uuid)}
            >
            <EyeOutlined />
            </Button>
          ),
        };
      })}
    />
  );
};

export default EncounterList;
