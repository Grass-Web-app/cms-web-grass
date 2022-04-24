import React, { useState } from "react";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import FormParallax from "../../app/components/parallax/FormParallax";
import ParallaxList from "../../app/components/parallax/ParallaxList";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | any>(null);
  const handleSetEditData = (dat: any | null) => {
    setEditData(dat);
    setAddList(true);
  };
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormParallax
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <ParallaxList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: any) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
