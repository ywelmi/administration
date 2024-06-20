import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { Alerts, P } from '../../../../AbstractElements'
import { Href } from '../../../../utils/Constant'
import { darkThemeLists } from '../../../../Data/Ui-Kits/Alert/AlertData'

const DarkThemeRightSection = () => {
  return (
    <Col xl="6">
      <P className="mb-0">Warning Alert</P>
      <Alerts color="warning">
        <P>{`This is a `}
          <Link className="alert-link text-white" to={Href}>warning alert</Link> with an example link. Check it out.
        </P>
      </Alerts>
      {darkThemeLists.map(({ title, color, className }, index) => (
        <Fragment key={index}>
          <P className="mb-0">{title}</P>
          <Alerts color={color} className="dark">
            <P>This is a
              <Link className={`alert-link text-${className ? className : "light"} text-lowercase`} to={Href}>{title}</Link>
              with an example link. Check it out.
            </P>
          </Alerts>
        </Fragment>
      ))}
    </Col>
  )
}

export default DarkThemeRightSection