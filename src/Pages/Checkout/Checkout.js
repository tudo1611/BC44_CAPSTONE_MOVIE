import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import { localServ } from "../../service/localStoreService";
import { NavLink, useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../service/config";
import LoginPage from "../LoginPage/LoginPage";
export default function Checkout() {
  let user = useSelector((state) => state.userSlice.userInfo);

  return (
    // <div className="mt-5 min-h-screen">
    //   <div className="grid grid-cols-4 gap-4">
    //     <div className="col-span-3">
    //       <div className="flex flex-col items-center mt-5">
    //         <div className="bg-black" style={{ width: "75%", height: 10 }}>
    //           <p className="text-center mt-5">Màn hình</p>
    //         </div>
    //         <div className={`${style["trapezoid"]}`}></div>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
    //       <hr />
    //       <h3 className="text-xl">Lật mặt 48h</h3>
    //       <p>Địa điểm: BDH Start - Vincom 3/2</p>
    //       <p>Ngày chiếu: 25/04/2021 - 12:05 RẠP 5</p>
    //       <hr />
    //       <div className="flex flex-row my-3">
    //         <div className="w-4/5">
    //           <span className="text-red-400 text-lg">Ghế</span>
    //         </div>
    //         <div className="text-right col-span-1">
    //           <span className="text-green-800 text-lg">0đ</span>
    //         </div>
    //       </div>
    //       <hr />
    //       <div className="my-3">
    //         <i>Email</i>
    //         <br />
    //         {user.email}
    //       </div>
    //       <hr />
    //       <div className="my-3">
    //         <i>Phone</i>
    //         <br />
    //         {user.soDT}
    //       </div>
    //       <hr />
    //       <div className="h-2/3 flex flex-col justify-end items-center">
    //         <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
    //           ĐẶT VÉ
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./bgmovie.jpg')",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7",
        }}
      >
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div
              className="text-white text-center"
              style={{ fontSize: "35px", fontWeight: "bold" }}
            >
              MOVIE IN HANDS
            </div>
            <div
              className="mt-5"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className="screen"></div>
            </div>
            <div
              className="text-center text-white"
              style={{ fontSize: "25px" }}
            >
              Screen
            </div>
          </div>
          <div>
            <div
              className="text-white text-center"
              style={{ fontSize: "35px", fontWeight: "bold" }}
            >
              DANH SÁCH GHẾ
            </div>
            <div className="text-white" style={{ position: "relative" }}>
              <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
              <hr />
              <h3 className="text-xl">Lật mặt 48h</h3>
              <p>Địa điểm: BDH Start - Vincom 3/2</p>
              <p>Ngày chiếu: 25/04/2021 - 12:05 RẠP 5</p>
              <hr />
              <div className="flex flex-row my-3">
                <div className="w-4/5">
                  <span className="text-red-400 text-lg">Ghế</span>
                </div>
                <div className="text-right col-span-1">
                  <span className="text-green-800 text-lg">0đ</span>
                </div>
              </div>
              <hr />
              <div className="my-3">
                <i>Email</i>
                <br />
                {user.email}
              </div>
              <hr />
              <div className="my-3">
                <i>Phone</i>
                <br />
                {user.soDT}
              </div>
              <hr />
              <div
                className="h-2/3 flex flex-col justify-end items-center"
                style={{ position: "absolute", marginBottom: 0, width: "100%" }}
              >
                <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
                  ĐẶT VÉ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
