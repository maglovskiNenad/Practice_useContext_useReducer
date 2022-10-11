import React from "react";
import AvailableItems from "./AvailableItems";

import Description from "./Description";

const Main = (props) => {
  return (
    <main>
      <Description />
      <AvailableItems />
    </main>
  );
};

export default Main;
