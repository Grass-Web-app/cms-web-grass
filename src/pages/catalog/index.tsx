import React, { useState } from "react";
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
  DivButtonsContainer,
  DivContainerOptions,
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

const index = () => {
  const [MenuOption, setMenuOption] = useState({
    Catalogue: true,
    header: false,
    bigDescription: false,
    BigCarousel: false,
    CarouselDescription: false,
  });
  const [AddListCatalogue, setAddListCatalogue] = useState(false);
  const [AddListHeader, setAddListHeader] = useState(false);
  const [AddListDescription, setAddListDescription] = useState(false);
  const [AddListCardCarousel, setAddListCardCarousel] = useState(false);
  const [AddListPicsDescriptions, setAddListPicsDescriptions] = useState(false);
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

  const handleMenuOption = {
    Catalogue: () => setMenuOption({ ...initMenuOption, Catalogue: true }),
    Header: () => setMenuOption({ ...initMenuOption, header: true }),
    bigDescription: () =>
      setMenuOption({ ...initMenuOption, bigDescription: true }),
    bigCarousel: () => setMenuOption({ ...initMenuOption, BigCarousel: true }),
    CarouselDescription: () =>
      setMenuOption({ ...initMenuOption, CarouselDescription: true }),
  };
  return (
    <HeaderFooterWraper>
      <DivButtonsContainer>
        <DivContainerOptions>
          <ButtonOptions onClick={() => handleMenuOption.Catalogue()}>
            Catalogue
          </ButtonOptions>
          <ButtonOptions onClick={() => handleMenuOption.Header()}>
            Headers
          </ButtonOptions>
          <ButtonOptions onClick={() => handleMenuOption.bigDescription()}>
            Descriptions
          </ButtonOptions>
          <ButtonOptions onClick={() => handleMenuOption.bigCarousel()}>
            CardCarousel
          </ButtonOptions>
          <ButtonOptions onClick={() => handleMenuOption.CarouselDescription()}>
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
