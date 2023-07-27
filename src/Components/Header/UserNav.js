import React from "react";
import { useSelector } from "react-redux";
import { localServ } from "../../service/localStoreService";

export default function UserNav() {
  let user = useSelector((state) => state.userSlice.userInfo);
  let btnClass = "px-5 py-1 rounded-lg ";
  let handleLogout = () => {
    localServ.removeUser();
    window.location.reload();
  };
  let renderContent = () => {
    if (user) {
      //đã đăng nhập
      return (
        <>
          <span
            style={{
              backgroundColor: "rgb(200,232,188)",
              background:
                "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
              opacity: 0.8,
              color: "black",
            }}
            className={btnClass}
          >
            {user.hoTen}
          </span>
          <button
            style={{
              backgroundColor: "rgb(200,232,188)",
              background:
                "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
              opacity: 0.8,
              color: "black",
            }}
            onClick={handleLogout}
            className={btnClass}
          >
            Log out
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={btnClass}
          >
            Log in
          </button>
          <button
            onClick={() => {
              window.location.href = "/register";
              localStorage.clear("signUp");
            }}
            className={btnClass}
          >
            Register
          </button>
        </>
      );
    }
  };
  return <div className="flex items-center space-x-5">{renderContent()}</div>;
}
