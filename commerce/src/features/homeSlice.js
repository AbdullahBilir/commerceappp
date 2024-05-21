import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import slider from "react-slick/lib/slider";

const initialState = {
  loading: false,
  error: null,
  products: [],
  categories: [],
  card: [],
  number: [],
  ProductsCategory: ["Sweatshirt", "Gömlek", "Ceket", "Etek", "Çocuk"],
};

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await fetch(`http://localhost:1337/api/products?populate=*`);
  const res = await response.json();
  return res;
});

export const filterCategory = createAsyncThunk(
  "filterCategory",
  async (def, thunkAPI) => {
    const state = thunkAPI.getState();
    let queryParams = "";
    if (state.home.card.length > 0) {
      const cardItem = state.home.card.map(
        (eleman) => `&[filters][category][$eq]=${eleman}`
      );
      queryParams = cardItem.join("&");
    }
    if (state.home.number.length > 0) {
      queryParams += `&[filters][Pirice][$lte]=${state.home.number}`;
    }
    const response = await fetch(
      `http://localhost:1337/api/products?populate=*${queryParams}`
    );
    const res = await response.json();
    return res;
  }
);

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
  reducers: {
    filterItems: (state, action) => {
      state.card.push(action.payload.item);
    },
    removeİtems: (state, action) => {
      state.card = state.card.filter((item) => item !== action.payload.item);
    },
    filterPrice: (state, action) => {
      state.number = action.payload.value;
    },
  },
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
    builder.addCase(filterCategory.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(filterCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(filterCategory.rejected, (state) => {
      state.loading = false;
      state.error = "fetch işlemi yapılır ken hata oluştu";
    });
  },
});

export const { filterItems, removeİtems, filterPrice } = homeSlice.actions;

export default homeSlice.reducer;
