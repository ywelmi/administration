import { ArrowRightCircle, ChevronsRight } from 'react-feather'
import { WebDesigner, WebDesigns } from '../../../../../utils/Constant'
import { H5, P } from '../../../../../AbstractElements'
import { commonWebData } from '../../../../../Data/Ui-Kits/Modal/Modal'

const WebDesign = () => {
  return (
    <>
      <div className="large-modal-header">
        <ChevronsRight />
        <H5 className="f-w-600">{WebDesigns}</H5>
      </div>
      <P className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
      <H5 className="f-w-600">{WebDesigner}</H5>
      {commonWebData.map(({ title, className ,pClassName}, index) => (
        <div className={`d-flex ${className}`} key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal"/>
          </div>
          <div className="flex-grow-1 ms-2">
            <P className={`mb-0 ${pClassName && pClassName}`}>{title}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default WebDesign