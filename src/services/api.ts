import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestauranteList: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteCardapio: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})
export const { useGetRestauranteCardapioQuery, useGetRestauranteListQuery } =
  api

export default api
