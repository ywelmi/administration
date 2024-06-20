import React from 'react'
import { IconsCommonProps } from '../../../Types/Icons/IconsTypes';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H4 } from '../../../AbstractElements';

const ThemifyIconCard:React.FC<IconsCommonProps> = ({ iconType, title, parentCallback }) => {
    const getITag = (tag: string) => {
      parentCallback(tag);
    };
  
    return (
      <>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H4 className="m-b-0">{title}</H4>
            </CardHeader>
            <CardBody>
              <Row className="icon-lists">
                {iconType.map((icon, i) => {
                  return (
                    <Col sm="6" lg="4" key={i} onClick={() => getITag(icon)}>
                      <i className={`${icon}`}></i> {icon}
                    </Col>
                  );
                })}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };

export default ThemifyIconCard