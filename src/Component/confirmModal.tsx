const ConfirmModal = () => {
};

const useConfirmModal = () => {
  const confirm = window.confirm("Xác nhận?");
  return { confirm };
};

export { useConfirmModal };
