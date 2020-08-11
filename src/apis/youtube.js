import axios from "axios";

export const htmlDecode =(input)=> {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

const KEY = process.env.REACT_APP_KEY;

export const baseParams = {
  part: 'snippet',
  type: 'video',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
 
});
