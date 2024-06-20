import { Badges, Btn } from '../../../../AbstractElements'
import { badgeButtonList } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'

const DynamicBadgesAsPartButtons = () => {
  return (
    <>
    {badgeButtonList.map(({ className, title, icon }, index) => (
      <Btn color={className} className={`d-flex align-items-center ${className === "warning" ? "txt-dark" : ""}`} key={index}>
        {title}
        <Badges color="light" className="rounded-circle btn-p-space text-dark ms-2">{icon}</Badges>
      </Btn>
    ))}
  </>
  )
}

export default DynamicBadgesAsPartButtons