import React, { useState } from "react";
import FooterList, {
  IFooterOnlyList,
} from "../../app/components/footer/FooterList";
import FormFooter from "../../app/components/footer/FormFooter";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | IFooterOnlyList>(null);
  const handleSetEditData = (dat: IFooterOnlyList | null) => {
    setEditData(dat);
    setAddList(true);
  };
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormFooter
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <FooterList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: IFooterOnlyList) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
