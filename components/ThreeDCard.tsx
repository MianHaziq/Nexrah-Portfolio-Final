"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/shadcn-io/3d-card";

export type Project = {
  id?: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  seeUrl?: string;
  liveUrl?: string;
};

const ThreeDCard: React.FC<{ data: Project }> = ({ data }) => {
  return (
    // add the .project-card class so the parent can find and animate each card
    <CardContainer className="project-card inter-var" containerClassName="py-4">
      <CardBody className="bg-white/20 relative group/card dark:bg-white/5 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-white/[0.06] dark:border-white/[0.06] w-full sm:w-[24rem] h-auto rounded-xl p-4">
        <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-white">
          {data.title}
        </CardItem>

        <CardItem as="p" translateZ={60} className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {data.subtitle}
        </CardItem>

        <CardItem translateZ={100} className="w-full mt-4">
          {/* keeping plain img to match your existing setup; swap for Next/Image if desired */}
          <img
            src={data.imageSrc}
            height={1000}
            width={1000}
            className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${data.title} thumbnail`}
          />
        </CardItem>

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={data.seeUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-center sm:text-left"
          >
            See now →
          </CardItem>

          <CardItem
            translateZ={20}
            as="a"
            href={data.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold text-center"
          >
            Check Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCard;
