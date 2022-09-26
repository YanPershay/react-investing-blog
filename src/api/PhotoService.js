import axios from "axios";

export default class PhotoService {
  static async getAllPhotos(limit = 5, currentPage = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: limit,
          _page: currentPage,
        },
      }
    );

    return response;
  }
}
