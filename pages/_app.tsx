import React from "react";
import "../styles/main.css";

export default ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) => <Component {...pageProps} />;
