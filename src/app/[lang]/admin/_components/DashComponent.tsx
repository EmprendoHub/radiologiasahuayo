"use client";
import Image from "next/image";
import Link from "next/link";
import { MdAttachMoney } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
import { HiArrowNarrowUp } from "react-icons/hi";
import FormattedPrice from "@/lib/utils";
import { FaTags } from "react-icons/fa6";
import { SiXcode } from "react-icons/si";

const DashComponent = ({
  data,
  lang,
}: {
  data: {
    weeklyData: string;
    weeklyVisitorData: { date: string; Total: number }[];
    deviceUsageData: { label: string; Total: number }[];
    products: string;
    orders: string;
    posts: string;
    orderCountPreviousMonth: number;
    totalOrderCount: number;
    totalProductCount: number;
    productsCountPreviousMonth: number;
    monthlyOrdersTotals: number;
    yearlyOrdersTotals: number;
  };
  lang: string;
}) => {
  // Pie Charts

  // Prepare the labels and data for the chart

  const products = JSON.parse(data?.products);
  const orders = JSON.parse(data?.orders);
  const posts = JSON.parse(data?.posts);
  const orderCountPreviousMonth = data?.orderCountPreviousMonth;
  const totalOrderCount = data?.totalOrderCount;
  const totalProductCount = data?.totalProductCount;
  const productsCountPreviousMonth = data?.productsCountPreviousMonth;
  const monthlyOrdersTotals = data?.monthlyOrdersTotals;
  const yearlyOrdersTotals = data?.yearlyOrdersTotals;
  // Assuming `weeklyData` is your fetched dataset

  return (
    <div className="p-3 md:mx-auto  ">
      <div className="flex-row maxsm:flex-col flex gap-4 justify-start w-full">
        <div className="w-full flex flex-row maxsm:flex-col gap-4 justify-start items-start">
          <div className="flex-row maxsm:flex-col flex gap-4 justify-start w-full">
            <div className="w-full flex flex-row maxmd:flex-col gap-4 justify-start items-start">
              <div className="flex flex-col p-3 gap-4 w-full rounded-md shadow-lg bg-slate-300 dark:bg-slate-700">
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-gray-500 text-md font-primary">
                      Pedidos
                    </h3>
                    <p className="text-2xl ">{totalOrderCount}</p>
                  </div>
                  <FaTags className="bg-teal-600  text-white rounded-full text-5xl p-3 shadow-lg" />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-700 flex items-center">
                    <HiArrowNarrowUp />
                    {orderCountPreviousMonth}
                  </span>
                  <div className="text-gray-500 font-secondary text-xs">
                    Mes Anterior
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-3 gap-4 w-full rounded-md shadow-lg bg-slate-300 dark:bg-slate-700">
              <div className="flex justify-between">
                <div className="">
                  <h3 className="text-gray-500 text-md font-primary">
                    Servicios
                  </h3>
                  <p className="text-2xl ">{totalProductCount}</p>
                </div>
                <SiXcode className="bg-secondary text-white rounded-full text-5xl p-3 shadow-lg" />
              </div>
              <div className="flex  gap-2 text-sm">
                <span className="text-green-700 flex items-center">
                  <HiArrowNarrowUp />
                  {productsCountPreviousMonth}
                </span>
                <div className="text-gray-500 font-secondary text-xs">
                  Mes Anterior
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-3 bg-slate-300 dark:bg-slate-700 shadow-lg gap-4 w-full rounded-md ">
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-gray-500  font-primary">Ingresos</h3>
                <p className="text-2xl  ">
                  <FormattedPrice amount={yearlyOrdersTotals || 0} />
                </p>
              </div>
              <MdAttachMoney className=" bg-accent text-white rounded-full text-5xl p-3 shadow-lg" />
            </div>
            <div className="flex  gap-2 text-sm">
              <span className="text-green-700 flex items-center">
                <HiArrowNarrowUp />
                <FormattedPrice amount={monthlyOrdersTotals || 0} />
              </span>
              <div className="text-gray-500">Mes Actual</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row maxsm:flex-col gap-4 py-3 mx-auto justify-start">
        <div className="w-full flex flex-row maxmd:flex-col gap-4 justify-start items-start">
          <div className="flex flex-col w-full shadow-md px-5 rounded-md bg-slate-300 dark:bg-slate-700">
            <div className="flex justify-between py-3 ">
              <h1 className="font-primary text-xs">Pedidos recientes</h1>
              <Link
                className="font-secondary text-[12px]"
                href={`/${lang}/admin/pedidos`}
              >
                Ver todos
              </Link>
            </div>
            <table>
              <thead>
                <tr className="flex justify-between mb-4 font-primary text-xs text-gray-500">
                  <th>No.</th>
                  <th>Status</th>
                  <th>...</th>
                </tr>
              </thead>
              {orders &&
                orders.map(
                  (order: {
                    _id: string;
                    orderId: string;
                    orderStatus: string;
                  }) => (
                    <tbody
                      key={order._id}
                      className="divide-y font-secondary text-xs"
                    >
                      <tr className=" flex justify-between dark:border-gray-700 dark:bg-slate-700 mb-4">
                        <td>{order.orderId}</td>
                        <td>{order.orderStatus}</td>
                        <td>
                          <Link href={`/admin/pedido/${order._id}`}>
                            <IoArrowRedoSharp className=" text-teal-600 " />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                )}
            </table>
          </div>
        </div>

        <div className="w-full flex flex-row maxmd:flex-col gap-4 justify-start items-start">
          <div className="flex flex-col w-full shadow-md px-5 rounded-md bg-slate-300 dark:bg-slate-700">
            <div className="flex justify-between py-3 text-xs">
              <h1 className="font-primary text-xs">Servicios Recientes</h1>
              <Link
                className=" font-secondary text-[12px]"
                href={`/${lang}/admin/productos`}
              >
                Ver Todos
              </Link>
            </div>
            <table>
              <thead>
                <tr className="flex justify-between mb-4 font-primary text-xs text-gray-500">
                  <th>Img.</th>
                  <th>Nombre</th>
                  <th>...</th>
                </tr>
              </thead>
              {products &&
                products.map(
                  (product: {
                    _id: string;
                    title: { [lang: string]: string };
                    images: { url: string }[];
                    slug: string;
                  }) => (
                    <tbody
                      key={product._id}
                      className="divide-y  font-secondary text-xs"
                    >
                      <tr className=" flex justify-between dark:border-gray-700 dark:bg-slate-700 mb-2">
                        <td>
                          <Image
                            src={
                              product?.images[0].url ||
                              "/images/avatar_placeholder.jpg"
                            }
                            alt="producto"
                            width={400}
                            height={400}
                            className="w-10 h-10 rounded-full bg-gray-500"
                          />
                        </td>
                        <td>
                          <p className="line-clamp-2 capitalize">
                            {product.title[`${lang}`].substring(0, 12)}...
                          </p>
                        </td>
                        <td>
                          <Link
                            href={`/admin/productos/editar/${product.slug}`}
                          >
                            <IoArrowRedoSharp className=" text-indigo-500 " />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                )}
            </table>
          </div>
          <div className="flex flex-col w-full shadow-md px-5 rounded-md bg-slate-300 dark:bg-slate-700">
            <div className="flex justify-between py-3 text-xs">
              <h2 className="font-primary">Publicaciones recientes</h2>
              <button>
                <Link
                  className=" font-secondary text-[12px]"
                  href={`/${lang}/admin/blog`}
                >
                  Ver todas
                </Link>
              </button>
            </div>
            <table>
              <thead>
                <tr className="flex justify-between mb-4 font-primary text-xs text-gray-500">
                  <th>Img.</th>
                  <th>Titulo</th>
                  <th>...</th>
                </tr>
              </thead>
              {posts &&
                posts?.map(
                  (post: {
                    _id: string;
                    mainImage: string;
                    mainTitle: { [lang: string]: string };
                    slug: string;
                  }) => (
                    <tbody
                      key={post?._id}
                      className="divide-y font-secondary text-xs"
                    >
                      <tr className=" flex justify-between  dark:bg-slate-700 mb-2">
                        <td className="flex gap-2 items-start">
                          <Image
                            src={post?.mainImage || "/next.svg"}
                            alt="user"
                            width={400}
                            height={400}
                            className="w-10 h-10 rounded-md bg-gray-500"
                          />
                          <span className="text-[12px] leading-none tracking-tighter">
                            {post.mainTitle[`${lang}`].substring(0, 20)}...
                          </span>
                        </td>

                        <td>
                          <Link
                            href={`/${lang}/admin/blog/editar/${post.slug}`}
                          >
                            <IoArrowRedoSharp className=" text-orange-500 " />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashComponent;
