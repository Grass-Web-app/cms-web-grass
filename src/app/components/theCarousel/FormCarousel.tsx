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
import { IDataCarousels } from "./CarouselList";
interface ICarousel {
  title: string;
  description: string;
  image: null | any;
}
const FormCarousel = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: IDataCarousels;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [file, setFile] = useState<null | any>(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<ICarousel>({
    title: "",
    description: "",
    image: null,
  });
  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    description: false,
    image: false,
  });
  const handleFormulary = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    Description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
    Icon: (dat: any) => setBodyGrassData({ ...BodyGrassData, image: dat }),
  };

  const { Post } = useAxiosPost("carousels/", {
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
  const { Patch } = useAxiosPatch(`carousels/${edithData?.id}/`, {
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
  const handleCreateGrasses = () => {
    const { title, description, image } = BodyGrassData;
    if (title !== "" && description !== "" && image !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", file);

      Post(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        description: description === "",
        image: image === null,
      });
    }
  };
  const handleEdithGrasses = () => {
    const { title, description, image } = BodyGrassData;
    if (title !== "" && description !== "" && image !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (file !== null) formData.append("image", file);

      Patch(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        description: description === "",
        image: image === null,
      });
    }
  };
  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        title: edithData.title,
        description: edithData.description,
        image: edithData.image,
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
        <ButtonBackArrow
          disabled={DisabledButton}
          onClick={() => addNew(!stateNew)}
        >
          <ImgIconArrow
            alt="arrow"
            src={require("../../../../assets/icons/leftArrow.svg")}
          />
          Lista de Carousel
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
        <DivInputContainer>
          <PText>Imagen</PText>
          <DivImgFormulary show={showObligatorio.image.toString()}>
            {BodyGrassData.image !== null ? (
              <HavePicture>
                <ImgFile alt="file" src={BodyGrassData.image} />
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
          <PObligatory show={showObligatorio.image.toString()}>
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

export default FormCarousel;
