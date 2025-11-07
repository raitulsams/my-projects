import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const categoryNewsData = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    // console.log("Category News Data:", id);
    const navigate = useNavigate();
    useEffect(() => {
        if (id === '0') {
            setCategoryNews(categoryNewsData);
            return;
        }
        else if (id == '1') {
            const filterTodayNews = categoryNewsData.filter(news => news?.others?.is_today_pick === true);
            setCategoryNews(filterTodayNews);
            return;
        }
        else {
            const filterNews = categoryNewsData.filter(news => news.category_id === parseInt(id));
            // console.log("Filtered News:", filterNews.length);
            if (filterNews.length === 0) {
                navigate("/404")
            }
            else {
                setCategoryNews(filterNews);
            }
        }
    }, [categoryNewsData, id, navigate])
    return (
        <div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;