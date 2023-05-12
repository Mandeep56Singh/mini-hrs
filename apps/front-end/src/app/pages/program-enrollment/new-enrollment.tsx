import React from "react";
import { Button, Select, Col, Row } from 'antd';
import { Program } from "../../models/programs";

const NewEnrollment: React.FC<{programs: Program[]}> = ({programs})=>{
    return(
        <>
        <h4>Enroll</h4>
         <Row>
            <Col>
               <Select
                style={{ width: 400 }}
                options={programs.map((program)=>{
                    return { value: program.uuid, label: program.name }
                })}
               />
               <Button type="primary">Enrol into Program</Button>
            </Col>
         </Row>
        </>
    );
};

export default NewEnrollment;