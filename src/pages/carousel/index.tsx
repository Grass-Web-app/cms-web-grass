import React, { useState } from "react";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import CarouselList from "../../app/components/theCarousel/CarouselList";
import FormCarousel from "../../app/components/theCarousel/FormCarousel";

const index = () => {
  const [AddList, setAddList] = useState(false);
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCarousel stateNew={AddList} addNew={setAddList} />
      ) : (
        <CarouselList stateNew={AddList} addNew={setAddList} />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
