import { TLotsDraw } from "../../type/lotsdraw";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";

import { LotsDrawUpdateAtheleForm } from "./LotsDrawUpdateAtheleForm";
import { Btn, H3 } from "../../AbstractElements";
import { LotsDrawSubmitGroupResultForm } from "./LotsDrawSubmitResultGroupForm";
import { Modal } from "reactstrap";
import { LotsDrawSubmitResultAllForm } from "./LotsDrawSubmitResultAtheleForm";

interface ILotsDrawSubmitModal {
    lotsdraw?: TLotsDraw[];
    onCancel?: () => void;
    sportId: string;
    team_id: string;
    content_id: string;
    gender?: number;
    // onSubmit: (lotsdraw: TLotsDraw[]) => void;
}

const useLotsDrawSubmitAllModal = ({ sportId, content_id }: any) => {
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawSubmitModal = () => (
        <Modal modalBodyClassName=" text-start" fullscreen isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                <LotsDrawSubmitResultAllForm
                    sportId={sportId}
                    // onSubmit={() => setOpened(false)}

                    content_id={content_id}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </Modal>
    );

    return { LotsDrawSubmitModal, handleToggle };
};

const useLotsDrawSubmitGroupModal = ({ sportId, content_id, gender }: any) => {
    const [opened, setOpened] = useState(false);
    const handleToggleGroup = () => {
        setOpened((s) => !s);
    };

    const LotsDrawSubmitGroupResultModal = () => (
        <Modal modalBodyClassName=" text-start" fullscreen isOpen={opened} toggle={handleToggleGroup}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                <LotsDrawSubmitGroupResultForm
                    sportId={sportId}
                    // onSubmit={() => setOpened(false)}

                    content_id={content_id}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </Modal>
    );

    return { LotsDrawSubmitGroupResultModal, handleToggleGroup };
};

const useLotsDrawUpdateAtheleModal = ({ sportId, team_id, content_id, gender }: ILotsDrawSubmitModal) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawUpdateAthele = () => (
        <CommonModal modalBodyClassName=" text-start" isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">
                    Cập nhật thăm thi đấu cho vận động viên
                </H3>
                <LotsDrawUpdateAtheleForm
                    sportId={sportId}
                    // onSubmit={() => setOpened(false)}
                    team_id={team_id}
                    content_id={content_id}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </CommonModal>
    );

    return { LotsDrawUpdateAthele, handleToggle };
};
const testLotsDrawSubmitAllModal = ({ sportId, content_id }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => setOpenModal(!openModal);
    return (
        <>
            <Btn className="btn btn-info edit" onClick={openModalToggle}>
                <i className="icon-pencil-alt" />
                Cập nhật
            </Btn>
            <CommonModal isOpen={openModal} toggle={openModalToggle} modalBodyClassName="p-0" heading="Riho SIGN-UP">
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                    <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                    <LotsDrawSubmitResultAllForm
                        sportId={sportId}
                        // onSubmit={() => setOpened(false)}

                        content_id={content_id}
                        onCancel={() => setOpenModal(false)}
                    />
                </div>
            </CommonModal>
        </>
    );
};

export {
    useLotsDrawUpdateAtheleModal,
    useLotsDrawSubmitGroupModal,
    useLotsDrawSubmitAllModal,
    testLotsDrawSubmitAllModal,
};
