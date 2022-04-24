import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useAxiosPost from "../../app/components/Hooks/useAxiosPost";
import useAxiosGet from "../../app/components/Hooks/useAxiosGet";
import InputComponent from "../../app/components/login/InputComponent";
import {
  ButtonLogin,
  DivAllpage,
  DivContainer,
  DivImgBg,
  DivInputRelative,
  DivLogin,
  ImgGrass,
  Plogin,
  PRegister,
  Pverifica,
} from "../../app/components/login/loginStyled";
import {
  handleToken,
  Token,
} from "../../app/components/ReduxSlices/CookiesSlice";
import { useAppDispatch, useAppSelector } from "../../app/Reduxhooks";
import { prefix } from "../_app";

interface IDataLogin {
  data: {
    data: { refresh: string; access: string };
    code: number;
  };
  status: number;
  statusText: string;
}

const index = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(Token);
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(false);
  const { Post } = useAxiosPost("users/login/", {
    completeInterceptor: {
      action: (data: IDataLogin) => {
        dispatch(handleToken(data.data.data));
        push("/dashboard");
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos del login",
      action: () => {
        setVerify(true);
      },
    },
  });
  const { Get } = useAxiosGet("users/my-profile/", {
    completeInterceptor: {
      action: () => {
        push("/dashboard");
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });

  //luis.aranda@dacodes.com.mx
  const handleButtonSingin = () => {
    if (email !== "" && password !== "") {
      const userDates = {
        email: email,
        password: password,
      };
      Post(userDates);
    } else {
    }
  };
  useEffect(() => {
    if (token.access !== "" && token.refresh !== "") {
      Get(token.access);
    }
  }, []);

  return (
    <DivAllpage>
      <DivImgBg>
        <ImgGrass
          src={prefix + require("../../../assets/image/cespedBack.jpeg")}
        />
      </DivImgBg>
      <DivContainer>
        <DivLogin>
          <Plogin>Inicia sesion en tu cuenta</Plogin>
          <DivInputRelative>
            <InputComponent
              type="email"
              holder="Ingresa tu correo electronico"
              value={email}
              setValue={setEmail}
            />
            <Pverifica show={verify.toString()}>*Verifica tu correo</Pverifica>
          </DivInputRelative>
          <DivInputRelative>
            <InputComponent
              type="password"
              holder="Contraseña"
              value={password}
              setValue={setPassword}
            />
            <Pverifica show={verify.toString()}>
              *Verifica tu contraseña
            </Pverifica>
          </DivInputRelative>
          <ButtonLogin onClick={handleButtonSingin}>Iniciar sesion</ButtonLogin>
          <PRegister>Registrar Usuario</PRegister>
        </DivLogin>
      </DivContainer>
    </DivAllpage>
  );
};

export default index;
