import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Collections {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  is_nsfw: boolean;
  id: string;
  item: string;
}

interface CollectionsState {
  data: Collections[];
  loading: boolean;
  error: string | null;
}

const initialState: CollectionsState = {
  data: [],
  loading: true,
  error: null,
};

export const collectionsPics = createAsyncThunk("fetchData", async () => {
  try {
    const apiUrl = "https://api.opensea.io/api/v2/collections";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": "cfa2f65ed71240408595239cf85b14a6",
      },
    };

    const response = await axios.get(apiUrl, options);
    const result: Collections[] = response.data.collections.filter(
      (collection: Collections) =>
        collection.image_url !== "" && collection.is_nsfw === false
    );

    return result;
  } catch (error) {
    console.error("Error: ", error);
    if (error instanceof Error) {
      throw new Error(error?.message || "Error while fetching data");
    } else {
      throw new Error("Unknown error occurred");
    }
  }
});
const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(collectionsPics.pending, (state) => {
        state.loading = true;
      })
      .addCase(collectionsPics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(collectionsPics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export default collectionsSlice.reducer;
