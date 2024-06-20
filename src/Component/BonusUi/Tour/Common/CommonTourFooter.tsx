import { Label, List, ListInlineItem } from 'reactstrap'
import { commonFooterData } from '../../../../Data/BonusUi/Tour/Tour'
import { Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const CommonTourFooter = () => {
  return (
    <div className="like-comment mt-4">
      <List type="inline">
        {commonFooterData.map(({ className, icon, text }, index) => (
          <ListInlineItem className={className} key={index}>
            <Label className="m-0" check>
                <Link to={Href}>
                  <i className={`fa fa-${icon}`}></i>
                </Link>{text}
            </Label>
          </ListInlineItem>
        ))}
      </List>
    </div>
  )
}

export default CommonTourFooter