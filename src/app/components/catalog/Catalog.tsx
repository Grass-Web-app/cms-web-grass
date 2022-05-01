import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosDelete from "../Hooks/useAxiosDelete";
import { Token } from "../ReduxSlices/CookiesSlice";
import { timems } from "../ToastFunctions/toast-functions";

import {
  DivIconOptionsContainer,
  DivImgImglist,
  DivOptions,
  DivTextContainer,
  ImgShowInList,
  ImgShowOptions,
  POption,
  PtitleUpper,
  SpanOption,
} from "./styledCatalog";

const Catalog = (props: {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  setcatalog: () => void;
  endpointErase: string;
  fnErase: () => void;
}) => {
  const { id, title, subtitle, icon, setcatalog, endpointErase, fnErase } =
    props;
  const token = useAppSelector(Token);
  const [showOprions, setShowOprions] = useState(false);
  const { Delete } = useAxiosDelete(endpointErase, {
    completeInterceptor: {
      action: () => {
        Success();
        fnErase();
      },
    },
    errorInterceptor: {
      action: () => {
        Error();
      },
    },
  });

  const handleEraseData = () => {
    Delete(token.access, id);
  };
  const Success = () =>
    toast.success(`Registro "${title}" con id #${id} borrado exitosamente`, {
      duration: timems,
      style: { background: "#d5eddb", color: "#376f43" },
    });
  const Error = () =>
    toast.error(
      `No se pudo borrar el registro "${title}" con id #${id}, contacta con soporte`,
      {
        duration: timems,
        style: { background: "#f7d7db", color: "#84373f" },
      }
    );
  return (
    <>
      <DivTextContainer>
        <PtitleUpper>#{id}</PtitleUpper>
      </DivTextContainer>
      <DivTextContainer>
        <PtitleUpper>{title}</PtitleUpper>
      </DivTextContainer>
      <DivImgImglist show={(icon !== null).toString()}>
        {icon !== null && <ImgShowInList alt="image" src={icon} />}
      </DivImgImglist>
      <DivTextContainer>
        <PtitleUpper>{subtitle}</PtitleUpper>
      </DivTextContainer>
      <DivTextContainer>
        <DivIconOptionsContainer onClick={() => setShowOprions(!showOprions)}>
          <ImgShowOptions
            alt="image"
            src={require("../../../../assets/image/options.png")}
          />
          <DivOptions show={showOprions.toString()}>
            <POption onClick={setcatalog}>
              Editar
              <SpanOption>
                <ImgShowOptions
                  alt="image"
                  src={require("../../../../assets/icons/editar.svg")}
                />
              </SpanOption>
            </POption>
            <POption onClick={handleEraseData}>
              Eliminar
              <SpanOption>
                <ImgShowOptions
                  alt="image"
                  src={require("../../../../assets/icons/trash.svg")}
                />
              </SpanOption>
            </POption>
          </DivOptions>
        </DivIconOptionsContainer>
      </DivTextContainer>
    </>
  );
};

export default Catalog;
