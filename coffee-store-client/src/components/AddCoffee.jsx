import React from 'react';
// Assuming you are using react-router-dom for links. 
// If not, you can replace Link with an <a> tag.
import { Link } from 'react-router';
import bgLeaf from '../assets/more/11.png';
import Swal from 'sweetalert2';
// --- Reusable Input Field Component ---
const InputField = ({ label, name, placeholder = '', type = 'text', className = '' }) => (
    // The 'form-control' class is a common pattern, 
    // but we can build it with standard Tailwind utilities.
    <div className={`flex flex-col gap-2 ${className}`}>
        <label htmlFor={name} className="font-semibold text-base text-gray-700 font-raleway">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            // 'w-full' ensures the input takes the full width of its grid cell.
            className="input w-full p-3 rounded-md bg-white text-black border border-gray-200 focus:outline-none focus:border-[#D2B48C] font-raleway placeholder-gray-400"
        />
    </div>
);
const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    // send data to the server
    fetch('http://localhost:3002/coffees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coffeeData)
    }
    ).then(res => res.json())
        .then(data => {
            console.log("After adding coffee", data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Coffee Added Successfully",
                    icon: "success",
                    showConfirmButton: false,
                    draggable: true,
                    timer: 1500
                    // timerProgressBar: false,
                    // willClose: () => {
                    //     clearInterval(timerInterval);
                    // }
                });
                form.reset();
                // .then((result) => {
                //     if (result.dismiss === Swal.DismissReason.timer) {
                //         console.log("I was closed by the timer");
                //     }
                // });
            }
        })
}

// --- Main Component ---
const AddCoffee = () => {
    return (
        // Outer container with background pattern and padding
        <div className="min-h-full w-full bg-[#F4F3F0] p-4 md:p-6 bg-contain  object-cover" style={{ backgroundImage: `url(${bgLeaf})` }}>

            {/* 'Back to home' Link */}
            <div className="max-w-4xl mx-auto mb-8">
                <Link to="/" className="inline-flex items-center gap-2 font-rancho text-2xl text-gray-700 hover:text-[#D2B48C] transition-colors">
                    {/* Heroicon arrow-left svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to home
                </Link>
            </div>

            {/* Main Form Card */}
            <div className="bg-[#F4F3F0]/90 p-6 md:p-16 rounded-lg shadow-sm mx-auto max-w-4xl">

                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-rancho font-bold text-[#331A15]">Add New Coffee</h2>
                    <p className="py-6 text-gray-600 md:w-11/12 mx-auto font-raleway leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>

                {/* Form with CSS Grid */}
                <form onSubmit={handleAddCoffee}>
                    {/* RESPONSIVE GRID:
              - grid-cols-1: 1 column on mobile.
              - md:grid-cols-2: 2 columns on tablets and desktops.
          */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Row 1 */}
                        <InputField label="Name" name="name" placeholder="Enter coffee name" />
                        <InputField label="Chef" name="chef" placeholder="Enter coffee chef" />

                        {/* Row 2 */}
                        <InputField label="Supplier" name="supplier" placeholder="Enter coffee supplier" />
                        <InputField label="Price" name="price" placeholder="Enter coffee price" />

                        {/* Row 3 */}
                        <InputField label="Category" name="category" placeholder="Enter coffee category" />
                        <InputField label="Details" name="details" placeholder="Enter coffee details" />

                        {/* Row 4 - Photo Field spans 2 columns on desktop */}
                        <InputField
                            label="Photo"
                            name="photo"
                            placeholder="Enter photo URL"
                            // 'md:col-span-2' makes this field take up the full width on larger screens.
                            className="md:col-span-2"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button className="w-full py-3 rounded-md bg-[#D2B48C] hover:bg-[#C1A37B] text-[#331A15] font-rancho text-2xl font-bold transition-colors border-2 border-[#331A15]">
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;