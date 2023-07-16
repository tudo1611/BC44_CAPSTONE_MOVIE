import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Progress } from "antd";
export default function DetailPage() {
  const [movie, setMovie] = useState({});
  //useParams() => lấy url hiện tại của browser

  let { id } = useParams();
  useEffect(() => {
    console.log(id);
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log("res: ", res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <div className="container flex items-center justify-center space-x-5 pt-5">
      <div>
        <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>
          {movie.tenPhim}
        </h1>
        <p style={{ fontSize: "12px" }}>Desc: {movie.moTa}</p>
        <p>Ngày Khởi Chiếu: {movie.ngayKhoiChieu}</p>
      </div>
      <img src={movie.hinhAnh} width={300} alt="" />
      <Progress
        type="circle"
        percent={movie.danhGia * 10}
        format={(percent) => `${percent / 10} Điểm`}
      />
    </div>
  );
}
