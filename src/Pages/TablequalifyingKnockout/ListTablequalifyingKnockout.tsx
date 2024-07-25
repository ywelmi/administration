import { useParams } from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  TablequalifyingKnockoutMatchReportModal,
  useTablequalifyingKnockout,
} from "./TablequalifyingKnockoutForm";
import { toast } from "react-toastify";
import { N } from "../../name-conversion";
import { InputSelect } from "../../Component/InputSelect";
import {
  Bracket,
  IRenderSeedProps,
  Seed,
  SeedItem,
  SeedTeam,
} from "react-brackets";
import {
  tablequalifyingKnockoutGen,
  tablequalifyingKnockoutUpdate,
} from "../../Service/tablequalifyingKnockout";
import {
  IKnockoutCreate,
  TTablequalifyingKnockout,
  TTablequalifyingKnockoutMatchReport,
} from "../../type/tablequalifyingKnockout";
import { KnockoutContextProvider, useKnockoutContext } from "./context";

const CustomSeed = (
  { seed, breakpoint, roundIndex, seedIndex, callback }: IRenderSeedProps & {
    callback?: () => void;
  },
) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed

  const { updateMatch, fetchTablequalifyingKnockout, sportId, knockoutTeams } =
    useKnockoutContext();

  const refreshKnockoutBrackets = useCallback(() => {
    console.log("reload brackets");
    fetchTablequalifyingKnockout(sportId);
  }, [sportId]);

  const handleUpdateKnockoutMatch = (
    v: TTablequalifyingKnockoutMatchReport,
  ) => {
    tablequalifyingKnockoutUpdate(v).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        refreshKnockoutBrackets();
      }
    }).catch((err) => {
      console.log({ err });
    });
    // .finally(() => callback?.());
  };

  // console.log({ roundIndex, seedIndex, name: seed.teams[0]?.name });

  // const showSelectTeam = (!seed.teams[0]?.name || !seed.teams[1]?.name) &&
  //   roundIndex == 0;

  const updateTeam = (id: string, t: Partial<TTablequalifyingKnockout>) => {
    updateMatch({ id, ...t });
  };

  const showScoreUpdate = !!seed.teams[0]?.name && !!seed.teams[1]?.name;
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 14 }}>
      <SeedItem>
        <div>
          {roundIndex == 0 && !seed.teams[0]?.name
            ? (
              <InputSelect
                title={N["team"]}
                data={knockoutTeams}
                k="org_name"
                v="id"
                name="team"
                // value={sportId}
                handleChange={(e) => {
                  const teamId = e.target.value;

                  const team = knockoutTeams.find(({ id }) => id === teamId);
                  if (team) {
                    updateTeam(seed.id.toString(), {
                      team1_id: team.id,
                      team1_name: team.org_name,
                    });
                  }
                }}
              />
            )
            : (
              <SeedTeam style={{ color: "red" }}>
                {seed.teams[0]?.name || "NO TEAM "}
              </SeedTeam>
            )}
          {showScoreUpdate
            ? (
              <TablequalifyingKnockoutMatchReportModal
                onSubmit={handleUpdateKnockoutMatch}
                tablequalifyingKnockoutMatchReport={{
                  id: seed.id.toString(),
                  sets: [],
                }}
              />
            )
            : <div>Mời chọn đội</div>}
          <SeedTeam>{seed.teams[1]?.name || "NO TEAM "}</SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

const PageTablequalifyingKnockout = () => {
  const { t } = useTranslation();

  const {
    knockoutSports,
    sportId,
    setSportId,
    rounds,
    fetchTablequalifyingKnockout,
  } = useKnockoutContext();

  const handleAddKnockoutBracket = useCallback(
    (
      knockoutBracket: IKnockoutCreate,
    ) => {
      console.log({ knockoutBracket });
      tablequalifyingKnockoutGen(knockoutBracket).then((res) => {
        const { status, data } = res;
        console.log({ addTablequalifyingResult: data });
        if (status === 200) {
          fetchTablequalifyingKnockout(sportId);
          toast.info(t("success"));
          return;
        }
        return Promise.reject(status);
      }).catch((err) => {
        toast.error(t("error"));
        console.log({ err });
      });
    },
    [],
  );

  const {
    handleToggle: handleToggleAddModal,
    TablequalifyingKnockoutModal: TablequalifyingKnockoutAddModal,
  } = useTablequalifyingKnockout({
    onSubmit: handleAddKnockoutBracket,
    tablequalifyingKnockout: {
      "number_team": 0,
      "has_grade_3rd": false,
      "sport_id": sportId,
    },
  });

  const addBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rounds?.length > 0) return;
    if (addBtnRef.current) addBtnRef.current.click();
  }, [rounds]);

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <InputSelect
                  title={N["sport"]}
                  data={knockoutSports}
                  k="name"
                  v="id"
                  name="sport"
                  value={sportId}
                  handleChange={(e) => setSportId(e.target.value)}
                />
                <div
                  ref={addBtnRef}
                  className="btn btn-primary"
                  onClick={handleToggleAddModal}
                >
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TablequalifyingKnockoutAddModal />
              </CardHeader>
              <CardBody>
                <Bracket
                  rounds={rounds}
                  renderSeedComponent={(props) => <CustomSeed {...props} />}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const WrapperTablequalifyingKnockout = () => {
  return (
    <KnockoutContextProvider>
      <PageTablequalifyingKnockout />
    </KnockoutContextProvider>
  );
};
export { WrapperTablequalifyingKnockout as PageTablequalifyingKnockout };
