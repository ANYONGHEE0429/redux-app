enum AtctionType {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

interface Post {
  userid: number;
  id: number;
  title: string;
}

interface Action {
  type: AtctionType;
  payload: Post[];
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload];
    case "DELETE_POSTS":
      return state;
    default:
      return state;
  }
};
export default todos;
