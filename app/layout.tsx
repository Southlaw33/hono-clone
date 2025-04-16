//most important import
import "./globals.css";

import React, { PropsWithChildren } from "react";

const rootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

export default rootLayout;
