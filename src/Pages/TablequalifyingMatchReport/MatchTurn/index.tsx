import { Popovers } from "../../../AbstractElements";

export const useSetReportPopover = ({
  onSubmit,
  ...rest
}: ISetReportPopover) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TSetReport) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const SetReportPopover = ({
    children,
    target,
  }: React.PropsWithChildren<{ target: string }>) => (
    <div>
      {children}
      <Popovers
        isOpen={opened}
        placement="right-end"
        target={target}
        trigger="click"
      >
        <MatchTurnForm
          onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { SetReportPopover, handleToggle };
};
