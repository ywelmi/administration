import { useFormik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import * as Yup from "yup";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { MatchTurnWrapper } from "../../features/matchTurn";
import { useMatchTurnContext } from "../../features/matchTurn/context";
import { getFilterByValue } from "../../Service/_getParams";
import {
  knockoutMatchTurnCreate,
  knockoutMatchTurnDelete,
  knockoutMatchTurnsGet,
  knockoutMatchTurnUpdate,
  qualifyingMatchTurnCreate,
  qualifyingMatchTurnDelete,
  qualifyingMatchTurnsGet,
  qualifyingMatchTurnUpdate,
} from "../../Service/matchTurn";
import { ETable } from "../../type/enum";
import { TTablequalifyingMatchReport } from "../../type/tablequalifyingMatch";
import { MatchTurnForm } from "./MatchTurn/MatchTurnForm";
import { ListSetReport } from "./SetReport";

const Schema = Yup.object({
  id: Yup.string(),
  team1_point: Yup.number().required(),
  team2_point: Yup.number().required(),
  sets: Yup.array(
    Yup.object({
      team1_point: Yup.number(),
      team2_point: Yup.number(),
      note: Yup.string().optional(),
    })
  )
    .min(1)
    .required("Required"),
});

export interface ITablequalifyingMatchReportForm {
  matchReport?: Partial<TTablequalifyingMatchReport>;
  onSubmit: (tablequalifyingMatchReport: TTablequalifyingMatchReport) => void;
  onCancel?: () => void;
}

interface ITabMatchTurn {
  matchReport: Partial<TTablequalifyingMatchReport>;
}
interface ITablequalifyingMatchReportModal
  extends ITablequalifyingMatchReportForm {
  matchReport: TTablequalifyingMatchReport;
  tableType: ETable;
}

const TablequalifyingMatchReportForm = ({
  matchReport: initMatchReport,
  onSubmit,
  onCancel,
}: ITablequalifyingMatchReportForm) => {
  const matchReport: Partial<TTablequalifyingMatchReport> = initMatchReport
    ? initMatchReport
    : {
        id: "", // match_id
        team1_point: 0,
        team2_point: 0,
        sets: [],
      };

  // console.log({ initTablequalifyingMatchReport, tablequalifyingMatchReport });
  const { t } = useTranslation();
  const formik = useFormik<Partial<TTablequalifyingMatchReport>>({
    initialValues: { ...matchReport },
    onSubmit: (value) => {
      // console.log({ submitAddTablequalifyingMatchReportValue: value });
      const submitValue = {
        id: value.id,
        team1_point: value.team1_point,
        team2_point: value.team2_point,
        sets: value.sets,
      } as TTablequalifyingMatchReport;
      if (submitValue) onSubmit(submitValue);
    },
    validationSchema: Schema,
  });

  // const { SetReportPopover, handleToggle: handleToggleAddSetReport } =
  //   useSetReportPopover({
  //     onSubmit: (v) => {
  //       const sets = formik.values.sets ?? [];
  //       formik.setFieldValue("sets", [...sets, v]);
  //     },
  //   });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="team1_point" check>
            {matchReport?.team1_name || t("team1_point")}
          </Label>
          <Input
            id="indexs"
            type="number"
            name="team1_point"
            defaultChecked
            className={`${
              formik.errors.team1_point ? "is-invalid" : "is-valid"
            }`}
            value={formik.values.team1_point}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="team2_point" check>
            {matchReport?.team2_name || t("team2_point")}
          </Label>
          <Input
            id="indexs"
            type="number"
            name="team2_point"
            defaultChecked
            className={`${
              formik.errors.team1_point ? "is-invalid" : "is-valid"
            }`}
            value={formik.values.team2_point}
            onChange={formik.handleChange}
          />
        </Col>
        {/* <SetReportPopover target="PopoversSetReport">
          <Btn
            color="secondary"
            type="button"
            id="PopoversSetReport"
            onClick={handleToggleAddSetReport}
          >
            Thêm mới séc
          </Btn>
        </SetReportPopover> */}
        {formik.errors.sets ? (
          <div className="invalid-text">Mời nhập séc</div>
        ) : null}
        <Col md="12" className="form-check checkbox-primary">
          <Label for="sets" check>
            {t("sets")}
          </Label>
          <ListSetReport items={formik.values.sets} />
        </Col>

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel ? (
            <Btn color="primary" type="button" onClick={onCancel}>
              Đóng
            </Btn>
          ) : null}
        </Col>
      </Row>
    </form>
  );
};

const useTablequalifyingMatchReportModal = ({
  matchReport,
  tableType = ETable.KNOCKOUT,
}: ITablequalifyingMatchReportModal) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const matchTurnsGet = useCallback(async () => {
    if (matchReport?.id) {
      // get all match turns belong to that match id
      const filter = getFilterByValue("match_id", "=", matchReport.id);
      if (tableType == ETable.QUALIFYING) {
        return qualifyingMatchTurnsGet({ filter });
      } else return knockoutMatchTurnsGet({ filter });
    }
    return Promise.reject("no match id");
  }, [matchReport?.id, tableType]);

  const matchTurnAdd = useMemo(() => {
    if (tableType == ETable.QUALIFYING) {
      return qualifyingMatchTurnCreate;
    }
    return knockoutMatchTurnCreate;
  }, [tableType]);

  const matchTurnUpdate = useMemo(() => {
    if (tableType == ETable.QUALIFYING) {
      return qualifyingMatchTurnUpdate;
    }
    return knockoutMatchTurnUpdate;
  }, [tableType]);

  const matchTurnDel = useMemo(() => {
    if (tableType == ETable.QUALIFYING) {
      return qualifyingMatchTurnDelete;
    } else return knockoutMatchTurnDelete;
  }, [tableType]);

  const TablequalifyingMatchReportModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
      title="Trận nhỏ"
    >
      <MatchTurnWrapper
        matchTurnsGet={matchTurnsGet}
        matchTurnUpdate={matchTurnUpdate}
        matchTurnDel={matchTurnDel}
        matchTurnCreate={matchTurnAdd}
      >
        <TabMatchTurn matchReport={matchReport || {}}></TabMatchTurn>
      </MatchTurnWrapper>
    </CommonModal>
  );

  return { TablequalifyingMatchReportModal, handleToggle };
};

enum ETabTurn {
  SET = 2,
  TURN = 1,
}

const TabMatchTurn = ({ matchReport }: ITabMatchTurn) => {
  const [tabId, setTabId] = useState<ETabTurn>(ETabTurn.TURN);
  const { setMatchId } = useMatchTurnContext();
  useEffect(() => {
    console.log({ matchReportid: matchReport?.id });
    matchReport?.id && setMatchId(matchReport.id);
  }, [matchReport, setMatchId]);
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            active={tabId === ETabTurn.TURN}
            onClick={() => setTabId(ETabTurn.TURN)}
          >
            Trận nhỏ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={tabId === ETabTurn.SET}
            onClick={() => setTabId(ETabTurn.SET)}
          >
            Séc đấu
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tabId}>
        <TabPane tabId={ETabTurn.TURN}>
          <MatchTurnForm />
        </TabPane>
        <TabPane tabId={ETabTurn.SET}>
          <TablequalifyingMatchReportForm
            onSubmit={(v) => {
              console.log({ v });
            }}
            matchReport={matchReport}
            // {...rest}
            // onCancel={() => setOpened(false)}
          />
        </TabPane>
      </TabContent>
    </>
  );
};

export { TablequalifyingMatchReportForm, useTablequalifyingMatchReportModal };
