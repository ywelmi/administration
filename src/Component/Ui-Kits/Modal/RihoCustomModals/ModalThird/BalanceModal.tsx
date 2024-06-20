import React from 'react'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import { Badges, H5, Image, LI, SVG, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { balanceData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { BalanceModalType } from '../../../../../Types/Ui-Kits/UiKitsTypes'

const BalanceModal:React.FC<BalanceModalType> = ({ modalThird, modalThirdToggle }) => {
  return (
    <Modal centered fade isOpen={modalThird} toggle={modalThirdToggle}>
      <Col xl="12">
        <Card className="balance-box mb-0">
          <CardBody>
            <div className="balance-profile">
              <div className="balance-img">
                <Image className="image-fluid" src={dynamicImage(`dashboard-3/user.png`)} alt="user vector" />
                <Link className="edit-icon" to="/app/users/profile">
                  <SVG iconId="pencil" />
                </Link>
              </div>
              <span className="f-light d-block">Your Balance</span>
              <H5 className="mt-1">$768,987.90</H5>
              <UL className='simple-list flex-row'>
                {balanceData.map(({ title, text, data, icon, color }, index) => (
                  <LI key={index}>
                    <div className={`balance-item ${color}`}>
                      <div className="balance-icon-wrap">
                        <div className="balance-icon">{icon}</div>
                      </div>
                      <div>
                        <span className="f-12 f-light">{title}</span>
                        <H5>{text}</H5>
                        <Badges color={`light-${color}`} className={`rounded-pill text-${color}`}>{data}</Badges>
                      </div>
                    </div>
                  </LI>
                ))}
              </UL>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  )
}

export default BalanceModal