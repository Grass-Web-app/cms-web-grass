import React, { useState } from "react";
import EngiList from "../../app/components/engineered/EngiList";
import FormEng from "../../app/components/engineered/FormEng";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormEng stateNew={AddList} addNew={setAddList} />
      ) : (
        <EngiList stateNew={AddList} addNew={setAddList} />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
