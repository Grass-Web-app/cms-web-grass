import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
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
  InputDescription,
  InputImg,
  InputNormal,
  PObligatory,
  PoptionCatalogue,
  PText,
} from "./styledFormCatalog";
interface ICatalogPicsDec {
  data: {
    code: number;
    data: IpicsdescOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IpicsdescOnlyList {
  catalogue: number;
  description: string;
  id: number;
  picture: string;
  subtitle: string;
  title: string;
}
const FormPicsDescriptions = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IpicsdescOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [file, setFile] = useState<null | any>(null);
  const [ShowCatalogueIds, setShowCatalogueIds] = useState(false);
  const [CatalogList, setCatalogList] = useState(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState({
    title: "",
    subtitle: "",
    description: "",
    catalogueId: { number: null, name: "" },
    picture: null,
  });

  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    subtitle: false,
    description: false,
    catalogueId: false,
    picture: false,
  });
  const { Get } = useAxiosGet("catalogues/", {
    completeInterceptor: {
      action: (data: ICatalogPicsDec) => {
        setCatalogList(data.data.data);
        if (edithData !== null) {
          data.data.data.forEach((item) => {
            if (edithData.catalogue === item.id) {
              setBodyGrassData({
                title: edithData.title,
                subtitle: edithData.subtitle,
                description: edithData.description,
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
  const { Post: PostPicsDesc } = useAxiosPost(
    "catalogues/carousel-description/",
    {
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
    }
  );

  const { Patch: PatchPicsDesc } = useAxiosPatch(
    `catalogues/carousel-description/${edithData?.id}/`,
    {
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
    }
  );

  const handleFormularyHeader = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    subTitle: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitle: dat }),
    description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
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
    const { title, catalogueId, picture, subtitle, description } =
      BodyGrassData;
    if (title !== "" && catalogueId.number !== null && picture !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      formData.append("catalogue", `${catalogueId.number}`);
      if (file !== null) formData.append("picture", file);

      PostPicsDesc(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
        catalogueId: catalogueId.number === null,
        picture: picture === null,
      });
    }
  };

  const handleEdithHeader = () => {
    const { title, picture, catalogueId, subtitle, description } =
      BodyGrassData;
    if (title !== "" && catalogueId.number !== null && picture !== null) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      formData.append("catalogue", `${catalogueId.number}`);

      PatchPicsDesc(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
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
          Lista de Pictures Description
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
              CatalogList.map((item: IpicsdescOnlyList, index: number) => {
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
          <PText>Subtitle</PText>
          <InputNormal
            value={BodyGrassData.subtitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyHeader.subTitle(e.target.value)
            }
            show={showObligatorio.subtitle.toString()}
          />
          <PObligatory show={showObligatorio.subtitle.toString()}>
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
        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription
            value={BodyGrassData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyHeader.description(e.target.value)
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

export default FormPicsDescriptions;
