import React from 'react'
import { List, ListInlineItem } from 'reactstrap'
import { socialData } from '../../../../Data/BonusUi/Tour/Tour'
import { Link } from 'react-router-dom'
import { CommonTourSocialMediaProp } from '../../../../Types/BonusUi/BonusUiTypes'

const CommonTourSocialMedia:React.FC<CommonTourSocialMediaProp> = ({ time,className }) => {
  return (
    <div className={`social-media ${time ? "social-tour" : ""} ${className ? className : ""}`}>
      <List type="inline" className="align-items-center">
        {socialData.map(({ href, icon }, index) => (
          <ListInlineItem key={index}>
            <Link to={href} target="_blank">
              <i className={`fa fa-${icon}`}></i>
            </Link>
          </ListInlineItem>
        ))}
        {time && (
          <div className="float-sm-end">
            <small>{time}</small>
          </div>
        )}
      </List>
    </div>
  )
}

export default CommonTourSocialMedia