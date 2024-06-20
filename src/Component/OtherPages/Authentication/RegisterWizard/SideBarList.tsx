import { H4, H5, Image, LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../Service'
import CommonLogo from '../Common/CommonLogo'
import { registerHorizontalData } from '../../../../Data/OtherPage/OtherPage'
import { PropsType } from '../../../../Types/OtherPages/OtherPages'

const SideBarList = ({ level }: PropsType) => {
  return (
    <UL className="anchor simple-list">
      <LI><CommonLogo /></LI>
      {registerHorizontalData.map((data, index) => (
        <LI key={index}>
          <Link to={`#form-${index}`} className={`${level === index + 1? "selected": level > index + 1? "done": "disabled"}`} >
            <H4>{index + 1}</H4>
            <H5>
              {data.tittle}
              {data.tittle === "Done" ? (<i className="fa fa-thumbs-o-up" />) : (" ")}
            </H5>
            <small>{data.detail}</small>
          </Link>
        </LI>
      ))}
      <LI>
        <Image src={dynamicImage("login/icon.png")} alt="loginpage" className='wizard-img'/>
      </LI>
    </UL>
  )
}

export default SideBarList