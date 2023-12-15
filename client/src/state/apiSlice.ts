import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Mentor } from './types/mentor.interface';
import { ProjectIdeas } from './types/projectIdeas';

export const apiSlice = createApi({
  reducerPath: 'main',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' || process.env.BASE_URL }),

  tagTypes: ['mentors', 'mentor', 'projectIdeas'],
  endpoints: build => ({
    getAllMentors: build.query<Mentor, void>({
      query: () => 'mentors',
      providesTags: ['mentors'],
    }),

    getMetorProfile: build.query<Mentor, string>({
      query: id => `mentors/${id}`,
      providesTags: (result, error, id) => [{ type: 'mentor', id: id || 'nothing' }],
    }),

    getProjectIdeas: build.query<ProjectIdeas, void>({
      query: () => 'projectIdeas',
      providesTags: ['projectIdeas'],
    }),
  }),
});

export const { useGetAllMentorsQuery, useGetMetorProfileQuery,useGetProjectIdeasQuery } = apiSlice;
