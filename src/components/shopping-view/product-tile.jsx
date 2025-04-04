import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddToCart,
}) {
  return (
    <Card className="w-full mx-auto max-w-sm">
      <div
        className="relative cursor-pointer"
        onClick={() => handleGetProductDetails(product?._id)}
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
        {product?.salePrice > 0 ? (
          <Badge className="absolute top-2 left-2 rounded-full bg-red-500 hover:bg-red-600">
            Sale
          </Badge>
        ) : null}
      </div>

      <CardContent className="p-4">
        <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            {product?.category}
          </span>
          <span className="text-sm text-muted-foreground">
            {product?.brand}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span
            className={`${
              product?.salePrice > 0 ? "line-through" : null
            } text-lg font-semibold text-primary`}
          >
            ${product?.price}
          </span>
          {product?.salePrice > 0 ? (
            <span className="text-lg font-bold">${product?.salePrice}</span>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          className="w-full"
          onClick={() => handleAddToCart(product?._id)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
