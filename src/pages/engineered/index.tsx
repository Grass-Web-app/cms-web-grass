import React from "react";
import CatalogList from "../../app/components/catalog/CatalogList";
import HeaderFooterWraper from "../../app/components/layout/InitWraper";

const index = () => {
  return (
    <HeaderFooterWraper>
      <CatalogList />
    </HeaderFooterWraper>
  );
};

export default index;
