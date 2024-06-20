import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { BreadcrumbBonusUi, BreadcrumbHome, BreadcrumbHeading, Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const StaticColoredBreadcrumb = () => {
  return (
    <Breadcrumb className="breadcrumb-colored m-b-30 bg-info">
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>{BreadcrumbHome}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link className="fw-bold" to={Href}>{BreadcrumbBonusUi}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active className="fw-bold">{BreadcrumbHeading}</BreadcrumbItem>
    </Breadcrumb>
  )
}

export default StaticColoredBreadcrumb