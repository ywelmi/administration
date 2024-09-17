import Multiselect from "multiselect-react-dropdown";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

import "./style.css";

type TEvent = ChangeEvent & { target: { value: string } };
interface IInputSelect<T> {
  title?: string;
  data: (T & { [ki: string]: any })[];
  k: keyof T;
  v: keyof T;
  handleChange: (e: TEvent) => void;
  value?: any;
  name: string;
  disabled?: boolean;
}

interface IInputSelectConfirm<T> extends IInputSelect<T> {
  placeHolder: string;
}

const InputSelect = <T,>({
  title,
  data,
  k,
  v,
  handleChange: onChange,
  value,
  disabled,
  ...rest
}: IInputSelect<T>) => {
  const inputData = data.map((item) => ({
    k: item[k],
    v: item[v],
  }));
  const defaultValue = value ? value : "null";

  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputGroup className="relative">
      {title ? (
        <InputGroupText>
          <strong>{title}</strong>
        </InputGroupText>
      ) : null}
      <Input
        disabled={disabled}
        minLength={24}
        innerRef={ref}
        type="select"
        onChange={onChange}
        // defaultValue={defaultValue}
        // value={defaultValue}
        defaultValue={defaultValue}
        value={value ? value : undefined}
        {...rest}
      >
        <option value={"null"} selected hidden></option>
        {inputData.map(({ k: k, v: v }, i) => (
          <option key={`${v}-${i}`} value={v}>
            {k}
          </option>
        ))}
      </Input>
      <div
        className="absolute right-8 flex items-center cursor-pointer z-0 text-slate-800 top-[50%] translate-y-[-50%]"
        onClick={() => {
          if (ref.current) ref.current.value = "";
          const event = {
            target: { value: "" },
          } as TEvent;
          onChange(event);
        }}
      >
        <div className="rounded-[50%] p-1">
          <i className="icon-close" />
        </div>
      </div>
    </InputGroup>
  );
};

const InputSelectConfirm = <T,>({
  placeHolder,
  handleChange,
  ...rest
}: IInputSelectConfirm<T>) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState(placeHolder);
  useEffect(() => {
    setDefaultValue(placeHolder);
  }, [placeHolder]);

  const [cacheEvent, setCacheEvent] = useState<TEvent>();

  const confirm = () => {
    if (cacheEvent) {
      handleChange(cacheEvent);
    }
    setEditing(false);
  };

  const reset = () => {
    setEditing(false);
  };

  const changeMiddleware = (e: TEvent) => {
    setCacheEvent(e);
  };

  return (
    <div className="input-select-confirm">
      {editing ? (
        <InputSelect {...rest} handleChange={changeMiddleware} />
      ) : (
        <div className="default-value">{defaultValue}</div>
      )}

      {!editing ? (
        <div
          className="input-icon"
          onClick={() => setEditing(true)}
          style={{ color: "greenyellow" }}
        >
          <i className="icon-pencil-alt" />
        </div>
      ) : null}
      {editing ? (
        <>
          <div
            className="input-icon"
            onClick={confirm}
            style={{ color: "blueviolet" }}
          >
            <i className="icon-check-box" />
          </div>
          <div
            className="input-icon"
            onClick={reset}
            style={{ color: "salmon" }}
          >
            <i className="icon-reload" />
          </div>
        </>
      ) : null}
    </div>
  );
};

interface IInputMultipleSelect<T> {
  title?: string;
  data: (T & { [ki: string]: any })[];
  selectedData?: (T & { [ki: string]: any })[];
  onSelect: (
    a: (T & { [ki: string]: any })[],
    s: T & { [ki: string]: any }
  ) => void;
  onRemove: (
    a: (T & { [ki: string]: any })[],
    s: T & { [ki: string]: any }
  ) => void;
  k: keyof T;
  v: keyof T;
  name: string;
}

const InputMultipleSelect = <T,>({
  title,
  data,
  selectedData = [],
  k,
  v,
  onSelect,
  onRemove,
}: IInputMultipleSelect<T>) => {
  const inputData = data.map((item) => ({
    name: item[k],
    id: item[v],
  }));
  return (
    <InputGroup className="relative">
      {title ? (
        <InputGroupText>
          <strong>{title}</strong>
        </InputGroupText>
      ) : null}
      <div className="form-control">
        <Multiselect
          placeholder="Nhấn chọn..."
          options={inputData} // Options to display in the dropdown
          selectedValues={selectedData} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          emptyRecordMsg="Không còn dữ liệu"
          showCheckbox
        />
      </div>
    </InputGroup>
  );
};

export { InputMultipleSelect, InputSelect, InputSelectConfirm };
