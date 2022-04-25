import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Reduxhooks";
import useAxiosGet from "../Hooks/useAxiosGet";
import useAxiosPatch from "../Hooks/useAxiosPatch";
import useAxiosPost from "../Hooks/useAxiosPost";
import { Token } from "../ReduxSlices/CookiesSlice";
import { ICardCarouselOnlyList } from "./CardCarouselList";
import {
  ButtonAceptarCancel,
  ButtonBackArrow,
  DivBenefitOpcion,
  DivButtons,
  DivCatalogOptions,
  DivContainerFormCatalog,
  DivFormulary,
  DivImgBenefitOption,
  DivInputContainer,
  HR,
  ImgBenefit,
  ImgIconArrow,
  InputDescription,
  InputNormal,
  Pbenefit,
  PObligatory,
  PoptionCatalogue,
  PText,
} from "./styledFormCatalog";
const caracteres = "%$##$%";

const FormCardCArousel = (props: {
  stateNew: boolean;
  addNew: (dat: boolean) => void;
  edithData: null | ICardCarouselOnlyList;
}) => {
  const { stateNew, addNew, edithData } = props;
  const token = useAppSelector(Token);
  const [BeneficioAlone, setBeneficioAlone] = useState("");
  const [ShowCatalogueIds, setShowCatalogueIds] = useState(false);
  const [CatalogList, setCatalogList] = useState(null);
  const [DisabledButton, setDisabledButton] = useState(false);
  const [BodyGrassData, setBodyGrassData] = useState({
    title: "",
    subtitle: "",
    description: "",
    benefits: "",
    catalogueId: { number: null, name: "" },
  });

  const [showObligatorio, setShowObligatorio] = useState({
    title: false,
    subtitle: false,
    description: false,
    benefits: false,
    catalogueId: false,
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
                subtitle: edithData.subtitle,
                description: edithData.description,
                benefits: edithData.benefits,
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
  const { Post: PostHeader } = useAxiosPost("catalogues/big-card-carousel/", {
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
    `catalogues/big-card-carousel/${edithData?.id}/`,
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

  const handleFormularyCardCarousel = {
    Title: (dat: string) => setBodyGrassData({ ...BodyGrassData, title: dat }),
    subtitle: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, subtitle: dat }),
    description: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, description: dat }),
    benefits: (dat: string) =>
      setBodyGrassData({ ...BodyGrassData, benefits: dat }),
    catalogue: (dat: number, name: string) => {
      setBodyGrassData({
        ...BodyGrassData,
        catalogueId: { number: dat, name: name },
      });
      setShowCatalogueIds(!ShowCatalogueIds);
    },
  };

  const handleCreateCardCarousel = () => {
    const { title, catalogueId, description, subtitle, benefits } =
      BodyGrassData;
    if (
      title !== "" &&
      catalogueId.number !== null &&
      description !== "" &&
      subtitle !== "" &&
      benefits !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      formData.append("catalogue", `${catalogueId.number}`);
      formData.append("benefits", benefits);

      PostHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
        benefits: benefits === "",
        catalogueId: catalogueId.number === null,
      });
    }
  };

  const handleEdithCardCarousel = () => {
    const { title, catalogueId, description, subtitle, benefits } =
      BodyGrassData;
    if (
      title !== "" &&
      catalogueId.number !== null &&
      description !== "" &&
      subtitle !== "" &&
      benefits !== ""
    ) {
      setDisabledButton(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("description", description);
      formData.append("catalogue", `${catalogueId.number}`);
      formData.append("benefits", benefits);

      PatchHeader(formData, {
        Authorization: `Bearer ${token.access}`,
      });
    } else {
      setShowObligatorio({
        title: title === "",
        subtitle: subtitle === "",
        description: description === "",
        benefits: benefits === "",
        catalogueId: catalogueId.number === null,
      });
    }
  };

  const handleEdithorCreate = () => {
    if (edithData !== null) handleEdithCardCarousel();
    else handleCreateCardCarousel();
  };
  const handleAddBeneficio = () => {
    const { benefits } = handleFormularyCardCarousel;
    if (BodyGrassData.benefits === "" && BeneficioAlone.trim() !== "") {
      benefits(BeneficioAlone);
      setBeneficioAlone("");
    } else if (BeneficioAlone !== "") {
      benefits(BodyGrassData.benefits + caracteres + BeneficioAlone.trim());
      setBeneficioAlone("");
    }
  };
  const handleEraseBeneficio = (dat: string) => {
    console.log(BodyGrassData.benefits);
    const { benefits } = handleFormularyCardCarousel;
    if (BodyGrassData.benefits.includes(caracteres)) {
      let arr = BodyGrassData.benefits.split(caracteres);
      arr = arr.filter((contain) => contain !== dat);
      benefits(arr.join(caracteres));
    } else benefits("");
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
          Lista de Cards Carousel
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
                      handleFormularyCardCarousel.catalogue(item.id, item.title)
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
              handleFormularyCardCarousel.Title(e.target.value)
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
              handleFormularyCardCarousel.subtitle(e.target.value)
            }
            show={showObligatorio.subtitle.toString()}
          />
          <PObligatory show={showObligatorio.subtitle.toString()}>
            *Llenar campo obligatorio
          </PObligatory>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Beneficios</PText>
          {BodyGrassData.benefits.includes(caracteres) ? (
            BodyGrassData.benefits
              .split(caracteres)
              .map((item: string, index: number) => {
                return (
                  <DivBenefitOpcion key={index}>
                    <Pbenefit>{item}</Pbenefit>

                    <DivImgBenefitOption
                      onClick={() => handleEraseBeneficio(item)}
                    >
                      <ImgBenefit
                        src={require("../../../../assets/icons/trash.svg")}
                      />
                    </DivImgBenefitOption>
                  </DivBenefitOpcion>
                );
              })
          ) : (
            <>
              {BodyGrassData.benefits !== "" && (
                <DivBenefitOpcion
                  onClick={() => handleEraseBeneficio(BodyGrassData.benefits)}
                >
                  <Pbenefit>{BodyGrassData.benefits}</Pbenefit>

                  <DivImgBenefitOption>
                    <ImgBenefit
                      src={require("../../../../assets/icons/trash.svg")}
                    />
                  </DivImgBenefitOption>
                </DivBenefitOpcion>
              )}
            </>
          )}

          <InputNormal
            value={BeneficioAlone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBeneficioAlone(e.target.value)
            }
            show={showObligatorio.benefits.toString()}
          />
          <PObligatory show={showObligatorio.benefits.toString()}>
            *Agrega al menos un beneficio
          </PObligatory>
          <ButtonAceptarCancel
            style={{ marginTop: "10px" }}
            disabled={DisabledButton}
            onClick={handleAddBeneficio}
          >
            Agregar beneficio
          </ButtonAceptarCancel>
        </DivInputContainer>
        <DivInputContainer>
          <PText>Description</PText>
          <InputDescription
            value={BodyGrassData.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFormularyCardCarousel.description(e.target.value)
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

export default FormCardCArousel;
