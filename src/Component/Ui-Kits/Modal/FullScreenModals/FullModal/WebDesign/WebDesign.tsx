import { ArrowRightCircle, ChevronsRight } from 'react-feather'
import { WebDesigner, WebDesigns } from '../../../../../../utils/Constant'
import { H5, P } from '../../../../../../AbstractElements'
import { fullScreenModalList } from '../../../../../../Data/Ui-Kits/Modal/Modal'

const WebDesign = () => {
  return (
    <>
      <div className="large-modal-header">
        <ChevronsRight />
        <H5 className="f-w-600">{WebDesigns}</H5>
      </div>
      <P className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
      <H5 className="f-w-600">{WebDesigner}</H5>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal"/>
        </div>
        <div className="flex-grow-1 ms-2">
          <P className="m-0">For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</P>
        </div>
      </div>
      {fullScreenModalList.map((item, index) => (
        <div className="d-flex mt-2" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal"/>
          </div>
          <div className="flex-grow-1 ms-2">
            <P className="m-0">{item}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default WebDesign