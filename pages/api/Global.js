import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export const expedierApi = createApi({
  reducerPath: "expedierApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetPostQuery } = expedierApi;
