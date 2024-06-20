import { Fragment } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { coloredBreadcrumbDataList } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'

const DynamicColoredBreadcrumb = () => {
  return (
    <>
      {coloredBreadcrumbDataList.map(({ className, span }, index) => (
        <Breadcrumb className={`breadcrumb-colored mb-0 ${className}`} key={index}>
          {span.map(({ title, activeTitle }, index) => (
            <Fragment key={index}>
              {title && (
                <BreadcrumbItem>
                  <Link className="fw-bold" to={Href}>{title}</Link>
                </BreadcrumbItem>
              )}
              {activeTitle && <BreadcrumbItem active className="fw-bold bg-transparent">{activeTitle}</BreadcrumbItem>}
            </Fragment>
          ))}
        </Breadcrumb>
      ))}
    </>
  )
}

export default DynamicColoredBreadcrumb