import React, { useEffect } from 'react'
import cat1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";
import "./Category.scss";


function Category({ categories }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const navigate = useNavigate();
  return (
    <>
      <div className="shop-by-category">
        <div className="categories">
          {categories?.data?.map((item) => (
            <div key={item.id} className="category" onClick={() => navigate(`category/${item.id}`)}>
              <img src={item.attributes.img.data.attributes.url} alt="cat-1" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Category