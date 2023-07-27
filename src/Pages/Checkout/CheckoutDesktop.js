import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { CloseOutlined, CheckOutlined, HomeOutlined } from "@ant-design/icons";
import "./Checkout.css";
import { https } from "../../service/config";
import { NavLink, useParams } from "react-router-dom";
import { setBooking } from "../../redux/bookingSlice";
import { selectItem, deselectItem } from "../../redux/selectItemSlice";
import { setTicketBooking } from "../../redux/ticketBookingSlice";
import { message, Tabs } from "antd";
import { setHistoryBooking } from "../../redux/historyBookingSlice";
import moment from "moment";
import _ from "lodash";
function CheckoutDesktop() {
  const user = useSelector((state) => state.userSlice.userInfo); //user = userInfo
  const selectedSeat = useSelector((state) => state.selectItem.selectedSeat);
  const { ticketDetail } = useSelector((state) => state.setBooking);
  const [checkout, setCheckout] = useState({});
  const { thongTinPhim, danhSachGhe } = ticketDetail;
  let { maLichChieu } = useParams();
  const detailBooking = {
    maLichChieu: 0,
    danhSachVe: [
      {
        maGhe: 0,
        giaVe: 0,
        taiKhoanNguoiDat: "",
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((res) => {
        setCheckout(res.data.content);
        dispatch(setBooking(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  const handleItemClick = (item) => {
    if (selectedSeat.includes(item)) {
      dispatch(deselectItem(item));
    } else {
      dispatch(selectItem(item));
    }
  };

  const renderSeats = () => {
    return danhSachGhe?.map((item, index) => {
      let classGheVip = item.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = item.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";

      let indexGheDD = selectedSeat.findIndex(
        (gheDD) => gheDD.maGhe === item.maGhe
      );
      if (indexGheDD !== -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              handleItemClick(item);
            }}
            disabled={item.daDat}
            className={`ghe ${classGheVip}${classGheDangDat} ${classGheDaDat}   text-center`}
            key={index}
          >
            {item.daDat ? (
              <CloseOutlined style={{ marginBottom: 7.5 }} />
            ) : (
              item.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div
      className="bg-fixed"
      style={{
        backgroundImage: `url(${thongTinPhim?.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-3 glassmorphism h-screen w-screen">
        <div className="col-span-2 text-center">
          <div className="text-center text-white" style={{ fontSize: "15px" }}>
            Screen
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <div className={`${style["screen"]}`}></div>
          </div>
          <div>{renderSeats()}</div>
          <div className="mt-3 flex justify-center">
            <table className="divide-y divide-gray-200 w-2/3">
              <thead>
                <tr className="text-green-500">
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế Vip</th>
                  <th>Ghế đã được đặt</th>
                </tr>
              </thead>
              <tbody className="p-3">
                <td>
                  <button className="ghe mt-3 text-center">
                    <CheckOutlined />
                  </button>
                </td>
                <td>
                  <button className="ghe mt-3 gheDangDat text-center">
                    <CheckOutlined />
                  </button>
                </td>
                <td>
                  <button className="ghe mt-3 gheVip text-center">
                    <CheckOutlined />
                  </button>
                </td>
                <td>
                  <button className="ghe mt-3 gheDaDat text-center">
                    <CheckOutlined />
                  </button>
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-white" style={{ position: "relative" }}>
          <h3 className="text-green-400 text-center">Ticket Detail</h3>
          <hr />
          <h3
            className="text-green-400 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            {selectedSeat
              .reduce((total, item, index) => {
                return (total += item.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <hr />
          <h3
            className="text-green-400 text-2xl text-center"
            style={{ fontWeight: "bold" }}
          >
            {thongTinPhim?.tenPhim}
          </h3>
          <p>Địa điểm: {thongTinPhim?.diaChi} </p>
          <p>Cụm Rạp: {thongTinPhim?.tenCumRap}</p>
          <p>Tên Rạp: {thongTinPhim?.tenRap}</p>
          <p>Ngày chiếu: {thongTinPhim?.ngayChieu}</p>
          <p>Giờ chiếu: {thongTinPhim?.gioChieu}</p>
          <hr />
          <div className="flex flex-row my-3">
            <div className="w-4/5">
              <span className="text-red-600 text-lg">Ghế</span>
              {selectedSeat.map((gheDD, index) => {
                return (
                  <span key={index} className="text-green-300 text-xl">
                    {" "}
                    {gheDD.stt}
                  </span>
                );
              })}
            </div>
            <div className="text-right col-span-1">
              <span className="text-red-700 text-lg">
                {selectedSeat
                  .reduce((total, item, index) => {
                    return (total += item.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <hr />
          <div className="my-3">
            <i>Email</i>
            <br />
            {user.email}
          </div>
          <hr />
          <div className="my-3">
            <i>Phone</i>
            <br />
            {user.soDT}
          </div>
          <hr />
          <div
            className=" flex flex-col justify-end items-center"
            style={{ position: "absolute", marginBottom: 0, width: "100%" }}
          >
            <div
              onClick={() => {
                detailBooking.maLichChieu = maLichChieu;
                detailBooking.danhSachVe = selectedSeat;

                https
                  .post(`/api/QuanLyDatVe/DatVe`, detailBooking)
                  .then((res) => {
                    console.log("res: ", res);
                    dispatch(setTicketBooking(detailBooking));
                    console.log("detailBooking: ", detailBooking);
                    message.success(
                      "Đặt vé thành công, xem chi tiết trang kết quả đặt vé"
                    );
                  })
                  .catch((err) => {
                    console.log("err: ", err);
                  });
              }}
              className="bg-green-500 text-white w-full cursor-pointer text-center py-3 font-bold text-2xl"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KetQuaDatVe() {
  const dispatch = useDispatch();
  const historyBooking = useSelector(
    (state) => state.setHistoryBooking.historyBooking
  );
  const user = useSelector((state) => state.userSlice.userInfo); //user = userInfo
  useEffect(() => {
    https
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log("res: ", res);
        dispatch(setHistoryBooking(res.data.content));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  const renderTicketItem = () => {
    return historyBooking.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div key={index} className="p-2 lg:w-1/2 md:w-1/2 w-full">
          <div
            style={{
              backgroundColor: "rgb(200,232,188)",
              background:
                "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
              opacity: 0.8,
              color: "black",
            }}
            className="h-full flex items-center border-gray-200 border p-4 rounded-lg "
          >
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow text-left break-all ... ">
              <h2 className=" title-font font-medium">{ticket.tenPhim}</h2>
              <p>
                Giờ chiếu: {moment(ticket.ngayDat).format("hh:mm A")} - Ngày
                chiếu: {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p>Địa điểm: {seats.tenHeThongRap} </p>
              <p>Tên Rạp: {seats.tenCumRap} </p>
              <div>
                Ghế:
                {ticket.danhSachGhe.map((ghe, index) => {
                  return (
                    <span className="mx-1" key={index}>
                      {ghe.tenGhe}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-400">
              LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
        </div>
      </section>
    </div>
  );
}

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "01",
    label: `01 CHỌN GHẾ VÀ THANH TOÁN `,
    children: <CheckoutDesktop />,
  },
  {
    key: "02",
    label: `02 KẾT QUẢ ĐẶT VÉ`,
    children: <KetQuaDatVe />,
  },
];
const App = () => (
  <div>
    <Tabs
      tabBarStyle={{
        margin: 0,
        fontSize: 10,
        padding: 0,
        backgroundColor: "rgb(200,232,188)",
        background:
          "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
        opacity: 0.8,
      }}
      size="small"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
    <NavLink
      to={"/"}
      style={{ position: "absolute", right: "50px", top: "5px" }}
    >
      <HomeOutlined
        className="text-gray-600"
        style={{
          fontSize: "25px",
        }}
      />
    </NavLink>
  </div>
);
export default App;
