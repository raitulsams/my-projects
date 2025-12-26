import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import bgLeaf from "../assets/more/11.png"; // Ensure this path is correct for your project
import Swal from "sweetalert2";

const Users = () => {
    const initialUsers = useLoaderData();
    console.log(initialUsers);
    // 1. Data State (Currently holding the specific user you requested)
    const [users, setUsers] = useState(initialUsers);
    console.log(users);

    // Optional: Handle Delete Function
    const handleDelete = (id) => {
        // Add your delete logic here (e.g., fetch DELETE to server)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3002/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            const remainingUsers = users.filter((user) => user._id !== id);
                            setUsers(remainingUsers);
                            console.log(`User with id ${id} deleted.`);
                        }
                    });
            }
        });
    };

    const handleEdit = (user) => {
        Swal.fire({
            title:
                '<h2 class="font-rancho text-4xl text-[#331A15] border-b-2 border-[#D2B48C] pb-2">Update User</h2>',
            html: `
            <div class="flex flex-col gap-5 text-left mt-6 px-2">
                <div class="flex flex-col gap-2">
                    <label class="font-raleway font-bold text-[#331A15]">Full Name</label>
                    <input id="swal-name" 
                        class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#D2B48C] font-raleway" 
                        value="${user.name}">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-raleway font-bold text-[#331A15]">Email</label>
                    <input id="swal-email" 
                        class="w-full p-3 rounded-md border border-gray-200 bg-gray-100 text-gray-500 font-raleway cursor-not-allowed" 
                        value="${user.email}" disabled>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="font-raleway font-bold text-[#331A15]">Phone Number</label>
                    <input id="swal-phone" 
                        class="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-[#D2B48C] font-raleway" 
                        value="${user.phone || ""}">
                </div>
            </div>
        `,
            background: "#F4F3F0",
            showCancelButton: true,
            confirmButtonText: "Save Changes",
            confirmButtonColor: "#D2B48C",
            cancelButtonColor: "#331A15",
            buttonsStyling: true,
            customClass: {
                confirmButton:
                    "font-rancho text-xl px-8 py-3 rounded-md border-2 border-[#331A15]",
                cancelButton: "font-rancho text-xl px-8 py-3 rounded-md",
                popup: "rounded-2xl border-4 border-[#D2B48C]",
            },
            preConfirm: () => {
                const name = document.getElementById("swal-name").value;
                const phone = document.getElementById("swal-phone").value;
                if (!name || !phone) {
                    Swal.showValidationMessage("Name/Phone is required");
                    return false;
                }
                return { name, phone };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedInfo = result.value;

                fetch(`http://localhost:3002/users/${user._id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            const updatedUsers = users.map((u) =>
                                u._id === user._id ? { ...u, ...updatedInfo } : u
                            );
                            setUsers(updatedUsers);
                            Swal.fire({
                                icon: "success",
                                title: "Saved!",
                                showConfirmButton: false,
                                timer: 1500,
                                background: "#F4F3F0",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div
            className="min-h-screen w-full bg-[#F4F3F0] p-4 md:p-10 bg-contain object-cover"
            style={{ backgroundImage: `url(${bgLeaf})` }}
        >
            {/* Header & Back Link Container */}
            <div className="max-w-6xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 font-rancho text-2xl text-gray-700 hover:text-[#D2B48C] transition-colors mb-6"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    Back to home
                </Link>

                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-4xl font-rancho font-bold text-[#331A15]">
                        Users List
                    </h2>
                    <div className="flex justify-center">
                        {/* <Link
                            to="/SignUp"
                            className="btn bg-[#D2B48C] hover:bg-[#331A15] text-[#331A15] hover:text-[#D2B48C] font-rancho transition-all duration-300 shadow-md flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add New User
                        </Link> */}
                        <span className="badge badge-lg bg-[#D2B48C] border-none text-white font-raleway">
                            Total Users: {users.length}
                        </span>
                    </div>
                </div>

                {/* --- DAISY UI TABLE --- */}
                <div className="overflow-x-auto rounded-lg shadow-md">
                    <table className="table">
                        {/* Table Head */}
                        {/* I added custom colors to match your theme */}
                        <thead className="bg-[#E3B577]/30 text-[#331A15] font-rancho text-xl">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Created At</th>
                                <th>Last Login</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="hover:bg-gray-50 font-raleway transition-colors"
                                >
                                    {/* Checkbox */}
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>

                                    {/* Name & Avatar Column */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photo}
                                                        alt={user.name}
                                                        // Fallback in case image breaks
                                                        onError={(e) =>
                                                        (e.target.src =
                                                            "https://img.daisyui.com/images/profile/demo/2@94.webp")
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#331A15] text-lg">
                                                    {user.name}
                                                </div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Phone Column */}
                                    <td>
                                        <span className="font-medium text-gray-700">
                                            {user.phone || "N/A"}
                                        </span>
                                    </td>
                                    {/* Creation Time Column */}
                                    <td>
                                        <span className="text-gray-500">{user.creationTime}</span>
                                    </td>

                                    {/* Last Login Column */}
                                    <td>
                                        <span className="text-gray-500">{user.lastLoginAt}</span>
                                    </td>

                                    {/* Action Buttons Column */}
                                    <th>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="btn btn-ghost btn-xs text-xl text-gray-500  hover:bg-[#EA4744]/10"
                                            >
                                                <MdEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="btn btn-ghost btn-xs text-xl text-[#EA4744] hover:bg-[#EA4744]/10"
                                            >
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
