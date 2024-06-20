import { UXDesigners } from '../../../../../../utils/Constant'
import { ArrowRightCircle } from 'react-feather'
import { H5, P } from '../../../../../../AbstractElements'
import { fullScreenUxList } from '../../../../../../Data/Ui-Kits/Modal/Modal'

const UXDesigner = () => {
  return (
    <>
      <div className="large-modal-header mt-4">
        <H5 className="f-w-600">{UXDesigners}</H5>
      </div>
      <div className="d-flex mt-2">
        <div className="flex-shrink-0">
          <ArrowRightCircle className="svg-modal"/>
        </div>
        <div className="flex-grow-1 ms-2">
          <P className="mb-0">User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations.</P>
        </div>
      </div>
      {fullScreenUxList.map((item, index) => (
        <div className="d-flex mt-2" key={index}>
          <div className="flex-shrink-0">
            <ArrowRightCircle className="svg-modal"/>
          </div>
          <div className="flex-grow-1 ms-2">
            <P className="mb-0">{item}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default UXDesigner