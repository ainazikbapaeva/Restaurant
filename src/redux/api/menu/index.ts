import { api as index } from "..";

const api = index.injectEndpoints({
<<<<<<< HEAD
	endpoints: (builder) => ({
		getMenu: builder.query<MENU.GetMenuResponse, MENU.GetMenuRequest>({
			query: () => ({
				url: "/menu",
				method: "GET",
			}), 
			providesTags: ["menu"],
		}),
	}),
});
=======
  endpoints: (builder) => ({
    getMenu: builder.query<MENU.GetMenuResponse, MENU.GetMenuRequest>({
      query: () => ({
        url: "/menu",
        method: "GET",
      }),
      providesTags: ["menu"]
  }),
  getAbout: builder.query<MENU.GetMenuResponse, MENU.GetMenuRequest>({
      query: () => ({
        url: "/about_us",
        method: "GET",
      }),
      providesTags: ["menu"]
  })
})
  
})
>>>>>>> 6c2e02caadce2e1e5e397c33bbf3c0dcd9dfeaae

export const { useGetMenuQuery } = api;
