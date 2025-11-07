import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, outOf = 100, maxStars = 5, className = "" }) => {
    // console.log("rating", rating)
    const normalizeRating = (rating / outOf) * maxStars;
    const fullStars = Math.floor(normalizeRating);
    const hasHalfStar = normalizeRating - fullStars >= 0.5;
    const stars = Array.from({ length: maxStars }, (_, idx) => {
        if (idx < fullStars) {
            return <FaStar key={idx} className={className}></FaStar>
        }
        if (idx === fullStars && hasHalfStar) {
            return <FaStarHalfAlt key={idx} className={className}></FaStarHalfAlt>
        }
        return <FaRegStar key={idx} className={className}></FaRegStar>
    })
    return (
        <>
            <div className="flex items-center gap-x-1">{stars}</div>
        </>
    )
}

export default StarRating