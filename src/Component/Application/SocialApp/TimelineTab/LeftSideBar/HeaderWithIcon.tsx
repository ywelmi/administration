import { CardHeader } from 'reactstrap'
import { Btn, H6 } from '../../../../../AbstractElements'
import { HeaderWithIconPropsTypes } from '../../../../../Types/Application/SocialApp/SocialApp'
import { ChevronDown, ChevronUp } from 'react-feather'

const HeaderWithIcon = ({ setIsOpen, isOpen, Heading }: HeaderWithIconPropsTypes) => {
  return (
    <CardHeader>
      <H6 className="mb-0">
        <Btn block className="btn-link text-start d-flex f-w-600 justify-content-between" onClick={() => setIsOpen(!isOpen)} color="transparent" >
          {Heading}
          {isOpen ? (
            <ChevronUp className="m-0" />
          ) : (
            <ChevronDown className="m-0" />
          )}
        </Btn>
      </H6>
    </CardHeader>
  )
}

export default HeaderWithIcon