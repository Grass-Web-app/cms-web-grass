import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivCheck,
  DivContainerFormCatalog,
  DivFormulary,
  DivInputContainer,
  HR,
  ImgIconArrow,
  InputCheck,
  InputNormal,
  PObligatory,
  PText,
} from "../catalog/styledFormCatalog";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import {
  ErrorCreateMessageToast,
  ErrorEdithMessageToast,
  SuccessCreateMessageToast,
  SuccessEdithMessageToast,
} from "../ToastFunctions/toast-functions";
import { IFooterOnlyList } from "./FooterList";

const FormFooter = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IFooterOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;

  const token = useAppSelector(Token);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<IFooterOnlyList>({
    name: "",
    address: "",
    additional: "",
    cell_phone: "",
    local_phone: "",
    have_facebook: false,
    have_twitter: false,
    have_pinterest: false,
    have_youtube: false,
    have_instagram: false,
    have_linkedIn: false,
    facebook: "",
    twitter: "",
    pinterest: "",
    youtube: "",
    instagram: "",
    linkedIn: "",
    id: 0,
  });
  const [showObligatorio, setShowObligatorio] = useState({
    Name: false,
    Direction: false,
    aditionalDirection: false,
    cellphone: false,
    phone: false,
  });
  const { Post } = useAxiosPost("footer/", {
    completeInterceptor: {
      action: () => {
        SuccessCreateMessageToast(BodyGrassData.name);
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        ErrorCreateMessageToast(BodyGrassData.name);
        setDisabledButton(false);
      },
    },
  });
  const { Patch } = useAxiosPatch(`footer/${edithData?.id}/`, {
    completeInterceptor: {
      action: () => {
        SuccessEdithMessageToast(BodyGrassData.name);
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        setDisabledButton(false);
        ErrorEdithMessageToast(BodyGrassData.name);
      },
    },
  });
  const handleFormulary = {
    name: (dat: string) => setBodyGrassData({ ...BodyGrassData, name: dat }),
    direction: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, address: dat }),
    aditionalDir: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, additional: dat }),
    cellphone: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, cell_phone: dat }),
    localphone: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, local_phone: dat }),

    haveFace: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_facebook: !BodyGrassData.have_facebook,
      }),
    haveInsta: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_instagram: !BodyGrassData.have_instagram,
      }),
    havePinte: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_pinterest: !BodyGrassData.have_pinterest,
      }),
    haveTwit: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_twitter: !BodyGrassData.have_twitter,
      }),
    haveYou: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_youtube: !BodyGrassData.have_youtube,
      }),
    haveLink: () =>
      setBodyGrassData({
        ...BodyGrassData,
        have_linkedIn: !BodyGrassData.have_linkedIn,
      }),

    Facebook: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, facebook: dat }),
    Instagram: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, instagram: dat }),
    Pinterest: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, pinterest: dat }),
    Twit: (dat: string) => setBodyGrassData({ ...BodyGrassData, twitter: dat }),
    Youtube: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, youtube: dat }),
    Linked: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, linkedIn: dat }),
  };
  const getSocialMediaValue = (have: boolean, socialMedia: string) => {
    return have
      ? socialMedia.length !== 0
        ? socialMedia
        : "-----"
      : socialMedia.length !== 0
      ? socialMedia
      : "-----";
  };
  const handleCreateGrasses = () => {
    const {
      name: Name,
      address: Direction,
      additional: aditionalDirection,
      cell_phone: cellphone,
      local_phone: phone,
      have_facebook: haveFace,
      have_instagram: haveInstagram,
      have_pinterest: havePinterest,
      have_twitter: haveTwiter,
      have_youtube: haveYoutube,
      have_linkedIn: haveLinked,
      facebook: Facebook,
      instagram: Instagram,
      pinterest: Pinterest,
      twitter: Twiter,
      youtube: Youtube,
      linkedIn: Linked,
    } = BodyGrassData;
    if (
      Name !== "" &&
      Direction !== "" &&
      aditionalDirection !== "" &&
      cellphone !== "" &&
      phone !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("name", Name);
      formData.append("address", Direction);
      formData.append("additional", aditionalDirection);
      formData.append("local_phone", `${phone}`);
      formData.append("cell_phone", `${cellphone}`);
      formData.append("have_facebook", `${haveFace}`);
      formData.append("have_pinterest", `${havePinterest}`);
      formData.append("have_twitter", `${haveTwiter}`);
      formData.append("have_youtube", `${haveYoutube}`);
      formData.append("have_instagram", `${haveInstagram}`);
      formData.append("have_linkedIn", `${haveLinked}`);

      formData.append("facebook", getSocialMediaValue(haveFace, Facebook));
      formData.append(
        "pinterest",
        getSocialMediaValue(havePinterest, Pinterest)
      );
      formData.append("twitter", getSocialMediaValue(haveTwiter, Twiter));
      formData.append("youtube", getSocialMediaValue(haveYoutube, Youtube));
      formData.append(
        "instagram",
        getSocialMediaValue(haveInstagram, Instagram)
      );
      formData.append("linkedIn", getSocialMediaValue(haveLinked, Linked));

      Post(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        Name: Name !== "",
        Direction: Direction !== "",
        aditionalDirection: aditionalDirection !== "",
        cellphone: cellphone !== "",
        phone: phone !== "",
      });
    }
  };

  const handleEdithGrasses = () => {
    const {
      name: Name,
      address: Direction,
      additional: aditionalDirection,
      cell_phone: cellphone,
      local_phone: phone,
      have_facebook: haveFace,
      have_instagram: haveInstagram,
      have_pinterest: havePinterest,
      have_twitter: haveTwiter,
      have_youtube: haveYoutube,
      have_linkedIn: haveLinked,
      facebook: Facebook,
      instagram: Instagram,
      pinterest: Pinterest,
      twitter: Twiter,
      youtube: Youtube,
      linkedIn: Linked,
      id,
    } = BodyGrassData;
    if (
      Name !== "" &&
      Direction !== "" &&
      aditionalDirection !== "" &&
      cellphone !== "" &&
      phone !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("id", `${id}`);
      formData.append("name", Name);
      formData.append("address", Direction);
      formData.append("additional", aditionalDirection);
      formData.append("local_phone", `${phone}`);
      formData.append("cell_phone", `${cellphone}`);
      formData.append("have_facebook", `${haveFace}`);
      formData.append("have_pinterest", `${havePinterest}`);
      formData.append("have_twitter", `${haveTwiter}`);
      formData.append("have_youtube", `${haveYoutube}`);
      formData.append("have_instagram", `${haveInstagram}`);
      formData.append("have_linkedIn", `${haveLinked}`);

      formData.append("facebook", getSocialMediaValue(haveFace, Facebook));
      formData.append(
        "pinterest",
        getSocialMediaValue(havePinterest, Pinterest)
      );
      formData.append("twitter", getSocialMediaValue(haveTwiter, Twiter));
      formData.append("youtube", getSocialMediaValue(haveYoutube, Youtube));
      formData.append(
        "instagram",
        getSocialMediaValue(haveInstagram, Instagram)
      );
      formData.append("linkedIn", getSocialMediaValue(haveLinked, Linked));

      Patch(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        Name: Name !== "",
        Direction: Direction !== "",
        aditionalDirection: aditionalDirection !== "",
        cellphone: cellphone !== "",
        phone: phone !== "",
      });
    }
  };

  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        name: edithData.name,
        address: edithData.address,
        additional: edithData.additional,
        cell_phone: edithData.cell_phone,
        local_phone: edithData.local_phone,
        have_facebook: edithData.have_facebook,
        have_twitter: edithData.have_twitter,
        have_pinterest: edithData.have_pinterest,
        have_youtube: edithData.have_youtube,
        have_instagram: edithData.have_instagram,
        have_linkedIn: edithData.have_linkedIn,
        facebook: edithData.facebook,
        twitter: edithData.twitter,
        pinterest: edithData.pinterest,
        youtube: edithData.youtube,
        instagram: edithData.instagram,
        linkedIn: edithData.linkedIn,
        id: edithData.id,
      });
    }
  }, [edithData]);

  const handleEdithorCreate = () => {
    if (edithData !== null) handleEdithGrasses();
    else handleCreateGrasses();
  };
  return (
    <DivContainerFormCatalog>
      <DivFormulary>
        <ButtonBackArrow onClick={() => addNew(!stateNew)}>
          <ImgIconArrow
            alt="arrow"
            src={require("../../../../assets/icons/leftArrow.svg")}
          />
          Lista de Footer
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Nombre de la empresa</PText>
          <InputNormal
            value={BodyGrassData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.name(e.target.value)
            }
            show={showObligatorio.Name.toString()}
          />
          <PObligatory show={showObligatorio.Name.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Direccion</PText>
          <InputNormal
            value={BodyGrassData.address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.direction(e.target.value)
            }
            show={showObligatorio.Direction.toString()}
          />
          <PObligatory show={showObligatorio.Direction.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Direccion adicional</PText>
          <InputNormal
            value={BodyGrassData.additional}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.aditionalDir(e.target.value)
            }
            show={showObligatorio.aditionalDirection.toString()}
          />
          <PObligatory show={showObligatorio.aditionalDirection.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Celular</PText>
          <InputNormal
            value={BodyGrassData.cell_phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.cellphone(e.target.value)
            }
            show={showObligatorio.cellphone.toString()}
          />
          <PObligatory show={showObligatorio.cellphone.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Telefono fijo</PText>
          <InputNormal
            value={BodyGrassData.local_phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.localphone(e.target.value)
            }
            show={showObligatorio.phone.toString()}
          />
          <PObligatory show={showObligatorio.phone.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_facebook}
              onChange={handleFormulary.haveFace}
              type="checkbox"
            />
            <PText>Direccion de Facebook</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.facebook}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Facebook(e.target.value)
            }
            disabled={!BodyGrassData.have_facebook}
          />
        </DivInputContainer>

        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_twitter}
              onChange={handleFormulary.haveTwit}
              type="checkbox"
            />
            <PText>Direccion de Twitter</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.twitter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Twit(e.target.value)
            }
            disabled={!BodyGrassData.have_twitter}
          />
        </DivInputContainer>

        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_pinterest}
              onChange={handleFormulary.havePinte}
              type="checkbox"
            />
            <PText>Direccion de Pinterest</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.pinterest}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Pinterest(e.target.value)
            }
            disabled={!BodyGrassData.have_pinterest}
          />
        </DivInputContainer>

        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_youtube}
              onChange={handleFormulary.haveYou}
              type="checkbox"
            />
            <PText>Direccion de Youtube</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.youtube}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Youtube(e.target.value)
            }
            disabled={!BodyGrassData.have_youtube}
          />
        </DivInputContainer>

        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_instagram}
              onChange={handleFormulary.haveInsta}
              type="checkbox"
            />
            <PText>Direccion de Instagram</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.instagram}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Instagram(e.target.value)
            }
            disabled={!BodyGrassData.have_instagram}
          />
        </DivInputContainer>
        <DivInputContainer>
          <DivCheck>
            <InputCheck
              checked={BodyGrassData.have_linkedIn}
              onChange={handleFormulary.haveLink}
              type="checkbox"
            />
            <PText>Direccion de LinkedIn</PText>
          </DivCheck>
          <InputNormal
            value={BodyGrassData.linkedIn}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Linked(e.target.value)
            }
            disabled={!BodyGrassData.have_linkedIn}
          />
        </DivInputContainer>
        <DivButtons>
          <ButtonAceptarCancel
            disabled={DisabledButton}
            onClick={() => addNew(!stateNew)}
          >
            Cancelar
          </ButtonAceptarCancel>
          <ButtonAceptarCancel
            disabled={DisabledButton}
            onClick={handleEdithorCreate}
          >
            {edithData !== null ? "Editar" : "Aceptar"}
          </ButtonAceptarCancel>
        </DivButtons>
      </DivFormulary>
    </DivContainerFormCatalog>
  );
};

export default FormFooter;
