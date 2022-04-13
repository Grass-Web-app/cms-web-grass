import React from "react";
import { DivContainerInput, InputLogin } from "./loginStyled";

const InputComponent = (props: {
  type?: string;
  holder?: string;
  value?: any;
  setValue?: (dat: any) => void;
}) => {
  const { type, holder, value, setValue } = props;
  return (
    <DivContainerInput>
      <InputLogin
        type={type}
        placeholder={holder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </DivContainerInput>
  );
};

export default InputComponent;
