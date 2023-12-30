import React from "react";
import { FaEdit } from "react-icons/fa";

const UserHomeComp = () => {
  return (
    <div className="w-full flex justify-center ">
      {" "}
      <div className="flex flex-col justify-center space-y-10 m-10 w-full  ">
        <div className="font-semibold text-3xl">
          Welcome&nbsp;Back&nbsp;Abcd!
        </div>
        <div className="flex md:flex-row flex-col md:justify-around w-full  md:space-x-10 space-y-10 md:space-y-0 ">
          <div className="w-full md:w-1/2 h-64 md:h-64 bg-gradient-to-b from-blue-600 to-slate-300  rounded-3xl">
            <div className="flex justify-between h-full m-2  ">
              <div className="w-1/2  h-full rounded-md flex justify-center items-center  ">
                <img
                  src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"
                  className="h-44 w-40 flex justify-center border border-2 p-2 border-black  rounded-lg shadow-lg"
                ></img>
              </div>
              <div className="w-1/2  h-full rounded-md flex  text-right flex-col space-y-3 font-semibold p-4">
                <p className="text-5xl">302</p>
                <p className="text-3xl">Abcd Abcdabcd</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-64 bg-gradient-to-b from-blue-600 to-slate-300 rounded-3xl relative pb-4 pl-4">
            <div className="absolute top-5 right-5">
              <button className=" hover:bg-white  text-black p-1  rounded-md">
                {" "}
                <FaEdit size={24} />
              </button>
            </div>
            <div className="flex justify-center flex-col p-5 font-semibold space-y-4 mt-10">
              <div className="flex flex-row text-lg">
                {" "}
                <p className=" ">Students Phone : </p>
                <p className="ml-4"> 8937273628</p>
              </div>
              <div className="flex flex-row text-lg">
                {" "}
                <p className=" ">Address : </p>
                <p className="ml-4">dk,dowkdow,kdowo</p>
              </div>
              <div className="flex flex-row text-lg">
                {" "}
                <p className=" ">Local Guardian : </p>
                <p className="ml-4"> Mother Teresa</p>
              </div>
              <div className="flex flex-row text-lg">
                {" "}
                <p className=" ">Phone : </p>
                <p className="ml-4"> 8937273628</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-around w-full  md:space-x-10 space-y-10 md:space-y-0 ">
          <div className="w-full  h-64 md:h-64 bg-gradient-to-b from-blue-600 to-slate-300  rounded-3xl ">
            <div className="flex md:flex-row flex-col p-6 h-full space-x-5 ">
              <div className="bg-white w-1/3 rounded-3xl shadow-lg">
                <div className="flex justify-center items-center">
                  <div className="flex-col">
                    <p className="text-8xl">S3</p>
                    <p className="text-4xl">Semester</p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-1/3 rounded-3xl shadow-lg">hoi2</div>
              <div className="bg-white w-1/3 rounded-3xl shadow-lg">jpi3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomeComp;
