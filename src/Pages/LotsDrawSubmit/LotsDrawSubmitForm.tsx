import { TLotsDraw } from "../../type/lotsdraw";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { LotsDrawSubmitResultForm } from "./LotsDrawSubmitSwimForm";
import { LotsDrawUpdateAtheleForm } from "./LotsDrawUpdateAtheleForm";

interface ILotsDrawSubmitModal {
    lotsdraw?: TLotsDraw[];
    onCancel?: () => void;
    sportId: string;
    team_id: string;
    content_id: string;
    title?: string;
    // onSubmit: (lotsdraw: TLotsDraw[]) => void;
}

const useLotsDrawSubmitModal = ({ sportId, team_id, content_id, title }: ILotsDrawSubmitModal) => {
    const [opened, setOpened] = useState(false);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawSubmitModal = () => (
        <CommonModal
            backdrop="static"
            modalBodyClassName="social-profile text-start"
            isOpen={opened}
            toggle={handleToggle}
            title={title}
        >
            <LotsDrawSubmitResultForm
                sportId={sportId}
                // onSubmit={() => setOpened(false)}
                org_id={team_id}
                content_id={content_id}
                onCancel={() => setOpened(false)}
            />
        </CommonModal>
    );

    return { LotsDrawSubmitModal, handleToggle };
};

const useLotsDrawUpdateAtheleModal = ({ sportId, team_id, content_id, title }: ILotsDrawSubmitModal) => {
    const [opened, setOpened] = useState(false);
    console.log(content_id);
    const handleToggle = () => {
        setOpened((s) => !s);
    };

    const LotsDrawUpdateAthele = () => (
        <CommonModal
            backdrop="static"
            modalBodyClassName="social-profile text-start"
            isOpen={opened}
            toggle={handleToggle}
            title={title}
        >
            <LotsDrawUpdateAtheleForm
                sportId={sportId}
                // onSubmit={() => setOpened(false)}
                team_id={team_id}
                content_id={content_id}
                onCancel={() => setOpened(false)}
            />
        </CommonModal>
    );

    return { LotsDrawUpdateAthele, handleToggle };
};

export { useLotsDrawSubmitModal, useLotsDrawUpdateAtheleModal };
