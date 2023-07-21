import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Civil Engineer Portfolio",
  description:
    "A civil engineering portfolio website for Ndabezinhle Mntungwa.",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{props.children}</Layout>
      </body>
    </html>
  );
}
