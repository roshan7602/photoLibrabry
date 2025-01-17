
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import albumsApi from "./apis/albumApi";
import photoApi from "./apis/photoApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photoApi.reducerPath]: albumsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photoApi.middleware)
    }
})

setupListeners(store.dispatch)


export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';

export { useFetchAlbumsQuery, 
    useAddAlbumMutation,
    useRemoveAlbumMutation } from './apis/albumApi'

export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photoApi'
