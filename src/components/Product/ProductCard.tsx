import React from "react";
import {
  Price,
  ProductBottom,
  ProductImg,
  ProductInfo,
  ProductItem,
  ProductName,
  Span,
} from "./Products.style";
import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductData } from "../../shared/Models.model";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";

export type ProductsCardProps = {
    product: ProductData
}
const ProductCard = ({product}: ProductsCardProps) => {
  const dispatch = useDispatch();
  const addtoCart = () =>{
    dispatch(addItemToCart(product));
  }
  return (
    <Col lg="3" md="4" sm="12">
      <ProductItem>
        <ProductImg>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={product.imgUrl}
            alt="Product_Item"
          />
        </ProductImg>
        <ProductInfo>
          <ProductName>
            <Link to={`/shop/${product.id}`}>{product.productName}</Link>
          </ProductName>
          <Span>{product.category}</Span>
        </ProductInfo>
        <ProductBottom>
          <Price>$ {product.price}</Price>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addtoCart}>
            <i className="ri-add-line" ></i>
          </motion.span>
        </ProductBottom>
      </ProductItem>
    </Col>
  );
};

export default ProductCard;
