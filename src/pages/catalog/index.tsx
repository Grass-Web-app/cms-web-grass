import React, { useEffect, useState } from "react";
import CardCarouselList, {
  ICardCarouselOnlyList,
} from "../../app/components/catalog/CardCarouselList";
import CatalogList, {
  IcatalogOnlyList,
} from "../../app/components/catalog/CatalogList";
import DescriptionsList, {
  IDescriptionOnlyList,
} from "../../app/components/catalog/DescriptionsList";
import FormCardCArousel from "../../app/components/catalog/FormCardCArousel";
import FormCatalog from "../../app/components/catalog/FormCatalog";
import FormDescription from "../../app/components/catalog/FormDescription";
import FormHeader, {
  IHeaderOnlyList,
} from "../../app/components/catalog/FormHeader";
import FormPicsDescriptions from "../../app/components/catalog/FormPicsDescriptions";
import HeaderList from "../../app/components/catalog/HeaderList";
import {
  ButtonOptions,
  ButtonShowOptions,
  DivButtonsContainer,
  DivContainerOptions,
  PWho,
} from "../../app/components/catalog/MenuinCatalogueStyled";
import PicsDescriptionsList, {
  IPicDesOnlyList,
} from "../../app/components/catalog/PicsDescriptionsList";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const initMenuOption = {
  Catalogue: false,
  header: false,
  bigDescription: false,
  BigCarousel: false,
  CarouselDescription: false,
};
const initPosotions = {
  Catalogue: 60,
  header: 60,
  bigDescription: 60,
  BigCarousel: 60,
  CarouselDescription: 60,
};

