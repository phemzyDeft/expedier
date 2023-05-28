import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { expedierApi } from "./api/Global";

export default function App({ Component, pageProps }) {
  return (
    <ApiProvider api={expedierApi}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApiProvider>
  );
}
