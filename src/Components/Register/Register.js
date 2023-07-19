import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import { NavLink } from "react-router-dom";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { localServ } from "../../service/localStoreService";
import "../../Pages/Checkout/Checkout.module.css";
import { setUserRegis } from "../../redux/regisSlice";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const onFinish = (values) => {
    console.log("values: ", values);

    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        console.log("res: ", res);
        dispatch(setUserRegis(res.data.content));
        // localServ.setLogin(res.data.content);
        console.log("Success:", values);
      })
      .catch((err) => {
        console.log("err: ", err);
      });

    //     window.location.reload();
  };
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);

  return (
    <div>
      {showHome ? (
        <HomePage />
      ) : show ? (
        <LoginPage />
      ) : (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundImage: "url('./bgmovie.jpg')",
            backgroundSize: "100%",
          }}
          className="bg-green-300 h-screen w-screen flex flex-col items-center justify-center"
        >
          <div className=" bg-white w-80 rounded-2xl py-5 flex flex-col items-center justify-center">
            <h3
              className="text-green-600 mb-5"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              REGISTER
            </h3>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="soDT"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Group code"
                name="groupCode"
                rules={[
                  {
                    required: true,
                    message: "Please input your group code!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please input your fullname!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  className="bg-green-500"
                  style={{ fontWeight: "bold" }}
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <p className="mt-3">
              Already have an account?{" "}
              <NavLink to={"/login"}>
                <span
                  className="text-green-500 ml-5"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Sign in
                </span>
              </NavLink>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Register;
