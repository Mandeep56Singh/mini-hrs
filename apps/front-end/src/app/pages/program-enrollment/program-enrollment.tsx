import React, { useState, useEffect } from "react";
import NewEnrollment from "./new-enrollment";
import EnrolledPrograms from "./enrolled-programs";
import { Patient } from "../../models/patient";
import { getPrograms } from "../../resources/program-resource";
import { Program } from "../../models/programs";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const ProgramEnrollment: React.FC<{patient: Patient}> = ({patient})=>{
    const [programs,setPrograms] = useState<Program[]>([]);
    const onChange = (key: string) => {
        console.log(key);
      };
    const items: TabsProps['items'] = [
        {
          key: 'enroll',
          label: `Enroll+`,
          children: <NewEnrollment programs={programs}/>,
        },
        {
          key: 'enrolled-programs',
          label: `Enrolled Programs`,
          children: <EnrolledPrograms enrolledPrograms={[]} />
        },
        {
          key: 'completed-programs',
          label: `Completed Programs`,
          children: `Completed Programs`,
        },
    ];
  
    useEffect(()=>{
        getPrograms().then((results)=>{
            console.log('results', results);
            setPrograms(results);
        });
    },[]);
    return(
        <>
        <h4>Program Enrollments</h4>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        
        </>
    );
}

export default ProgramEnrollment;