import { Col } from 'reactstrap'
import { Badges, H5, Image, P, Progressbar } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { CommonProjectInterFace } from '../../../../../Types/Application/ProjectList/ProjectList'
import { Done } from '../../../../../utils/Constant'
import ProjectDetails from './ProjectDetails'
import ProjectCustomers from './ProjectCustomers'

const ProjectCommon = ({ item }: CommonProjectInterFace) => {
  return (
    <Col xxl="4" md="6" className='box-col-6'>
      <div className={`project-box b-light1-${item.badge === 'Done' ? 'success' : 'primary'}`}>
        <Badges color={`${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.badge}</Badges>
        <H5 className='f-w-500'>{item.title}</H5>
        <div className='d-flex'> 
          <Image className='img-20 me-1 rounded-circle' src={dynamicImage(`user/${item.image}`)} alt='images' />
          <div className='flex-grow-1'>
            <P>{item.sites}</P>
          </div>
        </div>
        <P>{item.description}</P>
        <ProjectDetails item={item}/>
        <ProjectCustomers item={item}/>
        <div className='project-status mt-4'>
          <div className='d-flex mb-0'>
            <P>{item.progress}% </P>
            <div className='text-end flex-grow-1'>
              <span>{Done}</span>
            </div>
          </div>
          <Progressbar animated={item.progress !== 100 ? true : false} color={item.progress === 100 ? 'success' : 'primary'} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default ProjectCommon