import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
  categories: [],
  card: [],
};

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await fetch("http://localhost:1337/api/products?populate=*");
  const res = await response.json();
  return res;
});

export const fetchCards = createAsyncThunk("fetchCards", async () => {
  const response = await fetch("http://localhost:1337/api/cards?populate=*");
  const rest = await response.json();
  return rest;
});

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  const category = await fetch(
    "http://localhost:1337/api/categories?populate=*"
  );
  const categoryJson = await category.json();
  return categoryJson;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.loading = false;
      state.error = "fetch işlemi yapılır ken hata oluştu";
    });

    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.loading = false;
      state.error = "fetch işlemi yapılır ken hata oluştu";
    });

    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.card = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.loading = false;
      state.error = "fetch işlemi yapılır ken hata oluştu";
    });
  },
});

export default homeSlice.reducer;
