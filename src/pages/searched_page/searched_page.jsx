import React, { useEffect, useMemo } from "react";
import "./searched.css";
import CategoryCard from "../../widgets/category_card/category_card";
import { useSelector, useDispatch } from "react-redux";
import { getSubCategory } from "../../actions/subcategory";
import {getProductsBySearch} from "../../actions/products";
import { useNavigate, useSearchParams } from "react-router-dom";



const SearchedPage = () => {
  const subcategory = useSelector((state) => state.subcategory);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [searchparams] = useSearchParams();
  const category = searchparams.get('category')
  const navigate = useNavigate()

  const subcategorydata = searchparams.get('subcategory')

  const searchData = useMemo(() => {
    const search = {category, subcategorydata}
    return search
  }, [category, subcategorydata])
  useEffect(() => {
    dispatch(getSubCategory());
    dispatch(getProductsBySearch(searchData))
  }, [dispatch, searchData]);
  
  const handleClick = (subcategory_name) => {
    new URLSearchParams(`?category=${category}&subcategory=${subcategory_name}`);
    navigate(`/search?category=${category}&subcategory=${subcategory_name}`)
    window.location.reload()
  }
  return (
    <>
      <div className="searchedpage-container flex__center  section__padding">
        <div className="searchedpage-header ">
          <div className="searchedpage-container_searchbox">
            <input type="text" placeholder="Search for a product" defaultValue={category} />
            <button type="button">Search</button>
          </div>

          <div className="searchpage-container_subcategories">
            <div className="searchpage-content">
              {subcategory.map((item) => (
                <div onClick={() => handleClick(item.subcategory_name)} key={item._id} className="subcategories_card">
                  <p>{item.subcategory_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="searchedpage-product_list section__padding flex__center">
        <CategoryCard products={products} />
      </div>
    </>
  );
};

export default SearchedPage;
// class SearchedPage extends React.Component {

//   render() {

//     return (
//       <>
//       <div className="searchedpage-container flex__center  section__padding">
//         <div className="searchedpage-header ">
//           <div className="searchedpage-container_searchbox">
//             <input type="text" placeholder="Search for a product" />
//             <button type="button">Search</button>
//           </div>

//           <div className="searchpage-container_subcategories">
//             <div className="searchpage-content">
//               {subcategories.map((item) => (
//                 <div key={item._id} className="subcategories_card">
//                   <p>{item.subcategory}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//         <div className="searchedpage-product_list section__padding flex__center">
//           <CategoryCard products={product} />
//         </div>
//               </>

//     );
//   }
// }

// export default SearchedPage;
