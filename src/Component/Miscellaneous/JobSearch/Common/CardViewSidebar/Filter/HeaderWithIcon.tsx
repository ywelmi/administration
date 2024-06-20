import { CardHeader } from 'reactstrap'
import { Btn, H2 } from '../../../../../../AbstractElements'
import { ChevronDown, ChevronUp } from 'react-feather'
import { HeaderWithIconPropsTypes } from '../../../../../../Types/Miscellaneous/JobSearch/JobSearch'

const HeaderWithIcon:React.FC<HeaderWithIconPropsTypes> = ({ setIsOpen, isOpen, heading}) => {
  return (
    <CardHeader id="headingOne" className="p-0">
      <H2 className="mb-0">
        <Btn block className="w-100 btn-link text-start d-flex justify-content-between text-decoration-none" onClick={() => setIsOpen(!isOpen)} color="transperant">
          {heading}
          {isOpen ? <ChevronUp className="m-0" /> : <ChevronDown className="m-0" />}
        </Btn>
      </H2>
    </CardHeader>
  )
}

export default HeaderWithIcon