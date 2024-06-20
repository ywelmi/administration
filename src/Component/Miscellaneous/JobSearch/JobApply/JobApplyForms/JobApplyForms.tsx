import { Card, CardBody, CardFooter } from 'reactstrap'
import { Btn, H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { Rating } from "react-simple-star-rating";
import { Href, JobCancelButton, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience, SaveThisJob } from '../../../../../utils/Constant'
import PersonalDetail from './PersonalDetail';
import EducationClass from './EducationClass';
import ExperienceClass from './ExperienceClass';
import UploadFileClass from './UploadFileClass';

const JobApplyForms = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex">
            <Image className="img-40 b-r-0 img-fluid  m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="job-search"/>
            <div className="flex-grow-1">
              <H6 className="f-w-600">
                <Link to={Href}>{JobUIDesigner}</Link>
                <span className="pull-right">
                  <Btn color="primary">
                    <span><i className="fa fa-check text-white" /></span> {SaveThisJob}
                  </Btn>
                </span>
              </H6>
              <P>Save this job <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random()*5} size={15} /></P>
            </div>
          </div>
          <div className="job-description">
            <H6 className="mb-0">{JobPersonalDetails}</H6>
            <PersonalDetail />
            <H6 className='mb-0'>{JobYourEducation}</H6>
            <EducationClass />
            <H6  className= 'mb-0'>{JobYourExperience}</H6>
            <ExperienceClass />
            <H6 className='mb-0'>{JobUploadYourFiles}</H6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Btn color="primary mx-1">{JobSubmitButton}</Btn>
          <Btn color="light">{JobCancelButton}</Btn>
        </CardFooter>
      </div>
    </Card>
  )
}

export default JobApplyForms