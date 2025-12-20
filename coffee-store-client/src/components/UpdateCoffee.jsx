import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import bgLeaf from '../assets/more/11.png';

// --- Reusable Input Field (Updated to accept defaultValue) ---
const InputField = ({ label, name, defaultValue, placeholder = '', type = 'text', className = '' }) => (
    <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={name} className="font-semibold text-base text-gray-700 font-raleway">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            defaultValue={defaultValue} // <--- Shows existing data
            placeholder={placeholder}
            className="input w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:border-[#D2B48C] font-raleway placeholder-gray-400"
        />
    </div>
);

const UpdateCoffee = () => {
    // 1. Get the existing coffee data loaded by React Router
    const coffee = useLoaderData();

    // 2. Destructure the data so we can pass it to the inputs
    const { _id, name, chef, supplier, price, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedCoffeeData = Object.fromEntries(formData.entries());

        // 3. Send PUT request to specific ID
        fetch(`http://localhost:3002/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Cool"
                    });
                }
            });
    }

    return (
        <div className="min-h-full w-full bg-[#F4F3F0] p-4 md:p-6 bg-contain object-cover" style={{ backgroundImage: `url(${bgLeaf})` }}>

            {/* Back Button */}
            <div className="max-w-4xl mx-auto mb-8">
                <Link to="/" className="inline-flex items-center gap-2 font-rancho text-2xl text-gray-700 hover:text-[#D2B48C] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to home
                </Link>
            </div>

            {/* Main Card */}
            <div className="bg-[#F4F3F0]/90 p-6 md:p-16 rounded-lg shadow-sm mx-auto max-w-4xl">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-rancho font-bold text-[#331A15]">Update Existing Coffee</h2>
                    <p className="py-6 text-gray-600 md:w-11/12 mx-auto font-raleway leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>

                {/* Update Form */}
                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Row 1 */}
                        <InputField label="Name" name="name" defaultValue={name} placeholder="Enter coffee name" />
                        <InputField label="Chef" name="chef" defaultValue={chef} placeholder="Enter coffee chef" />

                        {/* Row 2 */}
                        <InputField label="Supplier" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" />
                        <InputField label="Price" name="price" defaultValue={price} placeholder="Enter coffee price" />

                        {/* Row 3 */}
                        <InputField label="Category" name="category" defaultValue={category} placeholder="Enter coffee category" />
                        <InputField label="Details" name="details" defaultValue={details} placeholder="Enter coffee details" />

                        {/* Row 4 */}
                        <InputField
                            label="Photo"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Enter photo URL"
                            className="md:col-span-2"
                        />
                    </div>

                    <div className="mt-8">
                        <button className="w-full py-3 rounded-md bg-[#D2B48C] hover:bg-[#C1A37B] text-[#331A15] font-rancho text-2xl font-bold transition-colors border-2 border-[#331A15]">
                            Update Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;