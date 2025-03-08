import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.opensea.io/api/v2",
});

export default axiosInstance;


// export const fetchMovies = createAsyncThunk(
//   "movies/fetchMovies",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
//       );
//       return response.data.results; 
//     } catch (error) {
      
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );
