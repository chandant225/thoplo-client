import axios from "axios";
import Cookie from "js-cookie";

const withAuth = async () => {
  try {
    const token = Cookie.get("user-token") ? Cookie.get("user-token") : null;
    if (!token) {
      window.location.replace("/signin");
    }
    if(token){
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/user/check-auth`,
        {
          headers: {
            "user-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.login === false) {
        window.location.replace("/login");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default withAuth;
