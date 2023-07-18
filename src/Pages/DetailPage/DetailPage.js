import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../service/config";
import { Progress, Rate } from "antd";
import "../DetailPage/Detail.css";
import { useDispatch } from "react-redux";
import { setDetail } from "../../redux/detailSlice";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();
  //useParams() => lấy url hiện tại của browser

  let { id } = useParams();
  useEffect(() => {
    console.log(id);
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
  return (
    <div
      style={{
        backgroundImage: `url(${movie.hinhAnh})`,
        backgroundPosition: "center",
        objectFit: "cover",
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
          <p style={{ color: "red" }}>Ngày Khởi Chiếu: {movie.ngayKhoiChieu}</p>
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
      </div>
    </div>
  );
}
