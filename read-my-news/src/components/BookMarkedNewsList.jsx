import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import NewsCard from "./NewsCard";
import { AuthContext } from "../provider/AuthProvider";

const BookMarkedNewsList = () => {
    const { bookmarkedNews } = useContext(AuthContext);
    const navigate = useNavigate();

    // ✅ if there are no bookmarks, redirect to home
    useEffect(() => {
        if (!bookmarkedNews || bookmarkedNews.length === 0) {
            navigate("/category/1", { replace: true });
        }
    }, [bookmarkedNews, navigate]);

    return (
        <div>
            {bookmarkedNews && bookmarkedNews.length > 0 && (
                bookmarkedNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))
            )}
        </div>
    );
};

export default BookMarkedNewsList;
