import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { AjaxRequestMovies, MovieMode } from "../../../../utils/Constant";
import { ajaxData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const AjaxRequestMovie = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: 'Search for a movie. e.g. "Herry Poter".',
      input: "text",
      confirmButtonColor: "var(--theme-default)",
    })
      .then((name) => {
        if (name)
          return fetch(
            `https://itunes.apple.com/search?term=${name.value}&entity=movie`
          );
        throw null;
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const movie = json.results[0];
        if (!movie)
          return SweetAlert.fire({
            text: "No movie was found!",
            confirmButtonColor: "var(--theme-default)",
          });
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
        SweetAlert.fire({
          title: "Top result:",
          imageUrl: imageURL,
          text: name,
        });
      })
      .catch((err) => {
        if (err)
          SweetAlert.fire("Oh noes!", "The AJAX request failed!", "error");
      });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={AjaxRequestMovies} span={ajaxData} />
        <CardBody className="btn-showcase">
          <Btn color="secondary" className="sweet-15" onClick={displayAlert}>
            {MovieMode}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxRequestMovie;
