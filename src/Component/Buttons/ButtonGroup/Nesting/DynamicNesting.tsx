import { nestingDataList } from '../../../../Data/Buttons/ButtonGroup'
import { ButtonGroup } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'

const DynamicNesting = () => {
  return (
    <>
      {nestingDataList.map((item, index) => (
        <div className="m-b-30" key={index}>
          <ButtonGroup>
            <Btn color="primary" size={item}><i className="fa fa-bold"></i></Btn>
            <Btn color="secondary" size={item}><i className="fa fa fa-italic"></i></Btn>
            <Btn color="success" size={item}><i className="fa fa-file-image-o"></i></Btn>
            <Btn color="info" size={item}><i className="fa fa-paperclip"></i></Btn>
          </ButtonGroup>
        </div>
      ))}
    </>
  )
}

export default DynamicNesting