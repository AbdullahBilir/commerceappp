import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
  baseUrl: "http://localhost:1337",
};

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await fetch("http://localhost:1337/api/products?populate=*");
  const res = await response.json();
  return res;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = "fetch işlemi yapılır ken hata oluştu";
    });
  },
});

export default homeSlice.reducer;
