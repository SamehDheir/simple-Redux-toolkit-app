import axios from "axios";
import { errorUser, startUser, succesUser } from "./userSlice";

export const addUser = async (user, dispatch) => {
  dispatch(startUser());

  try {
    const res = await axios.post("http://localhost:9000/api/user", user);
    dispatch(succesUser(res.data));
  } catch (error) {
    dispatch(errorUser());
  }
};
