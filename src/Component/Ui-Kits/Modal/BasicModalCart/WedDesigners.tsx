import { ArrowRightCircle } from 'react-feather'
import { H6, P } from '../../../../AbstractElements'
import { WebDesigner } from '../../../../utils/Constant'
import { scrollingWebData } from '../../../../Data/Ui-Kits/Modal/Modal'

const WedDesigners = () => {
  return (
    <>
      <H6>{WebDesigner}</H6>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal" />
        </div>
        <div className="flex-grow-1 ms-2">
          <P>For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</P>
        </div>
      </div>
      {scrollingWebData.map(({ text, className }, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal" />
          </div>
          <div className="flex-grow-1 ms-2">
            <P className={className && className}>{text}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default WedDesigners