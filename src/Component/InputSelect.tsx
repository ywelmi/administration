import { ChangeEvent } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

interface IInputSelect<T> {
  title: string;
  data: (T & { [ki: string]: any })[];
  k: keyof T;
  v: keyof T;
  // handleChange: (v: string) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  value: any;
  name: string;
}

const InputSelect = <T,>(
  { title, data, k, v, handleChange: onChange, ...rest }: IInputSelect<T>,
) => {
  const inputData = data.map((item) => ({
    k: item[k],
    v: item[v],
  }));
  return (
    <InputGroup>
      <InputGroupText>{title}</InputGroupText>
      <Input
        type="select"
        onChange={onChange}
        {...rest}
      >
        {inputData.map(({ k: k, v: v }) => (
          <option
            key={k}
            value={v}
          >
            {k}
          </option>
        ))}
      </Input>
    </InputGroup>
  );
};

export { InputSelect };
