import { ChangeEvent } from 'react';
import { Form, Input } from 'reactstrap'
import { SearchBarPropsType } from '../../../../Types/Application/FileSideBar/FileSideBar';
import { SearchPlaceholder } from '../../../../utils/Constant';

const SearchBar = ({setSearchTerm,searchTerm}:SearchBarPropsType) => {
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
    <Form className="form-inline">
      <div className="d-flex mb-0">
        <i className="fa fa-search"></i>
        <Input
          className="form-control-plaintext"
          type="text"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          placeholder={SearchPlaceholder}
        />
      </div>
    </Form>
  )
}

export default SearchBar