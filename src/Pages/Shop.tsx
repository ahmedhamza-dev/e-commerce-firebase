/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import Banner from "../shared/UI/Banner/Banner";
import Select from "react-bootstrap/FormSelect";
import { FilterWidget, SearchBox, ShopSection } from "./Styles/Shop.style";
import productsData from "../assets/data/products";
import ProductsList from "../components/Product/ProductsList";

const Shop = () => {
  const [products, setProducts] = useState(productsData);
  const [filterObject, setFilterObject] = useState({
    category: '',
    sort: '',
    search: ''
  });

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = {...filterObject, category: event.target.value};
    setFilterObject(filterValue);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = {...filterObject, search: event.target.value}
    setFilterObject(filterValue);
  };

  useEffect(() => {
    let filteredProducts = [];
    if(filterObject.category && filterObject.search){
      console.log('in')
      filteredProducts = productsData.filter((product) =>
        product.productName.toLocaleLowerCase().includes(filterObject.search) && product.category === filterObject.category
      );
    }else if(!filterObject.category && filterObject.search){
      filteredProducts = productsData.filter((product) =>
        product.productName.toLocaleLowerCase().includes(filterObject.search.toLocaleLowerCase())
      );
    }else if(filterObject.category && !filterObject.search){
      filteredProducts = productsData.filter(
        (product) => product.category === filterObject.category
      );
    }else{
      filteredProducts = productsData
    }
    setProducts(filteredProducts);
  }, [filterObject])
  
  return (
    <Helmet title="Shop">
      <Banner title="Product"></Banner>
      <ShopSection>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <FilterWidget>
                <Select onChange={(e) => handleFilter(e)}>
                  <option disabled selected>
                    Filter By Category
                  </option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </Select>
              </FilterWidget>
            </Col>
            <Col lg="3" md="4" sm="6">
              <FilterWidget>
                <Select>
                  <option disabled selected>
                    Sort By
                  </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </Select>
              </FilterWidget>
            </Col>
            <Col lg="6" md="6" sm="12" className="d-flex justify-content-between">
              <SearchBox>
                <input
                  type="text"
                  placeholder="Search...."
                  onChange={(e) => handleSearch(e)}
                />
                <span>
                  <i className="ri-search-line" />
                </span>
              </SearchBox>
              <Button className="btn btn-secondary" onClick={() => setProducts(productsData)}>
                <i className="ri-refresh-line"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </ShopSection>
      <section>
        <Container>
          <Row>
            {products.length === 0 ? (
              <h1 className="text-center fs-4">No Data Found</h1>
            ) : (
              <ProductsList data={products} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
