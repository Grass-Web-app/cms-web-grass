import React, { useState } from "react";
import EngiList, {
  IEngineredOnlyList,
} from "../../app/components/engineered/EngiList";
import FormEng from "../../app/components/engineered/FormEng";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  const [AddList, setAddList] = useState(false);
  const [EditData, setEditData] = useState<null | IEngineredOnlyList>(null);
  const handleSetEditData = (dat: IEngineredOnlyList | null) => {
    setEditData(dat);
    setAddList(true);
  };
  return (
    <HeaderFooterWraper>
      {AddList ? (
        <FormEng stateNew={AddList} addNew={setAddList} edithData={EditData} />
      ) : (
        <EngiList
          stateNew={AddList}
          addNew={setAddList}
          setData={(dat: IEngineredOnlyList) => handleSetEditData(dat)}
        />
      )}
    </HeaderFooterWraper>
  );
};

export default index;
