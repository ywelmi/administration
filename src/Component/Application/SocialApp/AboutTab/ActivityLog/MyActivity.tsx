import { H6, P } from '../../../../../AbstractElements'
import { activityLogData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { AboutPropsType } from '../../../../../Types/Application/SocialApp/SocialApp'

const MyActivity = ({ Heading }: AboutPropsType) => {
  return (
    <div className="my-activity">
      <H6 className="f-w-600 mb-3">{Heading}</H6>
      {activityLogData.map((item) => (
        <P key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </P>
      ))}
    </div>
  )
}

export default MyActivity