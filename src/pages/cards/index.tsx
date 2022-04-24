import React, { useState } from "react";
import CardsList, { IDataCards } from "../../app/components/cards/CardsList";
import FormCards from "../../app/components/cards/FormCards";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | IDataCards>(null);
  const handleSetEditData = (dat: any | IDataCards) => {
    setEditData(dat);
    setAddList(true);
  };

  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCards
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <CardsList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: IDataCards) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
