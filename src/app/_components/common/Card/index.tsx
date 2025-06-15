"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  price: number;
  discount?: number;
  rating?: number;
  onAddToCart?: () => void;
  imageId?: number;
}

export const ProductCard = ({
  title,
  price,
  discount,
  rating,
  onAddToCart,
  imageId = Math.floor(Math.random() * 1000),
}: ProductCardProps) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  const imageUrl = `https://picsum.photos/id/${imageId}/300/300`;

  return (
    <Card className="w-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full size-[300px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discount && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              -{discount}%
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            ${discountedPrice.toFixed(2)}
          </span>
          {discount && (
            <span className="text-sm text-gray-500 line-through">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
        {rating && (
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">★</span>
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={onAddToCart}></Button>
      </CardFooter>
    </Card>
  );
};
