import React from "react";
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Product = ({ coffee, coffeeList, setCoffeeList }) => {
    const handleCoffeeDelete = (id) => {
        console.log("Delete coffee with id: ", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //delete request to server
                fetch(`http://localhost:3002/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Deleted coffee response: ", data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            );
                            const remainingCoffees = coffeeList.filter(cof => cof._id !== id);
                            setCoffeeList(remainingCoffees);
                        }
                    });
            }
        });
    }
    return (
        // 1. 'w-full': Fills the grid cell (fixes the w-162 issue)
        // 2. 'flex-col sm:flex-row': Stack vertical on mobile, horizontal on tablet+
        // 3. 'p-6': Added padding for better spacing
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-6 bg-[#F5F4F1] rounded-lg shadow-sm w-full">

            {/* Image Section */}
            <div className="shrink-0">
                <img
                    // Responsive Image: Full width on mobile, fixed 48 (12rem) on desktop
                    // className="w-full h-56 sm:w-48 sm:h-48 object-cover rounded-md"
                    className="w-48 h-48 object-contain rounded-md bg-gray-200"
                    src={coffee.photo}
                    alt={coffee.name}
                />
            </div>

            {/* Text Details Section */}
            {/* Centered text on mobile, Left-aligned on desktop */}
            <div className="grow space-y-2 text-center sm:text-left">
                <p className="font-raleway text-base">
                    <span className="text-[#1B1A1A] font-semibold">Name: </span>
                    <span className="text-[#5C5B5B]">{coffee.name}</span>
                </p>
                <p className="font-raleway text-base">
                    <span className="text-[#1B1A1A] font-semibold">Chef: </span>
                    <span className="text-[#5C5B5B]">{coffee.chef}</span>
                </p>
                <p className="font-raleway text-base">
                    <span className="text-[#1B1A1A] font-semibold">Price: </span>
                    <span className="text-[#5C5B5B]">{coffee.price}</span>
                </p>
            </div>

            {/* Buttons Section */}
            {/* Row on mobile, Column on desktop */}
            <div className="flex flex-row sm:flex-col gap-3">
                <Link to={`/coffee/${coffee._id}`}>
                    <button
                        type="button"
                        className="btn btn-square bg-[#D2B48C] text-white border-none w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#b89b72]"
                    >
                        <FaEye size={20} />
                    </button>
                </Link>

                <Link to={`/updateCoffee/${coffee._id}`}>
                    <button
                        className="btn btn-square bg-[#3C393B] text-white border-none w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#242222]"
                    >
                        <MdModeEditOutline size={20} />
                    </button>
                </Link>
                <button
                    onClick={() => { handleCoffeeDelete(coffee._id) }}
                    type="button"
                    className="btn btn-square bg-[#EA4744] text-white border-none w-10 h-10 flex justify-center items-center rounded-md hover:bg-[#c43633]"
                >
                    <MdDelete size={20} />
                </button>
            </div>
        </div>
    );
};

export default Product;