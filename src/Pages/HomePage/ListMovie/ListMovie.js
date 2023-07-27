import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Card, Input } from "antd";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addMovies } from "../../../redux/movieSlice";
import ReactPlayer from "react-player";
const { Meta } = Card;
export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07")
      .then((res) => {
        setMovieArr(res.data.content);
        dispatch(addMovies(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  let renderMovieList = () => {
    return movieArr
      .filter((movie) => movie.tenPhim.toLowerCase().includes(query))
      .map(({ hinhAnh, tenPhim, maPhim, moTa, trailer }) => {
        return (
          <Card
            size="small"
            key={maPhim}
            className="mt-10 rounded border-none"
            cover={
              <ReactPlayer
                muted={true}
                playing={true}
                controls={true}
                light={`${hinhAnh}`}
                width={"100%"}
                height={270}
                url={trailer}
              />
            }
          >
            <Meta
              style={{ fontSize: "12px" }}
              title={tenPhim}
              className="text-center p-2 rounded  border-transparent"
              description={
                moTa.length > 20 ? (
                  <span>{moTa.slice(0, 20)}...</span>
                ) : (
                  <span>{moTa}</span>
                )
              }
            />
            <NavLink
              style={{
                backgroundColor: "rgb(200,232,188)",
                background:
                  "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
                opacity: 0.8,
                color: "black",
              }}
              className="w-full inline-block text-center py-2 m-0 rounded  transition duration-500 cursor-pointer hover:scale-75"
              to={`/detail/${maPhim}`}
            >
              Detail
            </NavLink>
          </Card>
        );
      });
  };
  const settings = {
    className: "container ",
    centerMode: false,
    infinite: false,
    centerPadding: "30px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          rows: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div
      className="py-10 "
      style={{
        width: "100%",
        margin: "0 auto",
        backgroundPosition: "center",
        objectFit: "cover",
        backgroundImage: "url('./bgLoginPage1.jpg')",
        backgroundSize: "cover",
        boxShadow: " inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
      }}
    >
      <br />

      <Input
        className="search w-80 ml-32"
        placeholder="Search film by name..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
}
