import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivContainerFormCatalog,
  DivFormulary,
  DivImgCloud,
  DivImgFormulary,
  DivInputContainer,
  HavePicture,
  HR,
  ImgCloud,
  ImgFile,
  ImgIconArrow,
  InputDescription,
  InputImg,
  InputNormal,
  PObligatory,
  PText,
} from "../catalog/styledFormCatalog";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import { IEngineredOnlyList } from "./EngiList";
interface IEngineered {
  title: string;
  subtitle: string;
  description: string;
  icon: null | any;
}
const FormEng = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IEngineredOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;

  const token = useAppSelector(Token);
  const [file, setFile] = useState<any>(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<IEngineered>({
    title: "",
    subtitle: "",
    description: "",
    icon: null,
  });
  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    subtitle: false,
    description: false,
    icon: false,
  });
  const { Post } = useAxiosPost("grasses/", {
    completeInterceptor: {
      action: () => {
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        setDisabledButton(false);
      },
    },
  });
  const { Patch } = useAxiosPatch(`grasses/${edithData?.id}/`, {
    completeInterceptor: {
      action: () => {
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        setDisabledButton(false);
      },
    },
  });
  const handleFormulary = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    Subtitle: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitle: dat }),
    Description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
    Icon: (dat: any) => setBodyGrassData({ ...BodyGrassData, icon: dat }),
  };

  const handleCreateGrasses = () => {
    const { title, subtitle, description, icon } = BodyGrassData;
    if (
      title !== "" &&
      subtitle !== "" &&
      description !== "" &&
      icon !== null
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      formData.append("icon", file);

      Post(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
        icon: icon === null,
      });
    }
  };

  const handleEdithGrasses = () => {
    const { title, subtitle, description, icon } = BodyGrassData;
    if (
      title !== "" &&
      subtitle !== "" &&
      description !== "" &&
      icon !== null
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      if (file !== null) formData.append("icon", file);

      Patch(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
        icon: icon === null,
      });
    }
  };

  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        title: edithData.title,
        subtitle: edithData.subtitle,
        description: edithData.description,
        icon: edithData.icon,
      });
    }
  }, [edithData]);
  useEffect(() => {
    if (file !== null) {
      handleFormulary.Icon(URL.createObjectURL(file));
    }
  }, [file]);

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
          Lista de Engineered
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Title</PText>
          <InputNormal
            value={BodyGrassData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Title(e.target.value)
            }
            show={showObligatorio.title.toString()}
          />
          <PObligatory show={showObligatorio.title.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Subtitulo</PText>
          <InputNormal
            value={BodyGrassData.subtitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Subtitle(e.target.value)
            }
            show={showObligatorio.subtitle.toString()}
          />
          <PObligatory show={showObligatorio.subtitle.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Icono</PText>
          <DivImgFormulary show={showObligatorio.icon.toString()}>
            {BodyGrassData.icon !== null ? (
              <HavePicture>
                <ImgFile alt="file" src={BodyGrassData.icon} />
              </HavePicture>
            ) : (
              <DivImgCloud>
                <ImgCloud
                  alt="cloud"
                  src={require("../../../../assets/icons/nube.svg")}
                />
              </DivImgCloud>
            )}
            <InputImg
              type="file"
              onChange={(e: any) => setFile(e.target.files[0])}
            />
          </DivImgFormulary>
          <PObligatory show={showObligatorio.icon.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription
            value={BodyGrassData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.Description(e.target.value)
            }
            show={showObligatorio.description.toString()}
          />
          <PObligatory show={showObligatorio.description.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
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
            Aceptar
          </ButtonAceptarCancel>
        </DivButtons>
      </DivFormulary>
    </DivContainerFormCatalog>
  );
};

export default FormEng;
