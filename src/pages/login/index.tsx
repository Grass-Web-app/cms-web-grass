import React, { useState } from "react";

import AxiosPostHook from "../../app/components/Hooks/AxiosPostHook";

import InputComponent from "../../app/components/login/InputComponent";
import {
  ButtonLogin,
  DivContainer,
  DivLogin,
  Plogin,
  PRegister,
} from "../../app/components/login/loginStyled";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { GetPost } = AxiosPostHook("users/login/", {
    completeInterceptor: {
      message: "Si se pudo obtener informacion prro",
      action: (data: any) => {
        console.log(data);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos anales",
    },
  });

  const handleButtonProbe = () => {
    const userDates = {
      email: email,
      password: password,
    };
    GetPost(userDates);
  };

  return (
    <DivContainer>
      <DivLogin>
        <Plogin>Inicia sesion en tu cuenta</Plogin>
        <InputComponent
          type="email"
          holder="Ingresa tu correo electronico"
          value={email}
          setValue={setEmail}
        />
        <InputComponent
          type="password"
          holder="Contraseña"
          value={password}
          setValue={setPassword}
        />
        <ButtonLogin onClick={handleButtonProbe}>Iniciar sesion</ButtonLogin>
        <PRegister>Registrar Usuario</PRegister>
      </DivLogin>
    </DivContainer>
  );
};

export default index;
