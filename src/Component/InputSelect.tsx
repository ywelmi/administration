import { ChangeEvent, RefObject, useRef } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

type TEvent = ChangeEvent & { target: { value: string } };
interface IInputSelect<T> {
  title?: string;
  data: (T & { [ki: string]: any })[];
  k: keyof T;
  v: keyof T;
  // handleChange: (v: string) => void;
  handleChange: (e: TEvent) => void;
  value: any;
  name: string;
}

const InputSelect = <T,>(
  { title, data, k, v, handleChange: onChange, value, ...rest }: IInputSelect<
    T
  >,
) => {
  const inputData = data.map((item) => ({
    k: item[k],
    v: item[v],
  }));
  const defaultValue = null ? value : "null";

  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputGroup>
      {title ? <InputGroupText>{title}</InputGroupText> : null}
      <Input
        minLength={24}
        innerRef={ref}
        type="select"
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        {...rest}
      >
        <option value={"null"} selected hidden></option>
        {inputData.map(({ k: k, v: v }) => (
          <option
            key={v}
            value={v}
          >
            {k}
          </option>
        ))}
      </Input>
      <div className="flex items-center p-2 border-gray-400 rounded-md">
        <i
          className="icon-close cursor-pointer"
          onClick={() => {
            // console.log({ ref: ref.current }, "clicked");
            if (ref.current) ref.current.value = "";
            const event = {
              target: { value: "" },
            } as TEvent;
            onChange(event);
          }}
        />
      </div>
    </InputGroup>
  );
};

export { InputSelect };
