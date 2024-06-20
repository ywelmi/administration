import { ArrowRightCircle } from 'react-feather'
import { H6, P } from '../../../../AbstractElements'
import { UXDesigners } from '../../../../utils/Constant'
import { scrollingUxData } from '../../../../Data/Ui-Kits/Modal/Modal'

const UXDesigner = () => {
  return (
    <>
      <H6>{UXDesigners}</H6>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal" />
        </div>
        <div className="flex-grow-1 ms-2">
          <P>{"User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations."}</P>
        </div>
      </div>
      {scrollingUxData.map((item, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal" />
          </div>
          <div className="flex-grow-1 ms-2">
            <P>{item}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default UXDesigner