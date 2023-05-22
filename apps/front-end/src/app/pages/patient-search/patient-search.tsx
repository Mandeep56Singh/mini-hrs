import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Input, Button, Space } from 'antd';
import { patientSearch } from '../../resources/patient-search.resource';
import { ColumnsType } from 'antd/es/table';
import TableList from '../../components/table-list/table-list';
import { Link } from 'react-router-dom';
import { getYearMonthDate } from '../../utils/date-formatter';
import {
  PatientSearchResponse,
  PatientSearchTableData,
} from '../../models/patient-search';
import AddPatientModal from '../../components/patient/add-patient-modal';

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
  const [_, setSearchResults] = useState<PatientSearchResponse[]>([]);
  const [tableData, setTableData] = useState<PatientSearchTableData[]>([]);
  const [showAddPatientModal, setShowAddPatientModal] = useState<boolean>(false);
  const onChangeHandler = (s: string) => {
    setSearchString(s);
  };
  const onEnterHandler = async () => {
    const results: PatientSearchResponse[] = await patientSearch(searchString);
    setSearchResults(results);
    processTableData(results);
  };
  const processTableData = (results: PatientSearchResponse[]) => {
    const data = results.map((result) => {
      return {
        key: result?.uuid,
        identifier:
          result?.patient.patientIdentifiers.length > 0
            ? result?.patient.patientIdentifiers[0]?.identifier
            : '',
        dob: getYearMonthDate(result.patient?.dob),
        gender: result.patient?.gender,
        patientUuid: result.patient?.uuid,
      };
    });

    setTableData(data);
  };
  const cancelAddPatientModalHandler = ()=>{
     setShowAddPatientModal(false);
  };
  const addPatientHandler = ()=>{
    setShowAddPatientModal(true);
  }
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
          <br></br>
           <Button
           type="primary"
           onClick={addPatientHandler}
           >
            +Add Patient
          </Button>
          <AddPatientModal 
          isModalOpen={showAddPatientModal}
          handleCancel={cancelAddPatientModalHandler}
          />
         </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
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
