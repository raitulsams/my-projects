import classroom from '../../assets/class.png';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';
const Qzone = () => {
    return (
        <div>
            <div className="bg-gray-100 text-center mt-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-left py-5 ml-4">Q-Zone</h2>
                <div className="flex flex-col items-center gap-4">
                    <img className='w-full px-3' src={classroom} alt="" />
                    <img className='w-full px-3' src={swimming} alt="" />
                    <img className='w-full px-3' src={playground} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Qzone;