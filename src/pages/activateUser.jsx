import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../components/loader";

const ActivateUser = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const handleActivate = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/user/set-active/${token}`
      );
      if (response.data.error) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "error",
          title: response.data.error,
        });
        setLoading(false);
        window.location.replace("/signup");
       

      }
      if (response.data.message) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect to a new page
        // history.push("/new-page");
        setLoading(false);
        window.location.replace("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="text-center py-4">
        <div className="p-4">
          <p className="text-gray-600">
            Thank you for signing up with our website! Before you can start
            using your account, we need to verify your email address. To
            activate your account, please check your email inbox for a message
            from us. This email will contain a verification link. Click on the
            link to activate your account.
          </p>
        </div>

        <button
          onClick={handleActivate}
          className="bg-cyan-500 px-3 py-2 rounded text-white hover:bg-cyan-700 "
        >
          Activate account
        </button>
      </div>
      <div className="p-4 text-sm">
        <p> If you still can't find it,
            please contact our support team. Once your account is activated,
            you'll be able to log in and start using all the features of our
            website. Thank you for choosing our service!</p>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ActivateUser;
