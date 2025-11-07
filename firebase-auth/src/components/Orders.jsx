import React from 'react';

const Orders = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-auto">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <ul className="list bg-base-100 rounded-box shadow-md">
                            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your Orders</li>
                            <li className="list-row">
                                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                <div>
                                    <div>Dio Lupa</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                                </div>
                            </li>
                            <li className="list-row">
                                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                                <div>
                                    <div>Ellie Beilish</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                                </div>

                            </li>
                            <li className="list-row">
                                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                                <div>
                                    <div>Sabrino Gardener</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;