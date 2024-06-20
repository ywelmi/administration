import { Card, CardBody, Col } from 'reactstrap'
import { OpenFirstModal, ToggleBetweenModal } from '../../../../utils/Constant'
import CommonModal from '../Common/CommonModal'
import { toggleModalList } from '../../../../Data/Ui-Kits/Modal/Modal'
import { useState } from 'react'
import ToggleParentModal from './ToggleParentModal'
import { Btn } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ToggleBetweenModals = () => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  return (
    <Col xl="4">
      <Card>
        <CardHeaderCommon title={ToggleBetweenModal} span={toggleModalList} />
        <CardBody className="badge-spacing">
          <Btn color="dark" onClick={toggle}>{OpenFirstModal}</Btn>
          <CommonModal centered isOpen={modal} toggle={toggle}>
            <ToggleParentModal nestedModal={nestedModal} closeAll={closeAll} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll}/>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ToggleBetweenModals