import httpAxios from "../helper/axios";
const currentUser = async () => {
  try {
    const res = await httpAxios.get("/api/current");
    return res.data;
  } catch (error) {
    console.log(`new user can not created ${error}`);
  }
};
export default currentUser;
