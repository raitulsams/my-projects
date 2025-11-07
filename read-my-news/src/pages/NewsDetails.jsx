import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router';
const NewsDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const news = useLoaderData();
    const newsDetail = news.filter(n => n.id === id)[0];
    console.log('my news', newsDetail);
    return (
        <div>
            <header>
                <Header></Header>
                <main className='w-10/12 mx-auto grid grid-cols-12'>
                    <aside className='col-span-8 mx-2'>
                        {
                            <div key={newsDetail.id} className='my-5'>
                                <h2 className='text-3xl font-bold mb-3 text-accent'>{newsDetail.title}</h2>
                                <img className='w-full mx-auto mb-3' src={newsDetail.image_url} alt="" />
                                <p className='text-lg text-accent'>{newsDetail.details}</p>
                            </div>
                        }
                        <button onClick={() => navigate(`/category/${newsDetail.category_id}`)} className='btn btn-error text-white font-normal text-xl'><IoArrowBack size={23}></IoArrowBack>All news in this category</button>
                    </aside>
                    <aside className='col-span-2'>
                        <RightAside></RightAside>
                    </aside>
                </main>
            </header>
        </div>
    );
};

export default NewsDetails;