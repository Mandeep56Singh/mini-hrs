import React from 'react';
import { Button, Modal, Row, Col} from 'antd';
import { getYearMonthDate } from '../../utils/date-formatter';
import { Encounter } from '../../models/encounter';

interface viewEncounterProps {
  isModalOpen: boolean;
  encounter: Encounter;
  handleCancel: ()=>void;
}

const ViewEncounterModal: React.FC<viewEncounterProps> = ({
  isModalOpen,
  encounter,
  handleCancel,
}) => {

    const renderAnswer = (ans: { valueText: string;
      valueDateTime: string;
      valueNumber: number;})=>{
        if(ans.valueDateTime){
            return getYearMonthDate(ans.valueDateTime);
        }
        if(ans.valueNumber){
            return ans.valueNumber;
        }
        if(ans.valueText){
           return ans.valueText;
        }
    };

    return (
        <Modal
          title="Encounter Details"
          open={isModalOpen}
          footer={[
            <Button key="back" onClick={handleCancel} danger>
              Close
            </Button>,
          ]}
        >
          <Row>
            <Col>
              { encounter?.answers ? encounter.answers.map((e)=>{
                 return <p key={e.uuid}>{e.question.question} : {renderAnswer(e)}</p>
              }) : ''}
              
            </Col>
          </Row>
        </Modal>
      );
};

export default ViewEncounterModal;
