import { Row, Col, Card, Statistic} from 'antd';
import './patient-landing.css';

const PatientLanding: React.FC = () => {
 
  return (
    <>
    <Row gutter={16} className="dashboard-row">
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Visits"
              value={11}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Encounters"
              value={13}
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
              value={1}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={10}>
          <Card bordered={true}>
            <Statistic
              title="Programs Completed"
              value={2}
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
