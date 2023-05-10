import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { patientSearch } from '../../resources/patient-search.resource';
import { ColumnsType } from 'antd/es/table';
import TableList from '../../components/table-list/table-list';
import { PatientIdentifier } from '../../models/patient';

const { Search } = Input;
interface DataType {
  key: React.Key;
  identifier: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Identifier',
    dataIndex: 'identifier',
  },
];

const PatientSearch: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState<PatientIdentifier[]>([]);
  const data: DataType[] = searchResults.map((result) => {
    return {
      key: result?.id,
      identifier: result?.identifier,
    };
  });
  const onChangeHandler = (s: string) => {
    setSearchString(s);
  };
  const onEnterHandler = async () => {
    const results: PatientIdentifier[] = await patientSearch(searchString);
    setSearchResults(results);
  };
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h2>Patient Search</h2>
          <Search
            placeholder="Enter patient ID"
            enterButton="Search"
            size="large"
            onChange={(e) => onChangeHandler(e.target.value)}
            onSearch={onEnterHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          {data.length ? <TableList cols={columns} data={data} /> : ''}
        </Col>
      </Row>
    </>
  );
};

export default PatientSearch;
