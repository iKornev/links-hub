import React from "react";
import LinksListView from "./LinksListView";

const PageContent = () => (
  <div className="row">
    <div className="col">
      <LinksListView
        title="Links to learn English"
        category="english"
      />
    </div>
    <div className="col">
      <LinksListView
        title="Links to learn French"
        category="french"
      />
    </div>
  </div>
);

export default PageContent;
