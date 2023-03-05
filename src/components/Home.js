/** @format */

import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux/action";
import { PUBLIC_IMAGE_PATH } from "../utils/constant";
import Card from "./Card";
import Header from "./Header";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => {
    if (state.Reducer.getAllData) {
      return state.Reducer.getAllData;
    }
    return null;
  });
  const [data, setData] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortByName, setSortByName] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  let allBrandsData = data?.products?.filter(
    (ele, ind) =>
      ind === data?.products?.findIndex((elem) => elem.brand === ele.brand)
  );
  let allCategory = data?.products?.filter(
    (ele, ind) =>
      ind ===
      data?.products?.findIndex((elem) => elem.category === ele.category)
  );

  const brands = (
    <Menu className="brandsList">
      <Menu.Item
        onClick={() => {
          setSelectedBrand("all");
        }}>
        {" "}
        All{" "}
      </Menu.Item>
      {allBrandsData?.slice(0, 15)?.map((item, index) => {
        return (
          <Menu.Item
            key={index}
            onClick={() => {
              setSelectedBrand(item.brand);
            }}>
            {" "}
            {item.brand}{" "}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const category = (
    <Menu className="brandsList">
      <Menu.Item
        onClick={() => {
          setSelectedCategory("all");
        }}>
        {" "}
        All{" "}
      </Menu.Item>
      {allCategory?.map((item, index) => {
        return (
          <Menu.Item
            key={index}
            onClick={() => {
              setSelectedCategory(item.category);
            }}>
            {" "}
            {item.category}{" "}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const sortName = (
    <Menu className="brandsList">
      <Menu.Item
        onClick={() => {
          setSortByName("asc");
        }}>
        {" "}
        A - Z{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByName("desc");
        }}>
        {" "}
        Z - A{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByName("");
        }}>
        No sort
      </Menu.Item>
    </Menu>
  );
  const sortPrice = (
    <Menu className="brandsList">
      <Menu.Item
        onClick={() => {
          setSortByPrice("high");
        }}>
        {" "}
        Highest Price{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByPrice("low");
        }}>
        {" "}
        Lowest Price{" "}
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortByPrice("");
        }}>
        No sort
      </Menu.Item>
    </Menu>
  );
  const filterMenu = (
    <Menu className="menu" triggerSubMenuAction={"click"}>
      <Menu.Item>
        <Dropdown overlay={brands} placement="bottomLeft" trigger="hover">
          <div className="filterMenus"> brands</div>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>
        <Dropdown overlay={category} placement="bottomLeft" trigger="hover">
          <div className="filterMenus"> Category</div>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );

  const sortMenu = (
    <Menu className="menu" triggerSubMenuAction={"click"}>
      <Menu.Item>
        <Dropdown overlay={sortName} placement="bottomLeft" trigger="hover">
          <div className="filterMenus"> Sort By Name </div>
        </Dropdown>
      </Menu.Item>
      <Menu.Item>
        <Dropdown overlay={sortPrice} placement="bottomLeft" trigger="hover">
          <div className="filterMenus"> Sort By Price </div>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    dispatch(getAllData());
    if (allData) {
      setData(allData);
    }
  }, [dispatch, allData.length]);
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <div className="container">
        <div>
          <div className="filterSort">
            <Dropdown overlay={sortMenu}>
              <div className="filter">
                Sort
                <img
                  src={PUBLIC_IMAGE_PATH + "/down-arrow.png"}
                  alt=""
                  className="w-[10px]"
                />
              </div>
            </Dropdown>
            <Dropdown overlay={filterMenu} trigger="hover">
              <div className="filter">
                filter
                <img
                  src={PUBLIC_IMAGE_PATH + "/down-arrow.png"}
                  alt=""
                  className="w-[10px]"
                />
              </div>
            </Dropdown>
          </div>
          <Card
            data={data}
            selectedBrand={selectedBrand}
            selectedCategory={selectedCategory}
            sortByName={sortByName}
            sortByPrice={sortByPrice}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
