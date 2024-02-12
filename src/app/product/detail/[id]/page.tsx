import { getData } from "@/services/products";
import Image from "next/image";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-grey-700">
        <Image
          src={product.data.image}
          alt="title"
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-5">
          <h3>{product.data.title}</h3>
          <p>{product.data.price}</p>
        </div>
      </div>
    </div>
  );
}
