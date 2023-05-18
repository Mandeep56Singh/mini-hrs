import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { patientSearch } from '../../resources/patient-search.resource';
import { ColumnsType } from 'antd/es/table';
import TableList from '../../components/table-list/table-list';
import { PatientIdentifier } from '../../models/patient';
import { Link } from 'react-router-dom';
import { getYearMonthDate } from '../../utils/date-formatter';

const { Search } = Input;
interface DataType {
  key: React.Key;
  identifier: string;
  dob: string | undefined;
  gender: string | undefined;
  patientUuid: string | undefined;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Identifier',
    dataIndex: 'identifier',
    render: (text: string, record: DataType) => {
      return (
        <Link to={`/patient-dashboard/${record?.patientUuid}/dashboard`}>
          {text}
        </Link>
      );
    },
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
];

const PatientSearch: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState<PatientIdentifier[]>([]);
  const [tableData, setTableData] = useState([]);
  const onChangeHandler = (s: string) => {
    setSearchString(s);
  };
  const onEnterHandler = async () => {
    const results: PatientIdentifier[] = await patientSearch(searchString);
    setSearchResults(results);
    processTableData(results);
  };
  const processTableData = (results) => {
    const data = results.map((result) => {
      return {
        key: result?.id,
        identifier: result?.identifier,
        dob: getYearMonthDate(result.patient?.dob),
        gender: result.patient?.gender,
        patientUuid: result.patient?.uuid,
      };
    });

    setTableData(data);
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
        <Col span={14} offset={5}>
          {tableData.length ? (
            <TableList cols={columns} data={tableData} />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </>
  );
};

export default PatientSearch;
