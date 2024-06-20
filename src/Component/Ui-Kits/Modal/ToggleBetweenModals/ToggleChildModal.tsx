import React from 'react'
import { ToggleModalType } from '../../../../Types/Ui-Kits/UiKitsTypes'
import { Btn, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { AlreadyLeaving, ConnectNewRegisterAccount, YesLogOut } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const ToggleChildModal:React.FC<ToggleModalType> = ({toggleAll} ) => {
  return (
    <div className="modal-toggle-wrapper">
      <UL className="modal-img simple-list">
        <LI className="text-center">
          <Image src={dynamicImage(`gif/logout.gif`)} alt="logout" />
        </LI>
      </UL>
      <H4 className="pt-3 text-center">{AlreadyLeaving}</H4>
      <P className="text-center">Are you sure want to logout this dashboard?</P>
      <span className="d-block text-center mb-4">Not a member?
        <Link className="ms-1" to="/dashboard/default">{ConnectNewRegisterAccount}</Link>
      </span>
      <Btn color="dark" className="d-flex m-auto" onClick={toggleAll}>{YesLogOut}</Btn>
    </div>
  )
}

export default ToggleChildModal