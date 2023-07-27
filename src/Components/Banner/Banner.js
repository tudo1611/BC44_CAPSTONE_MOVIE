import React, { useEffect, useState } from "react";
import { https } from "../../service/config";
import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import { addBanner } from "../../redux/bannerSlice";
const contentStyle = {
  height: "700px",
  color: "#fff",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
export default function Banner() {
  const [banner, setBanner] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        setBanner(res.data.content);
        dispatch(addBanner(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  let renderBanner = () => {
    return banner.map(({ hinhAnh, maBanner }) => {
      return (
        <div key={maBanner}>
          <div
            style={{
              ...contentStyle,
              backgroundImage: `url(${hinhAnh})`,
              width: "100%",
              height: "100vh",
            }}
          >
            <img
              src={hinhAnh}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div
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
      <Carousel style={{ margin: 0 }} effect="fade">
        {renderBanner()}
      </Carousel>
    </div>
  );
}
