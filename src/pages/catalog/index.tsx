import React, { useState } from "react";
import CatalogList from "../../app/components/catalog/CatalogList";
import FormCatalog from "../../app/components/catalog/FormCatalog";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);

  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCatalog stateNew={AddList} addNew={setAddList}/>
      ) : (
        <CatalogList stateNew={AddList} addNew={setAddList} />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
