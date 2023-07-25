import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Construction Portfolio Site",
  description: `A construction portfolio website for Ndabezinhle Mntungwa for
    potential employers or clients to see my projects reach out`,
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
