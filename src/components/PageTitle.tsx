"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

function PageTitle({ title }: { title: string }) {
    const router = useRouter();
  return (
    <div className="flex gap-5 items-center">
      <Button isIconOnly onClick={() => router.back()}>
        <i className="ri-arrow-left-line"></i>
      </Button>
      <h1 className="text-2xl font-semibold text-gray-600"> {title}</h1>
    </div>
  );
}

export default PageTitle;
