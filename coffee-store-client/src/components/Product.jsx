import React from "react";
import ImgAmericano from "../assets/5.png";
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Product = () => {
    return (
        <div className="">
            <div className="flex justify-around px-10 items-center gap-6 bg-[#F5F4F1] w-162">
                <img className="min-w-48" src={ImgAmericano} alt="" />
                <div className="space-y-2">
                    <p className="font-raleway text-[16px]">
                        <span className="text-[#1B1A1A] font-semibold">Name: </span>
                        <span className="text-[#5C5B5B]">Americano Coffee</span>
                    </p>
                    <p className="font-raleway text-[16px]">
                        <span className="text-[#1B1A1A] font-semibold">Chef: </span>
                        <span className="text-[#5C5B5B]">Mr. Matin Paul</span>
                    </p>
                    <p className="font-raleway text-[16px]">
                        <span className="text-[#1B1A1A] font-semibold">Price: </span>
                        <span className="text-[#5C5B5B]">890 Taka</span>

                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button
                        type="button"
                        className="btn btn-square bg-[#D2B48C] border-0 w-8 h-8"
                    >
                        <FaEye size={20} />
                    </button>
                    <button className="btn btn-square bg-[#3C393B] border-0 w-8 h-8">
                        <MdModeEditOutline size={20} />
                    </button>
                    <button
                        type="button"
                        className="btn btn-square bg-[#EA4744] border-0 w-8 h-8"
                    >
                        <MdDelete size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
