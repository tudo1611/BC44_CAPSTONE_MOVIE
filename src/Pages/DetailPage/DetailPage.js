import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Progress, Rate, Tabs } from "antd";
import "../DetailPage/Detail.css";
import { useDispatch } from "react-redux";
import { setDetail } from "../../redux/detailSlice";
import moment from "moment/moment";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();

  //useParams() => lấy url hiện tại của browser

  let { id } = useParams();
  // console.log("id", id);
  useEffect(() => {
    https
      .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((res) => {
        console.log("res: ", res);
        setMovie(res.data.content);
        dispatch(setDetail(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  console.log("movie", movie);

  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundPosition: "center",
      }}
    >
      <div className="glassmorphism px-32 grid grid-cols-4 items-center justify-center space-x-10 py-24">
        <img src={movie.hinhAnh} width={200} alt="" className="col-span-1" />
        <div className="col-span-2">
          <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>
            {movie.tenPhim}
          </h1>

          <p className="my-5" style={{ fontSize: "12px", fontStyle: "italic" }}>
            Desc: {movie.moTa}
          </p>
          <p style={{ color: "red", marginBottom: 20 }}>
            Ngày Khởi Chiếu: {movie.ngayKhoiChieu}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 style={{ color: "yellow", fontWeight: "bold", fontSize: 15 }}>
            Đánh giá
          </h1>
          <h1 className="text-green-400 text-2xl mb-3">
            <Rate
              allowHalf
              value={movie.danhGia / 2}
              style={{ color: "#78ed78", fontSize: 20 }}
            />
          </h1>

          <Progress
            type="circle"
            percent={movie.danhGia * 10}
            format={(percent) => `${percent / 10} Điểm`}
          />
        </div>
        <Tabs
          className="mt-3"
          tabPosition="left"
          items={movie.heThongRapChieu
            ?.slice(0, 3)
            .map(({ logo, cumRapChieu, maHeThongRap }) => {
              return {
                key: maHeThongRap,
                label: (
                  <div className="gird grid-cols-2">
                    <img className=" w-10 " src={logo} />
                  </div>
                ),
                children: (
                  <Tabs
                    tabPosition="left"
                    defaultActiveKey="1"
                    items={cumRapChieu.map(
                      ({ tenCumRap, maCumRap, lichChieuPhim, diaChi }) => {
                        return {
                          key: maCumRap,
                          label: (
                            <div className="text-left w-60 whitespace-normal">
                              <p className="text-green-600 font-bold">
                                {tenCumRap}
                              </p>
                              <p className="truncate">{diaChi}</p>
                            </div>
                          ),
                          children: (
                            <Tabs
                              tabPosition="left"
                              defaultActiveKey="1"
                              items={lichChieuPhim
                                .slice(0, 8)
                                .map(({ maLichChieu, ngayChieuGioChieu }) => {
                                  return {
                                    key: maLichChieu,
                                    label: (
                                      <NavLink
                                        to={`/checkout/${maLichChieu}`}
                                        key={maLichChieu}
                                        className=" bg-green-400 p-2 rounded text-white h-10 leading-10 text-center "
                                      >
                                        {moment(ngayChieuGioChieu).format(
                                          "DD/MM/YY-hh:mm"
                                        )}
                                      </NavLink>
                                    ),
                                  };
                                })}
                            />
                          ),
                        };
                      }
                    )}
                  />
                ),
              };
            })}
        />
      </div>
    </div>
  );
}
