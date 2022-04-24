import React, { useState } from "react";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import CarouselList, {
  IDataCarousels,
} from "../../app/components/theCarousel/CarouselList";
import FormCarousel from "../../app/components/theCarousel/FormCarousel";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | IDataCarousels>(null);
  const handleSetEditData = (dat: any | IDataCarousels) => {
    setEditData(dat);
    setAddList(true);
  };
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCarousel
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <CarouselList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: IDataCarousels) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
