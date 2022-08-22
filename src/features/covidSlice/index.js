import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCovidData = createAsyncThunk(
  "covid/getalldata",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://covidnigeria.herokuapp.com/api");
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  covidResults: [],
  covidResultsStates: [],
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCovidData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCovidData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.covidResultsStates = action.payload.data.states;
        state.covidResults = action.payload.data;
      })
      .addCase(getCovidData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = covidSlice.actions;
export default covidSlice.reducer;
