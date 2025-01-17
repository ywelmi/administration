import { toast } from "react-toastify";
import { Btn } from "../AbstractElements";

const CONFIRM_ID = "confirm-modal";
const confirmModal = async (title?: string) => {
  const p = new Promise((resolve) => {
    const M = () => {
      return (
        <div>
          {title ? <div className="text-center text-lg">{title}</div> : null}
          <div className="text-center text-lg">Đồng ý ???</div>
          <div className="flex gap-2">
            <Btn
              type="button"
              color="danger"
              onClick={() => {
                resolve(true);
                toast.dismiss(CONFIRM_ID);
              }}
            >
              Xác nhận
            </Btn>
            <Btn
              type="button"
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

    toast.warn(<M />, {
      position: "top-center",
      onClose: () => resolve(false),
      toastId: CONFIRM_ID,
    });
  });

  const confirm = await p.then();
  return { confirm };
};

export { confirmModal };
