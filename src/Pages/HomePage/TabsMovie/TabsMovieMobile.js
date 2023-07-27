import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs } from "antd";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
const onChange = (key) => {
  console.log(key);
};

export default function TabsMovieMobile() {
  const [heThongRap, setHeThongRap] = useState([]);
  const dispatch = useDispatch();
  // /api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01
  useEffect(() => {
    // }
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07")
      .then((res) => {
        // console.log("res: ", res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.slice(0, 8).map((phim) => {
      return (
        <div key={phim.maPhim}>
          <img src={phim.hinhAnh} className="h-40 w-32 object-cover" alt="" />
          <div>
            <div className="my-3 grid grid-cols-4 w-full gap-3">
              {phim.lstLichChieuTheoPhim
                .slice(0, 8)
                .map(({ maLichChieu, ngayChieuGioChieu }) => {
                  //moment js
                  return (
                    <NavLink
                      to={`/checkout/${maLichChieu}`}
                      key={maLichChieu}
                      className=" bg-green-400 text-white rounded text-center "
                      style={{ fontSize: 10, padding: 5 }}
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
      console.log(heThong);
      return {
        key: index,
        label: <img className="w-10" src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="top"
            defaultActiveKey="1"
            items={heThong.lstCumRap.slice(0, 6).map((cumRap, index) => {
              console.log("cumRap: ", cumRap);

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
        tabPosition="top"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
