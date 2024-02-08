import { retrievData, retrievDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Sepatu Baru",
//     image:
//       "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/d9360116-9dd6-46f1-b301-7a100f83b49c/jordan-stadium-90-shoes-S9D8n9.png",
//     price: 100000,
//   },
//   {
//     id: 2,
//     title: "Sepatu Lama",
//     image:
//       "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/5f362bb6-0812-472c-b554-39013eec513c/air-max-excee-shoes-BND2jb.png",
//     price: 200000,
//   },
//   {
//     id: 3,
//     title: "Sepatu Nike",
//     image:
//       "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/5f362bb6-0812-472c-b554-39013eec513c/air-max-excee-shoes-BND2jb.png",
//     price: 250000,
//   },
//   {
//     id: 4,
//     title: "Sepatu Nike",
//     image:
//       "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/5f362bb6-0812-472c-b554-39013eec513c/air-max-excee-shoes-BND2jb.png",
//     price: 250000,
//   },
//   {
//     id: 5,
//     title: "Sepatu Nike",
//     image:
//       "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/5f362bb6-0812-472c-b554-39013eec513c/air-max-excee-shoes-BND2jb.png",
//     price: 250000,
//   },
// ];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrievDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }

  const products = await retrievData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
