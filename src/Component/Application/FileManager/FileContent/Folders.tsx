import { H5, H6, LI, P, UL } from '../../../../AbstractElements'
import { Folder } from '../../../../utils/Constant'
import { foldersData } from '../../../../Data/Application/FileSideBar/FileSideBar'

const Folders = () => {
  return (
    <>
      <H5 className="mt-4 mb-2">{Folder}</H5>
      <UL className="simple-list folder d-flex flex-row flex-wrap">
        {foldersData.map((data,index) => (
          <LI className="folder-box" key={index}>
            <div className="d-block">
              <i className={`f-44 fa fa-${data.icons} txt-warning`} />
              <i className="fa fa-ellipsis-v me-0 f-14 ellips" />
              <div className="mt-3">
                <H6>{data.title}</H6>
                <P>
                  {data.file}
                  <span className="pull-right">
                    <i className="fa fa-clock-o"> </i> {data.time}
                  </span>
                </P>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </>
  )
}

export default Folders