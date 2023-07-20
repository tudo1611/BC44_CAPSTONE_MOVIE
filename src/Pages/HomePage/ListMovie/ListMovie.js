import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addMovies } from "../../../redux/movieSlice";
const { Meta } = Card;
export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08")
      .then((res) => {
        console.log("res: ", res);
        setMovieArr(res.data.content);
        dispatch(addMovies(res.data.content));
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
            <img className="h-60 object-cover" alt="example" src={hinhAnh} />
          }
        >
          <Meta title={tenPhim} className="text-center pb-2" />
          <NavLink
            className="w-full inline-block text-center py-2 bg-green-400 text-black transition duration-500 cursor-pointer hover:scale-75"
            to={`/detail/${maPhim}`}
          >
            Detail
          </NavLink>
        </Card>
      );
    });
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        className="px-8 py-3 font-semibold rounded bg-gray-300 text-gray-800"
      >
        Phim Sắp Chiếu
      </button>
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
}
