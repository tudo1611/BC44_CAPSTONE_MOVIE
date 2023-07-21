import React from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { localServ } from "../../service/localStoreService";
import "./Login.css";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LoginTablet() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //login
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log("res: ", res);
        message.success("Đăng nhập thành công");
        //đẩy data lên redux => rerender layout
        dispatch(setLogin(res.data.content));
        // lưu xuống localStorage => giữ trạng thái đăng nhập sau khi load trang
        localServ.setUser(res.data.content);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        //redux
        //localStorage
      })
      .catch((err) => {
        console.log("err: ", err);
        message.error("Đăng nhập thất bại");
      });
  };
  return (
    <div
      style={{
        backgroundPosition: "center",
        objectFit: "cover",
        backgroundImage: "url('./bgLoginPage1.jpg')",
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
      className="p-10 flex h-screen w-screen items-center justify-center"
    >
      <div
        style={{
          backgroundColor: "rgb(200,232,188)",
          background:
            "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
          opacity: 0.8,
        }}
        className="flex flex-col justify-center col-span-2 mx-20 p-10 rounded-lg"
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          style={{ fontWeight: "bold" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              style={{ fontWeight: "bold" }}
              className="bg-green-400 hover:bg-white"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
