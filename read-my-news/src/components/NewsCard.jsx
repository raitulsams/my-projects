import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { BsJournalBookmark } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import SocialSharePopup from './SocialSharePopup';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const NewsCard = ({ news }) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const { handleBookmark, bookmarkedNews } = useContext(AuthContext);
    const isBookmarked = bookmarkedNews.some(item => item.id === news.id);
    const fallbackImage = 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2025/04/04/Yunus-Bimstec-aebb45ceb40168232e988c7641e47524.jpg?jadewits_media_id=42158';
    // Calculate stars
    const rating = parseFloat(news?.rating?.number) || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    //notify

    return (
        <div>
            <Motion.div
                className='grid grid-cols-1 mx-2 rounded-sm shadow-md'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                // whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <div className='flex bg-base-200'>
                    <img className='rounded-full max-w-1/12 p-3' src={news.author.img} alt="" />
                    <div className='flex flex-col justify-center'>
                        <p className='text-xs font-semibold text-base-400'>{news?.author?.name}</p>
                        <p className='text-xs text-accent'>{format(news?.author?.published_date, "yyyy-MM-dd")}</p>
                    </div>
                    <div className='flex gap-2 justify-end flex-1 items-center pr-3'>
                        <button className='btn btn-square' onClick={() => { handleBookmark(news) }}>
                            {

                                isBookmarked ?
                                    <BsFillJournalBookmarkFill size={18}></BsFillJournalBookmarkFill>
                                    :
                                    <BsJournalBookmark size={18}></BsJournalBookmark>
                            }
                        </button>

                        {/* social share button */}
                        <SocialSharePopup></SocialSharePopup>

                    </div>
                </div>
                <div className='flex flex-col gap-4 p-4'>
                    <h4 className='font-bold text-base-400'>{news?.title}</h4>
                    <img className='w-full mx-auto'
                        // src={news?.thumbnail_url || fallbackImage}
                        src={`https://images.weserv.nl/?url=${encodeURIComponent(news?.thumbnail_url)}`}
                        alt="" onError={(e) => {
                            // 3. Handle the error (like the 403 block) by replacing the source
                            e.target.onerror = null; // prevents infinite loop
                            e.target.src = fallbackImage;
                        }} />
                    <span className={`${expanded ? '' : 'line-clamp-3'} transition-all text-sm/[26px] text-accent`}>
                        {news?.details}
                    </span>
                    <div className='flex justify-between'>
                        <span>
                            {news?.details && (
                                <button
                                    className="font-semibold text-sm hover:cursor-pointer bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    {expanded ? 'Show Less' : 'Read More..'}
                                </button>
                            )}
                        </span>
                        <span className='justify-end'>
                            <button
                                className="font-semibold text-sm hover:cursor-pointer bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent"
                                onClick={() => navigate(`/news-details/${news.id}`)}
                            > Explore More
                            </button>
                        </span>
                    </div>

                    <div className="divider !p-0 !m-0"></div>
                    <div className='flex justify-between mb-2'>

                        {/* Calculate stars based on rating */}
                        <div className='flex gap-1 items-center'>
                            {/* Render full stars */}
                            {[...Array(fullStars)].map((_, i) => (
                                <IoStar key={`full-${i}`} size={18} className='text-[#FF8C47]' />
                            ))}
                            {/* Render half star if needed */}
                            {hasHalfStar && <IoStarHalf size={18} className='text-[#FF8C47]' />}
                            {/* Render empty stars */}
                            {[...Array(emptyStars)].map((_, i) => (
                                <IoStarOutline key={`empty-${i}`} size={18} className='text-[#FF8C47]' />
                            ))}
                            <span className='text-accent text-sm font-semibold leading-none ml-1 align-middle'>
                                {rating.toFixed(1)}
                            </span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FaRegEye size={18} className='text-accent'></FaRegEye>
                            <p className='text-accent text-xs'>{news?.total_view}</p>
                        </div>
                    </div>
                </div>
            </Motion.div>
        </div>
    );
};

export default NewsCard;