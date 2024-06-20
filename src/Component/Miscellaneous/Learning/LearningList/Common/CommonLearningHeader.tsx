import React from 'react'
import { CardHeader } from 'reactstrap'
import { Btn, H5 } from '../../../../../AbstractElements'
import { ChevronDown, ChevronUp } from 'react-feather'
import { CommonLearningHeaderProp } from '../../../../../Types/Miscellaneous/Learning/Learning'

const CommonLearningHeader:React.FC<CommonLearningHeaderProp> = ({heading,isOpen,setIsOpen}) => {
  return (
    <CardHeader className="card-no-border pb-0">
      <H5 className="mb-0">
        <Btn color="transparent" className="btn-link d-flex justify-content-between" onClick={() => setIsOpen(!isOpen)}>{heading}
        {isOpen ? <ChevronDown className="m-0" /> : <ChevronUp className="m-0" />}
        </Btn>
      </H5>
    </CardHeader>
  )
}

export default CommonLearningHeader