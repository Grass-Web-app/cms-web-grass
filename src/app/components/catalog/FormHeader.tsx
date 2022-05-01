import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import {
  ErrorCreateMessageToast,
  ErrorEdithMessageToast,
  SuccessCreateMessageToast,
  SuccessEdithMessageToast,
} from "../ToastFunctions/toast-functions";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivCatalogOptions,
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
  InputImg,
  InputNormal,
  PObligatory,
  PoptionCatalogue,
  PText,
} from "./styledFormCatalog";
interface ICatalogListData {
  data: {
    code: number;
    data: IHeaderOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IHeaderOnlyList {
  catalogue: number;
  id: number;
  picture: string;
  title: string;
}
const FormHeader = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IHeaderOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [file, setFile] = useState<null | any>(null);
  const [ShowCatalogueIds, setShowCatalogueIds] = useState(false);
  const [CatalogList, setCatalogList] = useState(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState({
    title: "",
    catalogueId: { number: null, name: "" },
    picture: null,
  });

  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    catalogueId: false,
    picture: false,
  });
  const { Get } = useAxiosGet("catalogues/", {
    completeInterceptor: {
      action: (data: ICatalogListData) => {
        setCatalogList(data.data.data);
        if (edithData !== null) {
          data.data.data.forEach((item) => {
            if (edithData.catalogue === item.id) {
              setBodyGrassData({
                title: edithData.title,
                picture: edithData.picture,
                catalogueId: { name: item.title, number: item.id },
              });
            }
          });
        }
      },
    },
    errorInterceptor: {
      message: "No se obtuvieron los datos de get",
    },
  });
  useEffect(() => {
    if (token.access !== "" && token.refresh !== "") {
      Get(token.access);
    }
  }, []);
  const { Post: PostHeader } = useAxiosPost("catalogues/headers/", {
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

  const { Patch: PatchHeader } = useAxiosPatch(
    `catalogues/headers/${edithData?.id}/`,
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

  const handleFormularyHeader = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    picture: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, picture: dat }),
    catalogue: (dat: number, name: string) => {
      setBodyGrassData({
        ...BodyGrassData,
        catalogueId: { number: dat, name: name },
      });
      setShowCatalogueIds(!ShowCatalogueIds);
    },
  };

  const handleCreateHeader = () => {
    const { title, catalogueId, picture } = BodyGrassData;
    if (title !== "" && catalogueId.number !== null && picture !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("catalogue", `${catalogueId.number}`);
      if (file !== null) formData.append("picture", file);

      PostHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        catalogueId: catalogueId.number === null,
        picture: picture === null,
      });
    }
  };

  const handleEdithHeader = () => {
    const { title, picture, catalogueId } = BodyGrassData;
    if (title !== "" && catalogueId.number !== null && picture !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("catalogue", `${catalogueId.number}`);
      if (file !== null) formData.append("picture", file);

      PatchHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        catalogueId: catalogueId.number === null,
        picture: picture === null,
      });
    }
  };

  const handleEdithorCreate = () => {
    if (edithData !== null) handleEdithHeader();
    else handleCreateHeader();
  };
  useEffect(() => {
    if (file !== null) {
      handleFormularyHeader.picture(URL.createObjectURL(file));
    }
  }, [file]);

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
          Lista de Headers
        </ButtonBackArrow>
        <HR />
        <DivInputContainer>
          <PText>Catalogo perteneciente</PText>
          <div onClick={() => setShowCatalogueIds(!ShowCatalogueIds)}>
            <InputNormal
              style={{ cursor: "pointer" }}
              value={BodyGrassData.catalogueId.name}
              disabled={true}
              show={showObligatorio.catalogueId.toString()}
            />
          </div>
          <PObligatory show={showObligatorio.catalogueId.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
          <DivCatalogOptions show={ShowCatalogueIds.toString()}>
            {CatalogList !== null &&
              CatalogList.map((item: IHeaderOnlyList, index: number) => {
                return (
                  <PoptionCatalogue
                    onClick={() =>
                      handleFormularyHeader.catalogue(item.id, item.title)
                    }
                    key={index}
                  >
                    {item.title}
                  </PoptionCatalogue>
                );
              })}
          </DivCatalogOptions>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Title</PText>
          <InputNormal
            value={BodyGrassData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyHeader.Title(e.target.value)
            }
            show={showObligatorio.title.toString()}
          />
          <PObligatory show={showObligatorio.title.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>

        <DivInputContainer>
          <PText>Imagen</PText>
          <DivImgFormulary show={showObligatorio.picture.toString()}>
            {BodyGrassData.picture !== null ? (
              <HavePicture>
                <ImgFile alt="file" src={BodyGrassData.picture} />
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
          <PObligatory show={showObligatorio.picture.toString()}>
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

export default FormHeader;
