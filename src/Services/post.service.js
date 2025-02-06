import http from "../http-common";

const get = () => {
  return http.get("/posts");
}

const PostService = {
  get
}

export default PostService;