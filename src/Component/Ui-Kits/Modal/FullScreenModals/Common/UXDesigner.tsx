import { H5, P } from '../../../../../AbstractElements'
import { UXDesigners } from '../../../../../utils/Constant'
import { commonUxList } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { ArrowRightCircle } from 'react-feather'

const UXDesigner = () => {
  return (
    <>
      <H5 className="f-w-600">{UXDesigners}</H5>
      {commonUxList.map((item, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal"/>
          </div>
          <div className="flex-grow-1 ms-2">
            <P className="mb-1">{item}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default UXDesigner