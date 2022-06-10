import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivContainerFormCatalog,
  DivFormulary,
  DivInputContainer,
  HR,
  ImgIconArrow,
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
import { ITitlesOnlyList } from "./TitlesList";

export interface IBodyTitles {
  titleVideo: string;
  subtitleVideo: string;
  titleCatalogue: string;
  subtitleCatalogue: string;
  titleEngeenered: string;
  titleCarousel: string;
  subtitleCarousel: string;
}

const FormTitles = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | ITitlesOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;

  const token = useAppSelector(Token);

  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<IBodyTitles>({
    titleVideo: "",
    subtitleVideo: "",
    titleCatalogue: "",
    subtitleCatalogue: "",
    titleEngeenered: "",
    titleCarousel: "",
    subtitleCarousel: "",
  });
  const [showObligatorio, setShowObligatorio] = useState({
    titleVideo: false,
    subtitleVideo: false,
    titleCatalogue: false,
    subtitleCatalogue: false,
    titleEngeenered: false,
    titleCarousel: false,
    subtitleCarousel: false,
  });
  const { Post } = useAxiosPost("main/", {
    completeInterceptor: {
      action: () => {
        SuccessCreateMessageToast(BodyGrassData.titleVideo);
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        ErrorCreateMessageToast(BodyGrassData.titleVideo);
        setDisabledButton(false);
      },
    },
  });
  const { Patch } = useAxiosPatch(`main/${edithData?.id}/`, {
    completeInterceptor: {
      action: () => {
        SuccessEdithMessageToast(BodyGrassData.titleVideo);
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        setDisabledButton(false);
        ErrorEdithMessageToast(BodyGrassData.titleVideo);
      },
    },
  });
  const handleFormulary = {
    TitleVideo: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, titleVideo: dat }),
    SubtitleVideo: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitleVideo: dat }),
    TitleCatalogue: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, titleCatalogue: dat }),
    SubtitleCatalogue: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitleCatalogue: dat }),
    TitleEngeenered: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, titleEngeenered: dat }),
    TitleCarousel: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, titleCarousel: dat }),
    SubtitleCarousel: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitleCarousel: dat }),
  };

  const handleCreateGrasses = () => {
    const {
      titleVideo,
      subtitleVideo,
      titleCatalogue,
      subtitleCatalogue,
      titleEngeenered,
      titleCarousel,
      subtitleCarousel,
    } = BodyGrassData;
    if (
      titleVideo !== "" &&
      subtitleVideo !== "" &&
      titleCatalogue !== "" &&
      subtitleCatalogue !== "" &&
      titleEngeenered !== "" &&
      titleCarousel !== "" &&
      subtitleCarousel !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("header_title", titleVideo);
      formData.append("header_subtitle", subtitleVideo);
      formData.append("catalogue_title", titleCatalogue);
      formData.append("catalogue_subtitle", subtitleCatalogue);
      formData.append("grass_title", titleEngeenered);
      formData.append("carousel_title", titleCarousel);
      formData.append("carousel_subtitle", subtitleCarousel);

      Post(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        titleVideo: titleVideo === "",
        subtitleVideo: subtitleVideo === "",
        titleCatalogue: titleCatalogue === "",
        subtitleCatalogue: subtitleCatalogue === "",
        titleEngeenered: titleEngeenered === "",
        titleCarousel: titleCarousel === "",
        subtitleCarousel: subtitleCarousel === "",
      });
    }
  };

  const handleEdithGrasses = () => {
    const {
      titleVideo,
      subtitleVideo,
      titleCatalogue,
      subtitleCatalogue,
      titleEngeenered,
      titleCarousel,
      subtitleCarousel,
    } = BodyGrassData;
    if (
      titleVideo !== "" &&
      subtitleVideo !== "" &&
      titleCatalogue !== "" &&
      subtitleCatalogue !== "" &&
      titleEngeenered !== "" &&
      titleCarousel !== "" &&
      subtitleCarousel !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("header_title", titleVideo);
      formData.append("header_subtitle", subtitleVideo);
      formData.append("catalogue_title", titleCatalogue);
      formData.append("catalogue_subtitle", subtitleCatalogue);
      formData.append("grass_title", titleEngeenered);
      formData.append("carousel_title", titleCarousel);
      formData.append("carousel_subtitle", subtitleCarousel);

      Patch(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        titleVideo: titleVideo === "",
        subtitleVideo: subtitleVideo === "",
        titleCatalogue: titleCatalogue === "",
        subtitleCatalogue: subtitleCatalogue === "",
        titleEngeenered: titleEngeenered === "",
        titleCarousel: titleCarousel === "",
        subtitleCarousel: subtitleCarousel === "",
      });
    }
  };

  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        titleVideo: edithData.header_title,
        subtitleVideo: edithData.header_subtitle,
        titleCatalogue: edithData.catalogue_title,
        subtitleCatalogue: edithData.catalogue_subtitle,
        titleEngeenered: edithData.grass_title,
        titleCarousel: edithData.carousel_title,
        subtitleCarousel: edithData.carousel_subtitle,
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
          Lista de titulos
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Titulo del video</PText>
          <InputNormal
            value={BodyGrassData.titleVideo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.TitleVideo(e.target.value)
            }
            show={showObligatorio.titleVideo.toString()}
          />
          <PObligatory show={showObligatorio.titleVideo.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Subtitulo del video</PText>
          <InputNormal
            value={BodyGrassData.subtitleVideo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.SubtitleVideo(e.target.value)
            }
            show={showObligatorio.subtitleVideo.toString()}
          />
          <PObligatory show={showObligatorio.subtitleVideo.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Titulo en catalogo</PText>
          <InputNormal
            value={BodyGrassData.titleCatalogue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.TitleCatalogue(e.target.value)
            }
            show={showObligatorio.titleCatalogue.toString()}
          />
          <PObligatory show={showObligatorio.titleCatalogue.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Subtitulo del catalogo</PText>
          <InputNormal
            value={BodyGrassData.subtitleCatalogue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.SubtitleCatalogue(e.target.value)
            }
            show={showObligatorio.subtitleCatalogue.toString()}
          />
          <PObligatory show={showObligatorio.subtitleCatalogue.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Titulo de Engineered</PText>
          <InputNormal
            value={BodyGrassData.titleEngeenered}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.TitleEngeenered(e.target.value)
            }
            show={showObligatorio.titleEngeenered.toString()}
          />
          <PObligatory show={showObligatorio.titleEngeenered.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Titulo del carousel</PText>
          <InputNormal
            value={BodyGrassData.titleCarousel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.TitleCarousel(e.target.value)
            }
            show={showObligatorio.titleCarousel.toString()}
          />
          <PObligatory show={showObligatorio.titleCarousel.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Subtitulo del carousel</PText>
          <InputNormal
            value={BodyGrassData.subtitleCarousel}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormulary.SubtitleCarousel(e.target.value)
            }
            show={showObligatorio.subtitleCarousel.toString()}
          />
          <PObligatory show={showObligatorio.subtitleCarousel.toString()}>
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
            {edithData !== null ? "Editar" : "Aceptar"}
          </ButtonAceptarCancel>
        </DivButtons>
      </DivFormulary>
    </DivContainerFormCatalog>
  );
};

export default FormTitles;
