import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { IconsCommonProps } from '../../../Types/Icons/IconsTypes';
import { H4 } from '../../../AbstractElements';

const IcoIconCard: React.FC<IconsCommonProps> = ({ title, iconType, parentCallback }) => {
    const getITag = (tag: string) => {
      parentCallback(tag);
    };
    return (
      <Card>
        <CardHeader>
          <H4 className="m-b-0">{title}</H4>
        </CardHeader>
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((item, i) => {
              return (
                <Col sm="6" xs="12" lg="4" key={i} onClick={() => getITag(item)}>
                  <i className={`icofont icofont-${item}`}></i> {item}
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    );
  };

export default IcoIconCard