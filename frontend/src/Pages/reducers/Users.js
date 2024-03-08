const INITIAL_STATE = {
  userList: [],
};
const Users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USERS":
      return { ...state, userList: action.payload };
      case "USERS_DELETE":
        return {...state, userList:state.userList.filter((item)=>item._id !==action.payload)}
    default:
      return state;
  }
};

export default Users