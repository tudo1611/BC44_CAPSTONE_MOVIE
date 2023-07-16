import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { Meta } = Card;
export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08")
      .then((res) => {
        //   console.log("res: ", res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  let renderMovieList = () => {
    return movieArr.map(({ hinhAnh, tenPhim, maPhim }) => {
      return (
        <Card
          key={maPhim}
          className="shadow-xl mt-10"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img className="h-80 object-cover" alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} className="text-center" />
          <NavLink
            className="w-full mt-3 inline-block text-center rounded py-2 bg-green-400 text-black transition duration-500 cursor-pointer hover:scale-75"
            to={`/detail/${maPhim}`}
          >
            Đặt Vé
          </NavLink>
        </Card>
      );
    });
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container" style={{ width: "70%", margin: "40px auto" }}>
      <button className="px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2">
        Phim Đang Chiếu
      </button>
      <button
        type="button"
        className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
      >
        Phim Sắp Chiếu
      </button>
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
}
