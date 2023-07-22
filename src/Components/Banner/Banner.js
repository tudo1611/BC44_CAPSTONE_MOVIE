import React, { useEffect, useState } from "react";
import { https } from "../../service/config";
import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import { addBanner } from "../../redux/bannerSlice";
const contentStyle = {
  height: "600px",
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
        console.log("resBanner: ", res);
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
          <div style={{ ...contentStyle, backgroundImage: `url(${hinhAnh})` }}>
            <img src={hinhAnh} className="w-screen opacity-0" />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Carousel autoplay>{renderBanner()}</Carousel>
    </div>
  );
}
