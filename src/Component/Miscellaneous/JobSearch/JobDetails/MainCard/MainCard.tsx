import { Rating } from "react-simple-star-rating";
import { Card, CardBody, Row } from 'reactstrap'
import { Btn, H4, H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { ApplyForThisJob, EndLessDesigner, Href, ProductDesignerMainCard, SimilarJobs } from '../../../../../utils/Constant'
import JobDescription from "./JobDescription";
import SimilarJobsCards from "./SimilarJobsCards";

const MainCard = () => {
  return (
    <>
      <Card>
        <div className="job-search">
          <CardBody>
            <div className="d-flex">
              <Image className="img-40 b-r-0 img-fluid  m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="job-search"/>
              <div className="flex-grow-1">
                <H6 className="f-w-600">
                  <Link to={Href}>{ProductDesignerMainCard}</Link>
                  <span className="pull-right">
                    <Btn color="primary">{ApplyForThisJob}</Btn>
                  </span>
                </H6>
                <P>{EndLessDesigner}
                  <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={15}/>
                </P>
              </div>
            </div>
            <JobDescription />
          </CardBody>
        </div>
      </Card>
      <div className="header-faq">
        <H6 className="mb-0 f-w-600">{SimilarJobs}</H6>
      </div>
      <Row>
        <SimilarJobsCards limit={5} jobClass={'col-xl-6 xl-100 box-col-12'} ribbon={false} colClass={true}/> 
      </Row>
    </>
  )
}

export default MainCard