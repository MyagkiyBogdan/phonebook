import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IChangeContact } from 'models/models';

import { IContact } from 'models/models';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    // keepUnusedDataFor: 0,
    prepareHeaders: (headers, { getState }: any): any => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        return headers.set('authorization', '');
      }

      return headers;
    },
  }),
  // added here
  keepUnusedDataFor: 0,
  //
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    // advice from documentation if we need no agrs for useGetContactsQuery
    getContacts: builder.query<IContact[], void>({
      query: () => `/contacts`,
      keepUnusedDataFor: 0,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (contactId: string) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }: { name: string; number: string }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ id: contactId, newName, newNumber }: IChangeContact) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: {
          name: newName,
          number: newNumber,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useChangeContactMutation,
} = contactsApi;
