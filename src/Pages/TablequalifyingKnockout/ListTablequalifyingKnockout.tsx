import { useCallback, useEffect, useRef, useState } from "react";
import { Bracket } from "react-brackets";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { InputSelect } from "../../Component/InputSelect";
import { N } from "../../name-conversion";
import { tablequalifyingKnockoutGen } from "../../Service/tablequalifyingKnockout";
import { IKnockoutCreate } from "../../type/tablequalifyingKnockout";
import { KnockoutContextProvider, useKnockoutContext } from "./context";
import { useTablequalifyingKnockout } from "./TablequalifyingKnockoutForm";

import { CustomRoundComponent } from "./CustomRound.tsx";
import { CustomSeed } from "./CustomSeed.tsx";

const PageTablequalifyingKnockout = () => {
  const {
    knockoutSports,
    sportId,
    setSportId,
    rounds: fetchedRounds,
    fetchTablequalifyingKnockout,
  } = useKnockoutContext();

  const [rounds, setRounds] = useState(fetchedRounds);

  useEffect(() => {
    setRounds(fetchedRounds);
  }, [fetchedRounds]);

  const handleAddKnockoutBracket = useCallback(
    (knockoutBracket: IKnockoutCreate) => {
      tablequalifyingKnockoutGen(knockoutBracket)
        .then((res) => {
          const { status, data } = res;
          console.log({ addTablequalifyingResult: data });
          if (status === 200) {
            fetchTablequalifyingKnockout(sportId);
            toast.info(N["success"]);
            return;
          }
          return Promise.reject(status);
        })
        .catch((err) => {
          toast.error(N["error"]);
          console.log({ err });
        });
    },
    [sportId, fetchTablequalifyingKnockout]
  );

  const {
    handleToggle: handleToggleAddModal,
    TablequalifyingKnockoutModal: TablequalifyingKnockoutAddModal,
  } = useTablequalifyingKnockout({
    onSubmit: handleAddKnockoutBracket,
    tablequalifyingKnockout: {
      number_team: 0,
      has_grade_3rd: false,
      sport_id: sportId,
      content_id: "",
    },
  });

  const addBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rounds?.length > 0) return;

    if (addBtnRef.current && !sportId) addBtnRef.current.click();
  }, [rounds, sportId]);

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={"Thi đấu vòng loại"} parent={"HTTQ2024"} />
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
                  handleChange={(e) =>
                    e.target.value && setSportId(e.target.value)
                  }
                />
                <div
                  ref={addBtnRef}
                  className="btn btn-primary mt-2"
                  onClick={handleToggleAddModal}
                >
                  <i className="fa fa-plus" />
                  {"Thêm mới"}
                </div>
                <TablequalifyingKnockoutAddModal />
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    position: "relative",
                    overflow: "scroll",
                    width: "100%",
                    height: "70vh",
                  }}
                >
                  <Bracket
                    rounds={rounds}
                    renderSeedComponent={(props) => <CustomSeed {...props} />}
                    // bracketClassName="bracket"
                    // roundClassName="round"
                    roundTitleComponent={CustomRoundComponent}
                  />
                </div>
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
