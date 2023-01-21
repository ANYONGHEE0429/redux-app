enum AtctionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface Action {
  type: AtctionType;
  text: string;
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    case "DELETE_TODO":
      return state;
    default:
      return state;
  }
};
export default todos;
