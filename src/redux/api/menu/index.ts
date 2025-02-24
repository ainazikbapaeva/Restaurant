import {api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query<MENU.GetMenuResponse, MENU.GetMenuRequest>({
      query: () => ({
        url: "/menu",
        method: "GET",
      }),
      providesTags: ["menu"]
  })})
})

export const { useGetMenuQuery } = api;