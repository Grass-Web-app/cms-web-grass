import React, { useState } from "react";
import CatalogList, {
  IcatalogOnlyList,
} from "../../app/components/catalog/CatalogList";
import FormCatalog from "../../app/components/catalog/FormCatalog";

import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | IcatalogOnlyList>(null);
  const handleSetEditData = (dat: IcatalogOnlyList | null) => {
    setEditData(dat);
    setAddList(true);
  };

  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormCatalog
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <CatalogList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: IcatalogOnlyList) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
