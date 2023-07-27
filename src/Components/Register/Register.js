import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import { NavLink } from "react-router-dom";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
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
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);
  const onFinish = (values) => {
    console.log("values: ", values);
    if (values) {
      localServ.setUser(values);
      localServ.getUser(values);

      https
        .post("/api/QuanLyNguoiDung/DangKy", values)
        .then((res) => {
          console.log("res: ", res);
          dispatch(setUserRegis(res.data.content));
          console.log("Success:", values);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
      window.location.reload();
    }
  };
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
            backgroundImage: "url('./bgRes.jpg')",
            backgroundSize: "100%",
          }}
          className=" flex flex-col items-end justify-center "
        >
          <div
            style={{
              position: "absolute",
              right: 70,
              backgroundColor: "rgb(200,232,188)",
              background:
                "linear-gradient(45deg, rgba(200,232,188,1) 18%, rgba(11,238,83,0.9360994397759104) 46%, rgba(66,224,185,0.9529061624649859) 76%)",
              opacity: 0.8,
            }}
            className=" w-80 rounded-2xl py-3 flex flex-col justify-center items-center"
          >
            <h3
              className="mb-3"
              style={{ fontSize: "30px", fontWeight: "bold", color: "#e71d36" }}
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
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#e71d36",
                    color: "#2ec4b6",
                  }}
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
                  className=" ml-5"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#e71d36",
                  }}
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
