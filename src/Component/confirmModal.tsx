import { toast } from "react-toastify";
import { Btn } from "../AbstractElements";

const CONFIRM_ID = "confirm-modal";
const useConfirmModal = async () => {
  const p = new Promise((resolve) => {
    const M = () => {
      return (
        <div>
          <div className="text-center text-lg">Đồng ý ???</div>
          <div className="flex gap-2">
            <Btn
              color="danger"
              onClick={() => {
                resolve(true);
                toast.dismiss(CONFIRM_ID);
              }}
            >
              Xác nhận
            </Btn>
            <Btn
              color="primary"
              onClick={() => {
                resolve(false);
                toast.dismiss(CONFIRM_ID);
              }}
            >
              Hủy
            </Btn>
          </div>
        </div>
      );
    };

    toast.warn(
      <M />,
      {
        position: "top-center",
        onClose: () => resolve(false),
        toastId: CONFIRM_ID,
      },
    );
  });

  const confirm = await p.then();
  return { confirm };
};

export { useConfirmModal };
