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
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
      .then((res) => {
        console.log("resListMovie: ", res);
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
            bodyStyle={{ padding: 0 }}
            size="default"
            key={maPhim}
            className="shadow-xl mt-10 rounded"
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
              className="text-center p-2 bg-gray-300"
              description={
                moTa.length > 20 ? (
                  <span>{moTa.slice(0, 20)}...</span>
                ) : (
                  <span>{moTa}</span>
                )
              }
            />
            <NavLink
              className="w-full inline-block text-center py-2 m-0 bg-green-400 text-black transition duration-500 cursor-pointer hover:scale-75"
              to={`/detail/${maPhim}`}
            >
              Detail
            </NavLink>
          </Card>
        );
      });
  };
  const settings = {
    className: "center variable-width",
    centerMode: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
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
    <div className="container" style={{ width: "70%", margin: "40px auto" }}>
      <br />

      <Input
        className="search w-80"
        placeholder="Search film by name..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
}
