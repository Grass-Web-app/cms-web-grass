import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import { IDescriptionOnlyList } from "./DescriptionsList";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivButtons,
  DivCatalogOptions,
  DivContainerFormCatalog,
  DivFormulary,
  DivInputContainer,
  HR,  
  ImgIconArrow,
  InputDescription,  
  InputNormal,
  PObligatory,
  PoptionCatalogue,
  PText,
} from "./styledFormCatalog";

const FormDescription = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | IDescriptionOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [ShowCatalogueIds, setShowCatalogueIds] = useState(false);
  const [CatalogList, setCatalogList] = useState(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState({
    title: "",
    catalogueId: { number: null, name: "" },
    description: null,
  });

  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    catalogueId: false,
    description: false,
  });
  const { Get } = useAxiosGet("catalogues/", {
    completeInterceptor: {
      action: (data: any) => {
        setCatalogList(data.data.data);
        if (edithData !== null) {
          data.data.data.forEach((item) => {
            if (edithData.catalogue === item.id) {
              setBodyGrassData({
                title: edithData.title,
                description: edithData.description,
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
  const { Post: PostHeader } = useAxiosPost("catalogues/big-description/", {
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
  const { Patch: PatchHeader } = useAxiosPatch(
    `catalogues/big-description/${edithData?.id}/`,
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
    description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
    catalogue: (dat: number, name: string) => {
      setBodyGrassData({
        ...BodyGrassData,
        catalogueId: { number: dat, name: name },
      });
      setShowCatalogueIds(!ShowCatalogueIds);
    },
  };
  const handleCreateHeader = () => {
    const { title, catalogueId, description } = BodyGrassData;
    if (title !== "" && catalogueId.number !== null && description !== "") {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("catalogue", `${catalogueId.number}`);
      formData.append("description", description);

      PostHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        catalogueId: catalogueId.number === null,
        description: description === "",
      });
    }
  };
  const handleEdithHeader = () => {
    const { title, description, catalogueId } = BodyGrassData;
    if (title !== "" && catalogueId.number !== null && description !== "") {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("catalogue", `${catalogueId.number}`);
      formData.append("description", description);

      PatchHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        catalogueId: catalogueId.number === null,
        description: description === "",
      });
    }
  };

  const handleEdithorCreate = () => {
    if (edithData !== null) handleEdithHeader();
    else handleCreateHeader();
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
          Lista de Descripciones
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
              CatalogList.map((item: any, index: number) => {
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

export default FormDescription;
