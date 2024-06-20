import { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import SideBarList from './SideBarList'
import { Finish, Href, Next, Previous } from '../../../../utils/Constant'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import SignUpAccount from './SignUpAccount'
import EmailPassword from './EmailPassword'
import AddMessage from './AddMessage'
import FormDone from './FormDone'

const RegisterWizardContainer = () => {
    const [formValue, setFormValue] = useState({firstName: "",lastName: "",contactNumber: "",email: "",password: "",confirmPassword: "",birthDate: "",age: "",passPort: "",country: "",state: "",city: "",});
    const [showFinish, setShowFinish] = useState(false);
    const handleBackButton = () => {
      setShowFinish(false);
      if (level === 2) {setLevel(level - 1);}
      if (level === 3) {setLevel(level - 1);}
      if (level === 4) {setLevel(level - 1);}
    };
    const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
      let name = event.target.name;
      let value = event.target.value;
      setFormValue({ ...formValue, [name]: value });
    };
    const handleNextButton = () => {
      const {firstName,lastName,contactNumber,email,password,confirmPassword,birthDate,age,passPort,country,state,city} = formValue;
      if (firstName !== "" &&lastName !== "" &&contactNumber !== "" &&level === 1) {
        setLevel(level + 1);
      } else if (email !== "" &&password !== "" &&confirmPassword !== "" &&level === 2) {
        setLevel(level + 1);
      } else if (birthDate !== "" &&age !== "" &&passPort !== "" &&level === 3) {
        setLevel(level + 1);
      } else if (country !== "" && state !== "" && city !== "" && level === 4) {
        setShowFinish(true);
      } else {
        toast.error("please fill all field after press next button");
      }
    };
  
    const [level, setLevel] = useState(1);
  return (
    <Container fluid>
      <Row>
        <Col xs="12" className="p-0">
          <div>
            <div className="theme-form">
              <div className="wizard-4">
                <SideBarList level={level} />
                <div className="step-container login-card">
                  {level === 1 && (<SignUpAccount formValue={formValue} getUserData={getUserData}/>)}
                  {level === 2 && (<EmailPassword formValue={formValue} getUserData={getUserData}/>)}
                  {level === 3 && (<AddMessage formValue={formValue} getUserData={getUserData}/>)}
                  {level === 4 && (<FormDone formValue={formValue} getUserData={getUserData} />)}
                </div>
                <div className="action-bar">
                  <div className="loader">{'Loading'}</div>
                  {level === 4 && (<Link to={Href} className={`btn btn-primary`} onClick={() =>toast.success("form submitted successfully")}>{Finish}</Link>)}
                  {level !== 5 && (<Link to={Href} onClick={handleNextButton} className={`btn btn-primary ${showFinish ? "buttonDisabled" : ""}`}>{Next}</Link>)}
                  {level > 1 && (<Link to={Href} className={`btn btn-primary `} onClick={handleBackButton}>{Previous}</Link>)}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterWizardContainer