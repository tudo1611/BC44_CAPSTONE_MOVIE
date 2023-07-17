import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import { NavLink } from "react-router-dom";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setSignUp } from "../../redux/userSlice";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    https
      .post("/api/QuanLyNguoiDung/DangKy")
      .then((res) => {
        console.log("res: ", res);
        dispatch(setSignUp(res.data.content));
      })
      .catch((err) => {
        console.log("errRegister: ", err);
      });
  }, []);

  const registerHandle = () => {
    console.log(name, email, password);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("signUp", email);
    alert("Account created successfully!");

    window.location.reload();
  };
  return (
    <div>
      {showHome ? (
        <HomePage />
      ) : show ? (
        <LoginPage />
      ) : (
        <div className="bg-green-300 h-screen w-screen flex flex-col items-center justify-center">
          <div className="container bg-white rounded-2xl p-10 flex flex-col items-center justify-center">
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
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button onClick={registerHandle} htmlType="submit">
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
