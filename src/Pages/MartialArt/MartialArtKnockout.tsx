import { Bracket } from "react-brackets";
import { toast } from "react-toastify";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { N } from "../../name-conversion";
import { generateMartialArtContentTree } from "../../Service/martialArt";
import { BasicDataTables, DataTables } from "../../utils/Constant";
import { KnockoutContextProvider, useKnockoutContext } from "./context";
import { CustomRoundComponent } from "./CustomRound";
import { CustomSeed } from "./CustomSeed";

const MartialArtKnockout = () => {
  const { rounds: fetchedRounds, sportId, contentId } = useKnockoutContext();

  const genMartialArtTree = () =>
    generateMartialArtContentTree(sportId, contentId)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          toast.success(N["success"]);
        }
      })
      .catch((err) => {
        toast.error(err?.data ? err.data : N["failed"]);
        console.log({ err });
      });

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={BasicDataTables} parent={DataTables} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 card-no-border">
                <div className="btn btn-primary" onClick={genMartialArtTree}>
                  <i className="fa fa-plus" />
                  Sinh cây
                </div>
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
                    rounds={fetchedRounds}
                    renderSeedComponent={(props) => <CustomSeed {...props} />}
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

const WrapperMartialArtKnockout = () => {
  return (
    <KnockoutContextProvider>
      <MartialArtKnockout />
    </KnockoutContextProvider>
  );
};

export { WrapperMartialArtKnockout as MartialArtKnockout };
