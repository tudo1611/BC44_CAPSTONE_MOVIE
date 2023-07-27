import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs } from "antd";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../redux/bookingSlice";
const onChange = (key) => {
  console.log(key);
};

export default function TabsMovieDesktop() {
  const [heThongRap, setHeThongRap] = useState([]);
  const dispatch = useDispatch();
  // /api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01
  useEffect(() => {
    // }
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07")
      .then((res) => {
        setHeThongRap(res.data.content);
        dispatch(setBooking(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.slice(0, 8).map((phim) => {
      return (
        <div key={phim.maPhim} className="p-5 grid grid-cols-5 gap-3">
          <img
            src={phim.hinhAnh}
            className="h-40 w-32 object-cover col-span-1"
            alt=""
          />
          <div className="col-span-4">
            <div className="grid grid-cols-4 w-full gap-5">
              {phim.lstLichChieuTheoPhim
                .slice(0, 8)
                .map(({ maLichChieu, ngayChieuGioChieu }) => {
                  //moment js
                  return (
                    <NavLink
                      style={{
                        backgroundColor: "rgb(200,232,188)",
                        background:
                          "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
                        opacity: 0.8,
                        color: "black",
                      }}
                      to={`/checkout/${maLichChieu}`}
                      key={maLichChieu}
                      className="  py-1 rounded text-center hover:scale-110 transition duration-500 "
                    >
                      {moment(ngayChieuGioChieu).format("DD/MM/YY-hh:mm")}
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  };

  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      return {
        key: index,
        label: <img className="w-10" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={heThong.lstCumRap.slice(0, 6).map((cumRap, index) => {
              return {
                key: index,
                label: (
                  <div className="text-left w-60 whitespace-normal">
                    <p className="text-green-600 font-bold">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate text-white">{cumRap.diaChi}</p>
                  </div>
                ),
                children: renderDsPhim(cumRap.danhSachPhim),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
