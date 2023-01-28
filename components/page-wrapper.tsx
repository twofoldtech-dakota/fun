"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const PageWrapper = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => (
  <div>
    <Header title={title} />
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 20 }}
      className={classNames(
        "relative top-14 min-h-screenHeightWithoutHeader md:top-0",
        className
      )}
    >
      {children}
    </div>
  </div>
);
