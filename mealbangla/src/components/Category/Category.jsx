import { NavLink } from "react-router-dom";
const Category = ({ category }) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = category;
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src={strCategoryThumb}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p className="line-clamp-2">{strCategoryDescription}</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/filtered-meals/${strCategory}`}>
                        <button className="btn btn-sm bg-orange-500 text-white">Check out</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Category