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

const FormParallax = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | any;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<any>({
    title: "",
    description: "",
  });
  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    description: false,
  });
  const { Post } = useAxiosPost("parallax/", {
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
  const { Patch } = useAxiosPatch(`parallax/${edithData?.id}/`, {
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
    Description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
  };

  const handleCreateGrasses = () => {
    const { title, description } = BodyGrassData;
    if (title !== "" && description !== "") {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      Post(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        description: description === "",
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
      formData.append("description", description);

      Patch(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        description: description === "",
      });
    }
  };

  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        title: edithData.title,
        description: edithData.description,
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
          Lista de Parallax
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

export default FormParallax;
