import { useRef } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { Cancel, Print, PrintViews } from '../../../../../utils/Constant';
import ReactToPrint from 'react-to-print';
import PrintPreview from './PrintPreview';
import { PrintModalPropsTypes } from '../../../../../Types/Application/Contacts/Contacts';

const PrintModalPreview = ({ printModal, selectedUser, toggleCallback }: PrintModalPropsTypes) => {
  const printModalToggle = () => {toggleCallback(false)};
  const componentRef = useRef();
  return (
    <Modal fade className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <ModalHeader toggle={printModalToggle}>{PrintViews}</ModalHeader>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} />
        <ReactToPrint trigger={() => (
            <Btn color="secondary" className="me-1">{Print}</Btn>
          )}
          content={() => componentRef?.current || null}
        />
        <Btn color="primary" onClick={printModalToggle}>{Cancel}</Btn>
      </ModalBody>
    </Modal>
  )
}

export default PrintModalPreview