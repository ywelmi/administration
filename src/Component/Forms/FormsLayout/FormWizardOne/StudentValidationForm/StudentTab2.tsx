import React from 'react'
import { StudentFormPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { Col, Input, Label, Row } from 'reactstrap';
import { AddProfile, PortfolioURL, ProjectDescription } from '../../../../../utils/Constant';
import { H6 } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';

const StudentTab2 :React.FC<StudentFormPropsType> = ({ studentValidationForm,  getUserData, fileInputRef, handleImageLabelClick, imageUrl }) => {
    const { portfolioURL, projectDescription } = studentValidationForm;
  
    return (
      <Row className="g-3 avatar-upload">
        <Col xs="12">
          <div>
            <div className="avatar-edit">
              <Input onChange={getUserData} innerRef={fileInputRef} className="d-none" type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
              <Label for="imageUpload" onClick={handleImageLabelClick} check />
            </div>
            <div className="avatar-preview">
              <div id="image" style={{backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${dynamicImage(`forms/user.png`)}`,}} />
            </div>
          </div>
          <H6>{AddProfile}</H6>
        </Col>
        <Col xs="12">
          <Label check>{PortfolioURL}</Label>
          <Input value={portfolioURL} onChange={getUserData} name="portfolioURL" type="url" placeholder="https://boho" />
        </Col>
        <Col xs="12">
          <Label check>{ProjectDescription}</Label>
          <Input type="textarea" value={projectDescription} onChange={getUserData} name="projectDescription" rows={2} />
        </Col>
      </Row>
    );
  };

export default StudentTab2