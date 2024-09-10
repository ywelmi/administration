import { TLotsDraw } from "../../type/lotsdraw";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";

import { LotsDrawUpdateAtheleForm } from "./LotsDrawUpdateAtheleForm";
import { Btn, H3 } from "../../AbstractElements";
import { LotsDrawSubmitGroupResultForm } from "./LotsDrawSubmitResultGroupForm";
import { Modal } from "reactstrap";
import { LotsDrawSubmitResultAllForm } from "./LotsDrawSubmitResultAtheleForm";

const LotsDrawUpdateTicketAtheleModal = ({ sportId, team_id, content_id }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => setOpenModal(!openModal);
    return (
        <>
            <Btn className="btn btn-success edit" onClick={openModalToggle}>
                <i className="icon-pencil-alt" />
                Cập nhật VĐV
            </Btn>
            <CommonModal
                isOpen={openModal}
                toggle={openModalToggle}
                fullscreen
                modalBodyClassName="p-0"
                heading="Riho SIGN-UP"
            >
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <H3 className="modal-header justify-content-center border-0">
                        Cập nhật VĐV vào làn lượt và khóa thăm
                    </H3>
                    <LotsDrawUpdateAtheleForm
                        sportId={sportId}
                        // onSubmit={() => setOpened(false)}
                        team_id={team_id}
                        content_id={content_id}
                        onCancel={() => setOpenModal(false)}
                    />
                </div>
            </CommonModal>
        </>
    );
};

export default LotsDrawUpdateTicketAtheleModal;
