"use client";
import { Button } from "@mantine/core";
import React from "react";

export default function IconButton({ icon, title, link, width }: any) {
  return (
    <Button
      variant="outline"
      className={`${width}` ? "width" : "w-32"}>
      {icon}
      <p className="ml-1">{title}</p>
    </Button>
  );
}
