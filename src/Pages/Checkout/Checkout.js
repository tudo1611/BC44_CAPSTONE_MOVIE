import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { CloseOutlined } from "@ant-design/icons";
import "./Checkout.css";
import { https } from "../../service/config";
import { useParams } from "react-router-dom";
import { setBooking, setDatGhe } from "../../redux/bookingSlice";
export default function Checkout() {
  const user = useSelector((state) => state.userSlice.userInfo);
  const { ticketDetail, danhSachGheDangDat } = useSelector(
    (state) => state.setBooking
  );
  let { maLichChieu } = useParams();
  const [checkout, setCheckout] = useState({});
  const { thongTinPhim, danhSachGhe } = ticketDetail;

  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((res) => {
        console.log("res_malichchieu: ", res);
        setCheckout(res.data.content);
        dispatch(setBooking(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  console.log(danhSachGheDangDat);
  const renderSeats = () => {
    return danhSachGhe.map((item, index) => {
      let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = item.daDat === true ? "gheDaDat" : "";
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(setDatGhe(item));
            }}
            disabled={item.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} text-center`}
            key={index}
          >
            {item.daDat ? (
              <CloseOutlined style={{ marginBottom: 7.5 }} />
            ) : (
              item.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${thongTinPhim.hinhAnh})`,
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
      }}
    >
      <div className="grid grid-cols-3 glassmorphism h-screen w-screen">
        <div className="col-span-2 text-center">
          <div
            className="text-white text-center"
            style={{ fontSize: "35px", fontWeight: "bold" }}
          >
            MOVIE IN HANDS
          </div>
          <div className="text-center text-white" style={{ fontSize: "25px" }}>
            Screen
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            <div className={`${style["screen"]}`}></div>
          </div>
          <div>{renderSeats()}</div>
        </div>
        <div>
          <div className="text-white" style={{ position: "relative" }}>
            <h3 className="text-green-400 text-center">Ticket Detail</h3>
            <hr />
            <h3
              className="text-green-400 text-2xl text-center"
              style={{ fontWeight: "bold" }}
            >
              {thongTinPhim.tenPhim}
            </h3>
            <p>Địa điểm: {thongTinPhim.diaChi} </p>
            <p>Cụm Rạp: {thongTinPhim.tenCumRap}</p>
            <p>Tên Rạp: {thongTinPhim.tenRap}</p>
            <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
            <p>Giờ chiếu: {thongTinPhim.gioChieu}</p>
            <hr />
            <div className="flex flex-row my-3">
              <div className="w-4/5">
                <span className="text-green-400 text-lg">Ghế</span>
              </div>
              <div className="text-right col-span-1">
                <span className="text-green-400 text-lg">0đ</span>
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
              className=" flex flex-col justify-end items-center"
              style={{ position: "absolute", marginBottom: 0, width: "100%" }}
            >
              <div className="bg-green-500 text-white w-full cursor-pointer text-center py-3 font-bold text-2xl">
                ĐẶT VÉ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
