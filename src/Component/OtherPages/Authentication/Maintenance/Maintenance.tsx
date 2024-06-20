import { Container } from 'reactstrap'
import { H2, H4, LI, UL } from '../../../../AbstractElements'
import { BackToHomePage, MAINTENANCE } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const MaintenanceContainer = () => {
  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <UL className="maintenance-icons simple-list">
            <LI><i className="fa fa-cog" /></LI>
            <LI><i className="fa fa-cog" /></LI>
            <LI><i className="fa fa-cog" /></LI>
          </UL>
          <div className="maintenance-heading">
            <H2 className="headline">{MAINTENANCE}</H2>
          </div>
          <H4 className="sub-content">
            Our Site is Currently under maintenance We will be back Shortly
            <br /> Thank You For Patience
          </H4>
          <div>
            <Link className="btn btn-primary-gradien btn-lg text-light" to={`/dashboard/default`}>{BackToHomePage}</Link>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MaintenanceContainer