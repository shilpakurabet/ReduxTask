/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
const Card = ({
  data,
  selectedBrand,
  selectedCategory,
  sortByName,
  sortByPrice,
  searchQuery,
}) => {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState("");

  const searchData = () => {
    if (searchQuery === " ") {
      setCardsData(data?.products);
    } else {
      const filteredItems = data?.products?.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setCardsData(filteredItems);
    }
  };

  const filterData = () => {
    if (selectedBrand !== "all") {
      let filteredData = data?.products?.filter((item) => {
        if (item.brand.toLowerCase().includes(selectedBrand.toLowerCase())) {
          return item;
        }
      });
      setCardsData(filteredData);
    } else if (selectedCategory !== "all") {
      let filteredData = data?.products?.filter((item) => {
        if (
          item.category.toLowerCase().includes(selectedCategory.toLowerCase())
        ) {
          return item;
        }
      });
      setCardsData(filteredData);
    } else setCardsData(data?.products);
  };
  const sorting = () => {
    if (sortByName) {
      if (sortByName === "asc") {
        const ascSort = [...cardsData].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setCardsData(ascSort);
      } else if (sortByName === "desc") {
        const desSort = [...cardsData].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        setCardsData(desSort);
      }
    } else if (sortByPrice) {
      if (sortByPrice === "high") {
        const ascSort = [...cardsData].sort((a, b) => b.price - a.price);
        setCardsData(ascSort);
      } else if (sortByPrice === "low") {
        const desSort = [...cardsData].sort((a, b) => a.price - b.price);
        setCardsData(desSort);
      }
    } else setCardsData(data?.products);
  };
  useEffect(() => {
    if (sortByName || sortByPrice) {
      sorting();
    } else if (selectedBrand || selectedCategory) {
      filterData();
    } else if (searchQuery) {
      searchData();
    } else if (data?.products) {
      setCardsData(data?.products);
    }
  }, [
    data?.length,
    sortByName,
    sortByPrice,
    selectedBrand,
    selectedCategory,
    searchQuery,
    cardsData?.length,
  ]);
  return (
    <div className="cardWrapper">
      {cardsData &&
        cardsData?.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div>
                <div
                  className="cardImage"
                  onClick={() => {
                    navigate(
                      `/product-details/${item.category}/${item.brand}/${item.id}`,
                      { state: item }
                    );
                  }}>
                  <img src={item.thumbnail} alt="" className="" />
                </div>

                <div className="cardTitle"> {item.title} </div>
                <div className="price">
                  <span> Rs. </span> {item.price}
                </div>
                <div
                  className="viewDetails"
                  onClick={() => {
                    navigate(
                      `/product-details/${item.category}/${item.brand}/${item.id}`,
                      { state: item }
                    );
                  }}>
                  <button> view details </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
