import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';
import { useDashboardStats } from '../../resources/hooks/use-dashboard-stats';
import ErrorAlert from '../error/error-alert';
import Loader from '../loader/loader';

const DashboardStatistics: React.FC = () => {
  const { dashboardStats, isLoading, isError, error } = useDashboardStats();

  if (isError) {
    return <ErrorAlert error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Row gutter={16} className="dashboard-row">
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Patients"
              value={dashboardStats.patients}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Programs"
              value={dashboardStats.programs}
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
              title="Visits"
              value={dashboardStats.visits}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Locations"
              value={dashboardStats.locations}
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
              title="Forms"
              value={dashboardStats.forms}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardStatistics;
