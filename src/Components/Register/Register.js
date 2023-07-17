import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import HomePage from "../../Pages/HomePage/HomePage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import { NavLink } from "react-router-dom";
import { https } from "../../service/config";
import { useDispatch } from "react-redux";
import { setSignUp } from "../../redux/userSlice";
import { localServ } from "../../service/localStoreService";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const onFinish = (values) => {
    console.log(name, email, password, phone, groupCode, fullName);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phone", phone);
    localStorage.setItem("groupCode", groupCode);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("signUp", email);
    alert("Account created successfully!");

    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        console.log("res: ", res);
        dispatch(setSignUp(res.data.content));
        localServ.setUserSignUp(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
    console.log("Success:", values);

    window.location.reload();
  };
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);

  //   const registerHandle = () => {};
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
                label="Phone"
                name="soDT"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ]}
              >
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                <Input
                  value={groupCode}
                  onChange={(e) => setGroupCode(e.target.value)}
                />
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
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button htmlType="submit">Sign Up</Button>
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
