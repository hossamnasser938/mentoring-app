import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Mentor } from './types/mentor.interface';

export const apiSlice = createApi({
  reducerPath: 'main',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' || process.env.BASE_URL }),

  tagTypes: ['mentors', 'mentor'],
  endpoints: build => ({
    getAllMentors: build.query<Mentor, void>({
      query: () => 'mentors',
      providesTags: ['mentors'],
    }),

    getMetorProfile: build.query<Mentor, string>({
      query: id => `mentors/${id}`,
      providesTags: (result, error, id) => [{ type: 'mentor', id: id || 'nothing' }],
    }),
  }),
});

export const { useGetAllMentorsQuery,useGetMetorProfileQuery } = apiSlice;
