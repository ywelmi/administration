import { CardBody } from 'reactstrap'
import { H5, H6, LI, UL } from '../../../../AbstractElements'
import { QuickAccess } from '../../../../utils/Constant'
import { quickAccessData } from '../../../../Data/Application/FileSideBar/FileSideBar'
import { DataType } from '../../../../Types/Application/FileSideBar/FileSideBar'
import Folders from './Folders'
import Files from './Files'

const FileContentBody = ({myFile}:DataType) => {
  return (
    <CardBody className="file-manager">
      <H5 className='mb-2'>{QuickAccess} </H5>
      <UL className="quick-file d-flex flex-row simple-list">
        {quickAccessData.map((data,index) => (
          <LI key={index}>
            <div className="quick-box">
              <i className={`fa fa-${data.icons} font-${data.color}`} />
            </div>
            <H6>{data.title}</H6>
          </LI>
        ))}
      </UL>
      <Folders />
      <Files myFiles={myFile}/>
    </CardBody>
  )
}

export default FileContentBody