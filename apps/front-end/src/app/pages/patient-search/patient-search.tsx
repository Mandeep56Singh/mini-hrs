import React,{ useState} from "react";
import { Row, Col } from "antd";
import { Input } from 'antd';
import { patientSearch } from "../../resources/patient-search.resource";

const { Search } = Input;

const PatientSearch: React.FC = ()=>{
 const [searchString,setSearchString] = useState('');
 const [searchResults,setSearchResults] = useState([]);
 const onChangeHandler = (s: string)=> {
     setSearchString(s);
 };
 const onEnterHandler = async ()=>{
    const results: any = await patientSearch(searchString);
    setSearchResults(results);
 }
  return(
    <Row>
        <Col>
           <h2>Patient Search</h2>
           <Search 
             placeholder="Enter patient ID" 
             enterButton="Search" 
             size="large" 
             onChange={(e)=>onChangeHandler(e.target.value)}
             onSearch={onEnterHandler}
             />
        </Col>
    </Row>
    
  );
}

export default PatientSearch;