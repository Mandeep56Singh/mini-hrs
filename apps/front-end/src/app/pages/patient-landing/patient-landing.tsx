import React,{ useEffect, useState } from 'react';
import { Row, Col, Card, Statistic} from 'antd';
import { useLoaderData } from 'react-router-dom';
import { getPatientStats } from '../../resources/patient-dashboard-stats.resource';
import { PatientDashboardStats } from '../../models/patient-dashboard-stats';
import './patient-landing.css';

const PatientLanding: React.FC = () => {
  const data = useLoaderData() as { uuid: string };
  const [dashboardStats,setDashboardStats] = useState<PatientDashboardStats>();
  useEffect(()=>{
     getPatientStats(data.uuid).then((stats)=>{
       setDashboardStats(stats);
     });
  },[data]);
  return (
    <>
    <Row gutter={16} className="dashboard-row">
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Visits"
              value={dashboardStats?.visits}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Encounters"
              value={dashboardStats?.encounters}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
    </Row>
    <Row gutter={16} className="dashboard-row">
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Programs Enrolled(Active)"
              value={dashboardStats?.enrolledPrograms}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Programs Completed"
              value={dashboardStats?.completedPrograms}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
  </Row>
  </>
  );
};

export default PatientLanding;
