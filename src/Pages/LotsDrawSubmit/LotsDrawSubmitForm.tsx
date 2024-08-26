import { TLotsDraw } from "../../type/lotsdraw";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { LotsDrawSubmitResultForm } from "./LotsDrawSubmitResultAtheleForm";
import { LotsDrawUpdateAtheleForm } from "./LotsDrawUpdateAtheleForm";
import { H3 } from "../../AbstractElements";
import { LotsDrawSubmitGroupResultForm } from "./LotsDrawSubmitResultGroupForm";
import { Modal } from "reactstrap";

interface ILotsDrawSubmitModal {
    lotsdraw?: TLotsDraw[];
    onCancel?: () => void;
    sportId: string;
    team_id: string;
    content_id: string;
    gender?: number;
    // onSubmit: (lotsdraw: TLotsDraw[]) => void;
}

const useLotsDrawSubmitModal = ({ sportId, team_id, content_id, gender }: ILotsDrawSubmitModal) => {
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawSubmitModal = () => (
        <Modal modalBodyClassName=" text-start" fullscreen isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                <LotsDrawSubmitResultForm
                    sportId={sportId}
                    // onSubmit={() => setOpened(false)}
                    org_id={team_id}
                    content_id={content_id}
                    gender={gender}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </Modal>
    );

    return { LotsDrawSubmitModal, handleToggle };
};

const useLotsDrawSubmitGroupModal = ({ sportId, team_id, content_id, gender }: ILotsDrawSubmitModal) => {
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawSubmitGroupResultModal = () => (
        <Modal modalBodyClassName=" text-start" fullscreen isOpen={opened} toggle={handleToggle}>
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                <H3 className="modal-header justify-content-center border-0">Cập nhật kết quả thi đấu</H3>
                <LotsDrawSubmitGroupResultForm
                    sportId={sportId}
                    // onSubmit={() => setOpened(false)}
                    org_id={team_id}
                    content_id={content_id}
                    onCancel={() => setOpened(false)}
                />
            </div>
        </Modal>
    );

    return { LotsDrawSubmitGroupResultModal, handleToggle };
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

export { useLotsDrawSubmitModal, useLotsDrawUpdateAtheleModal, useLotsDrawSubmitGroupModal };
