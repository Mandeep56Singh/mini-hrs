import React, { useState, useEffect } from 'react';
import NewEnrollment from './new-enrollment';
import EnrolledPrograms from '../../components/enrollment-table/enrolled-programs';
import { getPrograms } from '../../resources/program-resource';
import { Program } from '../../models/programs';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import {
  getEnrolledPrograms,
  getCompletedPrograms,
} from '../../resources/program-enrollment.resource';
import { PatientProgramEnrollment } from '../../models/program-enrollment';
import { getLocations } from '../../resources/location-resource';
import { Location } from '../../models/location';
import { useLoaderData } from 'react-router-dom';

const ProgramEnrollment: React.FC = () => {
  const patient = useLoaderData() as { uuid: string };
  const [programs, setPrograms] = useState<Program[]>([]);
  const [enrolledPrograms, setEnrolledPrograms] = useState<
    PatientProgramEnrollment[]
  >([]);
  const [completedPrograms, setCompletedPrograms] = useState<
    PatientProgramEnrollment[]
  >([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [newEnrollment,setNewEnrollment] = useState<PatientProgramEnrollment>();
  const [completedEnrollment,setCompletedEnrollment] = useState<PatientProgramEnrollment>();

  const newEnrollmentHandler = (newEnrollment: PatientProgramEnrollment)=>{
    setNewEnrollment(newEnrollment);
  };
  const completeEnrollentHandler = (completedEnrollment: PatientProgramEnrollment)=>{
     setCompletedEnrollment(completedEnrollment);
  }

  const items: TabsProps['items'] = [
    {
      key: 'enroll',
      label: `Enroll+`,
      children: (
        <NewEnrollment
          programs={programs}
          locations={locations}
          patientUuid={patient.uuid}
          onNewEnrollment = { newEnrollmentHandler}
        />
      ),
    },
    {
      key: 'enrolled-programs',
      label: `Enrolled Programs`,
      children: <EnrolledPrograms patientPrograms={enrolledPrograms} onComplete={ completeEnrollentHandler } />,
    },
    {
      key: 'completed-programs',
      label: `Completed Programs`,
      children: <EnrolledPrograms patientPrograms={completedPrograms} onComplete={ completeEnrollentHandler }/>,
    },
  ];

 

  useEffect(() => {
    getPrograms().then((results) => {
      setPrograms(results);
    });
    getLocations().then((locations) => {
      setLocations(locations);
    });
  }, []);

  useEffect(() => {
    getEnrolledPrograms(patient.uuid).then(
      (enrolledPrograms: PatientProgramEnrollment[]) => {
        setEnrolledPrograms(enrolledPrograms);
      }
    );
    getCompletedPrograms(patient.uuid).then((completedPrograms) => {
      setCompletedPrograms(completedPrograms);
    });
  }, [patient,newEnrollment,completedEnrollment]);
  return (
    <>
      <h4>Program Enrollments</h4>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};

export default ProgramEnrollment;
