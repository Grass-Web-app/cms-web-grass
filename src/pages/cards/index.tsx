import React, { useState } from "react";
import CardsList from "../../app/components/cards/CardsList";
import FormCards from "../../app/components/cards/FormCards";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCards stateNew={AddList} addNew={setAddList} />
      ) : (
        <CardsList stateNew={AddList} addNew={setAddList} />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
