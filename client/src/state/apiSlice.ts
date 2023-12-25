import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Mentor, Mentors } from './types/mentor.interface';
import { ProjectIdea, ProjectIdeas } from './types/projectIdeas';

export const apiSlice = createApi({
  reducerPath: 'main',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' || process.env.BASE_URL }),

  tagTypes: ['mentors', 'mentor', 'projectIdeas', 'projectIdea', 'mentorOfIdea'],
  endpoints: build => ({
    getAllMentors: build.query<Mentors, void>({
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
    getProjectIdea: build.query<ProjectIdea, string>({
      query: id => `projectIdeas/${id}`,
      providesTags: (result, err, id) => [{ type: 'projectIdea', id: id || 'nothing' }],
    }),

    getMentorOfIdeaData: build.query<Mentor, string>({
      query: id => `/mentors/userid/${id}`,
      providesTags: (result, err, id) => [{ type: 'mentorOfIdea', id: id || 'nothing' }],
    }),
  }),
});

export const {
  useGetAllMentorsQuery,
  useGetMetorProfileQuery,
  useGetProjectIdeasQuery,
  useGetMentorOfIdeaDataQuery,
  useGetProjectIdeaQuery
} = apiSlice;
