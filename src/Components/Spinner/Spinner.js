import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div
      style={{ backgroundColor: "#2a9d8f" }}
      className="h-screen w-screen top-0 left-0 fixed z-20 flex justify-center items-center"
    >
      <RingLoader color="#36d7b7" size={200} speedMultiplier={1.5} />
    </div>
  ) : (
    <></>
  );
}
