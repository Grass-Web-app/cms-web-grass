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

  const [Form, setForm] = useState({ email: "", password: "" });
  const [verify, setVerify] = useState(false);
  const [Dissabled, setDissabled] = useState(false);
  const { Post } = useAxiosPost("users/login/", {
    completeInterceptor: {
      action: (data: IDataLogin) => {
        dispatch(handleToken(data.data.data));
        push("/catalog");
      },
    },
    errorInterceptor: {
      message: "Verificar correo y contraseña",
      action: () => {
        setVerify(true);
      },
    },
  });
  const { Get } = useAxiosGet("users/my-profile/", {
    completeInterceptor: {
      action: () => {
        push("/catalog");
      },
    },
    errorInterceptor: {
      message: "Token caducado iniciar sesion de nuevo",
    },
  });

  //luis.aranda@dacodes.com.mx
  const handleButtonSingin = () => {
    const { email, password } = Form;
    if (email !== "" && password !== "") {
      const userDates = {
        email: email,
        password: password,
      };
      Post(userDates);
    } else {
      console.log("aqui toy");
    }
  };
  useEffect(() => {
    if (token.access !== "" && token.refresh !== "") {
      Get(token.access);
    }
  }, []);

  useEffect(() => {
    const { email, password } = Form;
    if (email !== "" && password !== "") {
      setDissabled(false);
    } else setDissabled(true);
  }, [Form]);

  return (
    <DivAllpage>
      <DivImgBg>
        <ImgGrass
          src={prefix + require("../../../assets/image/cespedBack.jpeg")}
        />
      </DivImgBg>
      <DivContainer>
        <DivLogin>
          <Plogin>Inicia sesion en tu cuenta Fustadesing</Plogin>
          <DivInputRelative>
            <InputComponent
              type="email"
              holder="Ingresa tu correo electronico"
              value={Form.email}
              setValue={(dat: string) => setForm({ ...Form, email: dat })}
            />
            <Pverifica show={verify.toString()}>*Verifica tu correo</Pverifica>
          </DivInputRelative>
          <DivInputRelative>
            <InputComponent
              type="password"
              holder="Contraseña"
              value={Form.password}
              setValue={(dat: string) => setForm({ ...Form, password: dat })}
            />
            <Pverifica show={verify.toString()}>
              *Verifica tu contraseña
            </Pverifica>
          </DivInputRelative>

          <ButtonLogin
            dissabled={Dissabled.toString()}
            disabled={Dissabled}
            onClick={handleButtonSingin}
          >
            Iniciar sesion
          </ButtonLogin>
          <PRegister>Registrar Usuario</PRegister>
        </DivLogin>
      </DivContainer>
    </DivAllpage>
  );
};

export default index;
