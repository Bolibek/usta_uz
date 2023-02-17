import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const invoiceApi = createApi({
	reducerPath: "invoiceApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${baseUrl}`,
	}),
	tagTypes: ["Workman"],
	endpoints: (builder) => ({
		addUser: builder.mutation({
			query: (user) => ({
				url: "/signupuser",
				method: "POST",
				body: user,
			}),
			providesTags: ["User"],
		}),
		myProfile: builder.query({
			query: (userId) => ({
				url: `/user/${userId}`,
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["User"],
		}),
		updateProfile: builder.mutation({
			query: (userId) => ({
				url: `/user/${userId}`,
				method: "PUT",
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["User"],
		}),
		workerPosts: builder.query({
			query: () => ({
				url: "/workerposts",
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["Worker Posts"],
		}),
		employerPosts: builder.query({
			query: () => ({
				url: "/employerposts",
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["Employer Posts"],
		}),
		cityPosts: builder.query({
			query: (city) => ({
				url: `/cityposts/${city}`,
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["City Posts"],
		}),
		signedUserPosts: builder.query({
			query: (userId) => ({
				url: `/signeduserposts/${userId}`,
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["User"],
		}),

		workerPostDetails: builder.query({
			query: (postId) => ({
				url: `/posts/${postId}`,
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
			}),
			providesTags: ["Worker Post Details"],
		}),

		addWorkerPost: builder.mutation({
			query: (workerPost) => ({
				url: "/createworkerpost",
				method: "POST",
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
				body: workerPost,
			}),

			invalidatesTags: ["Worker Post"],
		}),
		addEmployerPost: builder.mutation({
			query: (workerPost) => ({
				url: "/createemployerpost",
				method: "POST",
				headers: { Authorization: `Bekki ${localStorage.getItem("jwt")}` },
				body: workerPost,
			}),

			invalidatesTags: ["Employer Post"],
		}),
		// updateInvoice: builder.mutation({
		//   query: ({id, ...rest}) => ({
		//     url: `/invoice/${id}`,
		//     method: 'PUT',
		//     headers: {Authorization: `Bekki ${localStorage.getItem('jwt')}`},
		//     body: rest,
		//   }),

		//   invalidatesTags: ['Invoice'],
		// }),
		// deleteInvoice: builder.mutation({
		//   query: id => ({
		//     url: `/invoice/${id}`,
		//     headers: {Authorization: `Bekki ${localStorage.getItem('jwt')}`},
		//     method: 'DELETE',
		//   }),
		//   invalidatesTags: ['Invoice'],
		// }),
	}),
});

export const {
	useWorkerPostsQuery,
	useEmployerPostsQuery,
	useCityPostsQuery,
	useSignedUserPostsQuery,
	useWorkerPostDetailsQuery,
	useMyProfileQuery,
	useUpdateProfileMutation,
	useAddUserMutation,
	useAddWorkerPostMutation,
	useAddEmployerPostMutation,
	// useUpdateInvoiceMutation,
	// useDeleteInvoiceMutation,
} = invoiceApi;
