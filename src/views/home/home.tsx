import { createStyledLink } from "@/utils/createStyledLink";
import React from "react";
import { NextApiRequest, NextApiResponse } from 'next';


const PRODUCTS_LINK_TEXT = "Products";
const USER_AGENT_LINK_TEXT = "User Agent";

export const Home: React.FC = async () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
      <div className="text-center">
        {createStyledLink("/products", PRODUCTS_LINK_TEXT)}
        {createStyledLink("/user-agent", USER_AGENT_LINK_TEXT)}
      </div>
    </div>
  );
};
