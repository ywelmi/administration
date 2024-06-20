import React from 'react'
import { StudentFormPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne';
import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks';
import { Form } from 'reactstrap';
import FinishForm from '../Common/FinishForm';
import { Btn } from '../../../../../AbstractElements';
import StudentTab1 from './StudentTab1';
import StudentTab2 from './StudentTab2';
import StudentTab3 from './StudentTab3';
import { Next, Previous } from '../../../../../utils/Constant';
import { handleStudentBackButton, handleStudentNextButton } from '../../../../../ReduxToolkit/Reducer/StudentWizardSlice';

const StudentForm:React.FC<StudentFormPropsType> = ({ handleImageLabelClick, imageUrl, getUserData, studentValidationForm, level, fileInputRef }) => {
    const dispatch = useAppDispatch();
  
    return (
      <Form onSubmit={(e) => e.preventDefault()} className="form-wizard">
        <div className={`tab ${level === 1 ? "d-block" : "d-none"}`}>
          <StudentTab1 studentValidationForm={studentValidationForm}  getUserData={getUserData}/>
        </div>
        <div className={`tab ${level === 2 ? "d-block" : "d-none"}`}>
          <StudentTab2 studentValidationForm={studentValidationForm} getUserData={getUserData} fileInputRef={fileInputRef} handleImageLabelClick={handleImageLabelClick} imageUrl={imageUrl} level={level} />
        </div>
        <div className={`tab ${level === 3 ? "d-block" : "d-none"}`}>
          <StudentTab3 studentValidationForm={studentValidationForm} getUserData={getUserData} />
        </div>
        {level === 4 && <FinishForm />}
        <div>
          <div className="text-end pt-3">
             {level > 1 && ( 
            <Btn color="secondary" onClick={() => dispatch(handleStudentBackButton())}>{Previous}</Btn>
             )} 
            <Btn color="primary" className={`ms-1 ${level === 4 ? "disabled" : ""}`} onClick={() => dispatch(handleStudentNextButton())}>{Next}</Btn>
          </div>
        </div>
      </Form>
    );
  };

export default StudentForm