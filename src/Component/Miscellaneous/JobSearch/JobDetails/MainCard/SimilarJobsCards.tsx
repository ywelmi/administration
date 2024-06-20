import React from 'react'
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Badges, H6, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { Link } from 'react-router-dom';
import { Href } from '../../../../../utils/Constant';
import { jobData } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch';
import { SimilarJobsCardsType } from '../../../../../Types/Miscellaneous/JobSearch/JobSearch';

const SimilarJobsCards:React.FC<SimilarJobsCardsType> = ({limit,jobClass,ribbon,colClass}) => {
    return (
      <Row>
        {jobData.slice(0, 5).map((item) => (
          <Col
            className={`col-auto ${limit === item.id && colClass ? "col-xl-12 xl-100": jobClass}`} key={item.id}>
            <Card className={`${item.ribbon && ribbon ? "ribbon-vertical-left-wrapper" : ""}`}>
              {item.ribbon ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbon && "d-none"}`}>
                  <i className="icofont icofont-love"></i>
                </div>
              ) : (" ")}
              <div className="job-search">
                <CardBody>
                  <div className="d-flex">
                    <Image className="img-40 b-r-0 img-fluid m-r-20" src={dynamicImage(`${item.logo}`)} alt="logo"/>
                    <div className="flex-grow-1">
                      <H6>
                        <Link to={Href}>{item.job_name}</Link>
                        {item.type === "new" ? (<Badges color='primary' className="pull-right">{item.badgeValue}</Badges>) : 
                        (<span className="pull-right">{item.type}</span>)}
                      </H6>
                      <P>
                        {item.job_area}, {item.job_city}
                        <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={15}/>
                      </P>
                    </div>
                  </div>
                  <P>{item.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  

export default SimilarJobsCards