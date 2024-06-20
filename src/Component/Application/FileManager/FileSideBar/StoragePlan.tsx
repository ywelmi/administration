import { Btn, H6, LI, Progressbar, UL } from '../../../../AbstractElements'
import { FaDatabase } from 'react-icons/fa'
import { Storage } from '../../../../utils/Constant'

const StoragePlan = () => {
  return (
    <UL>
      <LI>
        <Btn outline color="primary">
          <FaDatabase />
          {Storage}
        </Btn>
        <div className="m-t-15">
          <Progressbar color="primary" style={{ height: "8px" }} value={30} className="mb-3"/>
          <H6 className="f-w-500">{"25 GB of 100 GB used"}</H6>
        </div>
      </LI>
    </UL>
  )
}

export default StoragePlan