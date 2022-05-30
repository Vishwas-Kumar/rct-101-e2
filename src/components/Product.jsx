import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([])
  const getdata = ()=> {
    axios.get(`http://localhost:8080/products`).then((res)=> {
      console.log(res.data)
      setProduct([...res.data])
    })
    .catch((err)=>console.log(err))
  }

  useEffect (()=> {
    getdata()
  },[])
  // TODO: Remove below const and instead import them from chakra
  const Text = () => <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
  );
};

export default Product;
