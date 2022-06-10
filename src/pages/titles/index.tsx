import React, { useState } from "react";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import FormTitles from "../../app/components/titles/FormTitles";
import TitlesList, {
  ITitlesOnlyList,
} from "../../app/components/titles/TitlesList";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | ITitlesOnlyList>(null);
  const handleSetEditData = (dat: ITitlesOnlyList | null) => {
    setEditData(dat);
    setAddList(true);
  };
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormTitles
          stateNew={AddList}
          addNew={setAddList}
          edithData={EditData}
        />
      ) : (
        <TitlesList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: ITitlesOnlyList) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};
export default index;
