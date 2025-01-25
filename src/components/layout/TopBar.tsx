"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "next-auth/react";
// import { useSelector } from "react-redux";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
// import { MdAttachEmail } from "react-icons/md";

const TopBar = ({
  user,
  lang,
}: {
  user?: {
    _id: string;
    accessToken: string;
    image?: string | null | undefined;
    email?: string | null | undefined;
    name?: string | null | undefined;
    createdAt: Date;
    role:
      | "user"
      | "manager"
      | "afiliado"
      | "admin"
      | "cliente"
      | "instagram"
      | "sucursal";
    phone?: string | undefined;
    stripe_id?: string | undefined;
  };

  lang: string;
}) => {
  //   const { emailListData } = useSelector((state) => state.compras);

  return (
    <div className="w-full h-full flex justify-between items-center text-white bg-dark dark:bg-black dark:bg-opacity-50 p-1 px-3">
      {/* User Profile */}
      <div className=" ease-in-out hover:scale-105 duration-300">
        {user?.role === "manager" ? (
          <>
            <Link href={`/${lang}/admin`}>
              {user?.image ? (
                <Image
                  className="w-6 h-6 rounded-full "
                  src={user?.image ? user?.image : "/next.svg"}
                  alt={user?.name ? user?.name : "avatar"}
                  width={50}
                  height={50}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center uppercase text-xl font-primary">
                  {user?.email?.substring(0, 1)}
                </div>
              )}
            </Link>
          </>
        ) : user?.role === "afiliado" ? (
          <>
            <Link href={`/${lang}/afiliado`}>
              {user?.image ? (
                <Image
                  className="w-6 h-6 rounded-full "
                  src={user?.image}
                  alt={"avatar"}
                  width={50}
                  height={50}
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center uppercase text-xl font-primary">
                  {user?.email?.substring(0, 1)}
                </div>
              )}
            </Link>
          </>
        ) : (
          <>
            <Link href={`/${lang}/perfil`}>
              {user?.image ? (
                <Image
                  className="w-6 h-6 rounded-full "
                  src={user?.image ? user?.image : "/next.svg"}
                  alt={user?.name ? user?.name : "avatar"}
                  width={50}
                  height={50}
                />
              ) : (
                <div className="  flex items-center justify-center cursor-pointer text-popSecondary  hover:text-popPrimary hover:scale-105 ease-in-out duration-300">
                  <FaUser className="text-lg" />
                </div>
              )}
            </Link>
          </>
        )}
      </div>
      {/* right bar */}
      <div className="flex items-center gap-3">
        {/*  Emails Button */}
        {/* {user?.role === "manager" && emailListData?.length > 0 && (
          <Link href={`/${lang}/admin/correos`}>
            <div className="  flex items-end justify-center cursor-pointer text-white">
              <MdAttachEmail className="text-base absolute" />
              <span className=" text-xs relative -right-3 -top-2 flex items-center justify-center w-4 h-5  ">
                {emailListData ? emailListData?.length : 0}
              </span>
            </div>
          </Link>
        )} */}
        {/* Logout */}
        <div
          onClick={() => signOut()}
          className="pt-1 cursor-pointer flex justify-center items-center gap-x-1 "
        >
          <AiOutlineLogout className="text-base flex text-white" />
          {/* <p className='text-sm font-semibold'>Logout</p> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
