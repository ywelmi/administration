import { useEffect, useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody } from 'reactstrap'
import { ColorsScheme } from '../../../../utils/Constant'
import { colorSchema } from '../../../../Data/BonusUi/Toast/Toast'
import { Btn } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ColorsSchemes = () => {
  const [open,setOpen] = useState<boolean>(true)
  useEffect(() => {
    setTimeout(()=>{
      setOpen(false)
    },5000)
  },[])
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={ColorsScheme} span={colorSchema} />
        <CardBody className="toast-rtl">
          <Toast fade className="default-show-toast align-items-center text-light bg-warning border-0" isOpen={open}>
            <div className="d-flex justify-content-between align-items-center">
              <ToastBody>Your time over after 5 minute.</ToastBody>
              <Btn close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Btn>
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColorsSchemes