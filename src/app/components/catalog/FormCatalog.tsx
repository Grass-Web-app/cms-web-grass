import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import {
  ErrorCreateMessageToast,
  ErrorEdithMessageToast,
  SuccessCreateMessageToast,
  SuccessEdithMessageToast,
} from "../ToastFunctions/toast-functions";
import { IcatalogOnlyList } from "./CatalogList";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivContainerFormCatalog,
  DivFormulary,
  DivInputContainer,
  HR,
  ImgIconArrow,
  InputDescription,
  InputNormal,
  PObligatory,
  PText,
} from "./styledFormCatalog";
interface ICatalog {
  title: string;
  subtitle: string;
  description: string;
}

interface IResponseCreate {
  code: number;
  error: boolean;
  message: string;
  data: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
  };
  pagination: null;
}
const FormCatalog = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IcatalogOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState<ICatalog>({
    title: "",
    subtitle: "",
    description: "",
  });

  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    subtitle: false,
    description: false,
  });

  const { Post: PostCatalogue } = useAxiosPost("catalogues/", {
    completeInterceptor: {
      action: () => {
        SuccessCreateMessageToast(BodyGrassData.title);
        addNew(!stateNew);
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de la creacion",
      action: () => {
        ErrorCreateMessageToast(BodyGrassData.title);
        setDisabledButton(false);
      },
    },
  });

  const { Patch: PatchCatalogue } = useAxiosPatch(
    `catalogues/${edithData?.id}/`,
    {
      completeInterceptor: {
        action: () => {
          SuccessEdithMessageToast(BodyGrassData.title);
          addNew(!stateNew);
        },
      },
      errorInterceptor: {
        message: "No se obtuvieron los datos de la creacion",
        action: () => {
          ErrorEdithMessageToast(BodyGrassData.title);
          setDisabledButton(false);
        },
      },
    }
  );

  const handleFormularyCatalogue = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    Subtitle: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitle: dat }),
    Description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
  };

  const handleCreateCatalogue = () => {
    const { title, subtitle, description } = BodyGrassData;
    if (title !== "" && subtitle !== "" && description !== "") {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);

      PostCatalogue(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
      });
    }
  };

  const handleEdithCatalogue = () => {
    const { title, subtitle, description } = BodyGrassData;
    if (title !== "" && subtitle !== "" && description !== "") {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);

      PatchCatalogue(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
      });
    }
  };

  useEffect(() => {
    if (edithData !== null) {
      setBodyGrassData({
        title: edithData.title,
        subtitle: edithData.subtitle,
        description: edithData.description,
      });
    }
  }, [edithData]);

  const handleEdithorCreate = () => {
    if (edithData !== null) handleEdithCatalogue();
    else handleCreateCatalogue();
  };
  return (
    <DivContainerFormCatalog>
      <DivFormulary>
        <ButtonBackArrow
          disables={DisabledButton}
          onClick={() => addNew(!stateNew)}
        >
          <ImgIconArrow
            alt="arrow"
            src={require("../../../../assets/icons/leftArrow.svg")}
          />
          Lista de Catalogo
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Title</PText>
          <InputNormal
            value={BodyGrassData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyCatalogue.Title(e.target.value)
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
              handleFormularyCatalogue.Subtitle(e.target.value)
            }
            show={showObligatorio.subtitle.toString()}
          />
          <PObligatory show={showObligatorio.subtitle.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription
            value={BodyGrassData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyCatalogue.Description(e.target.value)
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
            {edithData !== null ? "Editar" : "Aceptar"}
          </ButtonAceptarCancel>
        </DivButtons>
      </DivFormulary>
    </DivContainerFormCatalog>
  );
};

export default FormCatalog;
