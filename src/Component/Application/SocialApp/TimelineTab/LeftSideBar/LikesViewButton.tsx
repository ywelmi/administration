import { Btn } from '../../../../../AbstractElements'
import { Likes, View } from '../../../../../utils/Constant'

const LikesViewButton = () => {
  return (
    <div className="social-btngroup d-flex">
      <Btn color="primary" className="text-center">{Likes}</Btn>&nbsp;
      <Btn color="light" className="text-center ms-2">{View}</Btn>
    </div>
  )
}

export default LikesViewButton