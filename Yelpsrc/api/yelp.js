import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DoFHqFg_28OfO52KiIgHJIH5KaHprIU9B390YnhKT1DC4eRTuZIompUl4XvfeOeli41fSio1Snk73BKBBFFEICTXb9hyhK8DVxAaWPsz5eFHoB3B9xOwiZfnIYREYnYx",
  },
});
