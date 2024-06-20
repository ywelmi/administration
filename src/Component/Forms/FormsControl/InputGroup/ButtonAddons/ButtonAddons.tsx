import { Card, CardBody, Col, Input, InputGroup } from 'reactstrap'
import { AddonPlaceHolder, ButtonAddon, SubmitButtonAddon, SubmitButtonAddonPlaceHolder } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'
import { buttonAddonData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const ButtonAddons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ButtonAddon} span={buttonAddonData}/>
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup>
            <Btn color='secondary' outline id="buttonAddon1">{'$ 25'}</Btn>
            <Input type="text" id="buttonAddon1"/>
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={SubmitButtonAddonPlaceHolder} id="buttonAddon2"/>
            <Btn color='warning' outline id="buttonAddon2">{SubmitButtonAddon}</Btn>
          </InputGroup>
          <InputGroup>
            <Btn color='secondary'><span>&#8364; </span></Btn>
            <Btn color='warning'>{'0.0114419'}</Btn>
            <Input type="text"/>
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={AddonPlaceHolder}/>
            <Btn color='secondary'><span>&#8377;</span></Btn>
            <Btn color='warning'>{'500'}</Btn>  
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ButtonAddons