const index = () => {
  const [MenuOption, setMenuOption] = useState({
    Catalogue: true,
    header: false,
    bigDescription: false,
    BigCarousel: false,
    CarouselDescription: false,
  });
  const [SelectedMobile, setSelectedMobile] = useState("Catalogue");
  const [HandleShowMobile, setHandleShowMobile] = useState(false);
  const [AddListCatalogue, setAddListCatalogue] = useState(false);
  const [AddListHeader, setAddListHeader] = useState(false);
  const [AddListDescription, setAddListDescription] = useState(false);
  const [AddListCardCarousel, setAddListCardCarousel] = useState(false);
  const [AddListPicsDescriptions, setAddListPicsDescriptions] = useState(false);
  const [Positions, setPositions] = useState(initPosotions);
  const [EditDataCatalogue, setEditDataCatalogue] =
    useState<null | IcatalogOnlyList>(null);
  const [EdithDataHeader, setEdithDataHeader] =
    useState<null | IHeaderOnlyList>(null);
  const [EdithDataDescriptios, setEdithDataDescriptios] =
    useState<null | IDescriptionOnlyList>(null);
  const [EdithDataCardCarousel, setEdithDataCardCarousel] =
    useState<null | ICardCarouselOnlyList>(null);
  const [EdithDataPicsDescriptions, setEdithDataPicsDescriptions] =
    useState<null | IPicDesOnlyList>(null);
  const handleSetEditDataCatalogue = (dat: IcatalogOnlyList | null) => {
    setEditDataCatalogue(dat);
    setAddListCatalogue(true);
  };

  const handleSetEditDataHeader = (dat: IHeaderOnlyList | null) => {
    setEdithDataHeader(dat);
    setAddListHeader(true);
  };
  const handleSetEditDescriptions = (dat: IDescriptionOnlyList | null) => {
    setEdithDataDescriptios(dat);
    setAddListDescription(true);
  };
  const handleSetEditCardCarousel = (dat: ICardCarouselOnlyList | null) => {
    setEdithDataCardCarousel(dat);
    setAddListCardCarousel(true);
  };
  const handleSetEditPicsDescriptions = (dat: IPicDesOnlyList | null) => {
    setEdithDataPicsDescriptions(dat);
    setAddListPicsDescriptions(true);
  };
  //header bigdescription bigcardCarousel carouselDescription

  const GetNameMenu = (name: string) => {
    setSelectedMobile(name);
    setHandleShowMobile(!HandleShowMobile);
    setPositions(initPosotions);
  };
  const handleMenuOption = {
    Catalogue: () => {
      setMenuOption({ ...initMenuOption, Catalogue: true });
      GetNameMenu("Catalogo");
    },
    Header: () => {
      setMenuOption({ ...initMenuOption, header: true });
      GetNameMenu("Headers");
    },
    bigDescription: () => {
      setMenuOption({ ...initMenuOption, bigDescription: true });
      GetNameMenu("Descripciones");
    },
    bigCarousel: () => {
      setMenuOption({ ...initMenuOption, BigCarousel: true });
      GetNameMenu("Card Carousel");
    },
    CarouselDescription: () => {
      setMenuOption({ ...initMenuOption, CarouselDescription: true });
      GetNameMenu("Pictures Descripciones");
    },
  };
  useEffect(() => {
    if (HandleShowMobile) {
      setTimeout(() => {
        setPositions({
          Catalogue: 60,
          header: 120,
          bigDescription: 180,
          BigCarousel: 240,
          CarouselDescription: 300,
        });
      }, 10);
    } else setPositions(initPosotions);
  }, [HandleShowMobile]);

  const handleShowOptions = () => {
    if (!HandleShowMobile) setHandleShowMobile(!HandleShowMobile);
    else {
      setTimeout(() => {
        setHandleShowMobile(!HandleShowMobile);
      }, 1000);
      setPositions(initPosotions);
    }
  };

  return (
    <HeaderFooterWraper>
      <DivButtonsContainer>
        <DivContainerOptions>
          <ButtonShowOptions onClick={handleShowOptions}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={require("../../../assets/icons/mano.svg")}
            />
            <PWho show={HandleShowMobile.toString()}>{SelectedMobile}</PWho>
          </ButtonShowOptions>

          <ButtonOptions
            selected={MenuOption.Catalogue.toString()}
            onClick={() => handleMenuOption.Catalogue()}
            show={HandleShowMobile.toString()}
            top={Positions.Catalogue}
          >
            Catalogue
          </ButtonOptions>
          <ButtonOptions
            selected={MenuOption.header.toString()}
            onClick={() => handleMenuOption.Header()}
            show={HandleShowMobile.toString()}
            top={Positions.header}
          >
            Headers
          </ButtonOptions>
          <ButtonOptions
            selected={MenuOption.bigDescription.toString()}
            onClick={() => handleMenuOption.bigDescription()}
            show={HandleShowMobile.toString()}
            top={Positions.bigDescription}
          >
            Descriptions
          </ButtonOptions>
          <ButtonOptions
            selected={MenuOption.BigCarousel.toString()}
            onClick={() => handleMenuOption.bigCarousel()}
            show={HandleShowMobile.toString()}
            top={Positions.BigCarousel}
          >
            CardCarousel
          </ButtonOptions>
          <ButtonOptions
            selected={MenuOption.CarouselDescription.toString()}
            onClick={() => handleMenuOption.CarouselDescription()}
            show={HandleShowMobile.toString()}
            top={Positions.CarouselDescription}
          >
            PicturesDescriptions
          </ButtonOptions>
        </DivContainerOptions>
        {MenuOption.Catalogue && (
          <>
            {AddListCatalogue ? (
              <FormCatalog
                stateNew={AddListCatalogue}
                addNew={setAddListCatalogue}
                edithData={EditDataCatalogue}
              />
            ) : (
              <CatalogList
                stateNew={AddListCatalogue}
                addNew={setAddListCatalogue}
                setData={(dat: IcatalogOnlyList) =>
                  handleSetEditDataCatalogue(dat)
                }
              />
            )}
          </>
        )}
        {MenuOption.header && (
          <>
            {AddListHeader ? (
              <FormHeader
                stateNew={AddListHeader}
                addNew={setAddListHeader}
                edithData={EdithDataHeader}
              />
            ) : (
              <HeaderList
                stateNew={AddListHeader}
                addNew={setAddListHeader}
                setData={(dat: IHeaderOnlyList) => handleSetEditDataHeader(dat)}
              />
            )}
          </>
        )}
        {MenuOption.bigDescription && (
          <>
            {AddListDescription ? (
              <FormDescription
                stateNew={AddListDescription}
                addNew={setAddListDescription}
                edithData={EdithDataDescriptios}
              />
            ) : (
              <DescriptionsList
                stateNew={AddListDescription}
                addNew={setAddListDescription}
                setData={(dat: IDescriptionOnlyList) =>
                  handleSetEditDescriptions(dat)
                }
              />
            )}
          </>
        )}
        {MenuOption.BigCarousel && (
          <>
            {AddListCardCarousel ? (
              <FormCardCArousel
                stateNew={AddListCardCarousel}
                addNew={setAddListCardCarousel}
                edithData={EdithDataCardCarousel}
              />
            ) : (
              <CardCarouselList
                stateNew={AddListCardCarousel}
                addNew={setAddListCardCarousel}
                setData={(dat: ICardCarouselOnlyList) =>
                  handleSetEditCardCarousel(dat)
                }
              />
            )}
          </>
        )}
        {MenuOption.CarouselDescription && (
          <>
            {AddListPicsDescriptions ? (
              <FormPicsDescriptions
                stateNew={AddListPicsDescriptions}
                addNew={setAddListPicsDescriptions}
                edithData={EdithDataPicsDescriptions}
              />
            ) : (
              <PicsDescriptionsList
                stateNew={AddListPicsDescriptions}
                addNew={setAddListPicsDescriptions}
                setData={(dat: IPicDesOnlyList) =>
                  handleSetEditPicsDescriptions(dat)
                }
              />
            )}
          </>
        )}
      </DivButtonsContainer>
    </HeaderFooterWraper>
  );
};

export default index;
