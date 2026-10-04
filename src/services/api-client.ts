import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3de74d9f32e148eaa7a74f31b76f37e9",
  },
});
