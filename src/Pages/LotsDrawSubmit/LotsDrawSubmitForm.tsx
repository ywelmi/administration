import { TLotsDraw } from "../../type/lotsdraw";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { LotsDrawSubmitSwimForm } from "./LotsDrawSubmitSwimForm";

interface ILotsDrawSubmitModal {
  lotsdraw?: TLotsDraw[];
  onCancel?: () => void;
  sportId: string;
  orgId: string;
  title?: string;
  // onSubmit: (lotsdraw: TLotsDraw[]) => void;
}

const getLotDrawId = (d: TLotsDraw) => d.id;

const useLotsDrawSubmitModal = (
  { sportId, orgId, title }: ILotsDrawSubmitModal,
) => {
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
      <LotsDrawSubmitSwimForm
        sportId={sportId}
        // onSubmit={() => setOpened(false)}
        orgId={orgId}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { LotsDrawSubmitModal, handleToggle };
};

export { useLotsDrawSubmitModal };
