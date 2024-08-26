import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoginUserMutation } from "../redux/api/authApi";
import { setUser } from "../redux/features/auth/authSlice";

interface LoginResponse {
  success: boolean;
  token?: string;
  message: string;
  error?: boolean;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  //   const { refetch } = useGetUserQuery();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const email = form.elements.namedItem("email") as HTMLInputElement;
      const password = form.elements.namedItem("password") as HTMLInputElement;
      const data = (await loginUser({
        email,
        password,
      }).unwrap()) as LoginResponse;
      if (data?.success) {
        const decodedToken = jwtDecode(data?.token as string);
        dispatch(setUser({ user: decodedToken, token: data?.token }));
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch();
        setTimeout(() => {
          navigate("/");
        }, 1000);
        return;
      }
      if (data.error) {
        return Swal.fire({
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-[#1A2234] p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Jolly Wallpaper
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-white font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg focus:outline-none bg-[#232E46] text-white"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-white font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-[#232E46] text-white">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="focus:outline-none w-full bg-transparent text-white"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className=" text-secondary"
              >
                {passwordVisible ? (
                  <IoIosEyeOff className="text-white" />
                ) : (
                  <IoIosEye className="text-white" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition uppercase mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
