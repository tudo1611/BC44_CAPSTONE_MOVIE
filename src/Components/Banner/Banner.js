import React, { useEffect, useState } from "react";
import { https } from "../../service/config";
import { Carousel } from "antd";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
export default function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        console.log("res: ", res);
        setBanner(res.data.content);
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
            className="bg-cover"
            style={{ ...contentStyle, backgroundImage: `url(${hinhAnh})` }}
          >
            <img src={hinhAnh} className="w-full  opacity-0" alt={hinhAnh} />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Carousel effect="fade">{renderBanner()}</Carousel>
    </div>
  );
}
