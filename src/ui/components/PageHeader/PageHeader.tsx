"use client";

import { useRouter } from "next/navigation";
import { PageHeaderProps } from "./PageHeader.type";
import RegularButton from "../Button/RegularButton";
import CustomLink from "../CustomLink/CustomLink";

const PageHeader = ({
  title,
  buttons,
  links,
  backButton = false,
}: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        {backButton && (
          <RegularButton
            variant="custom"
            title="back"
            iconName="arrowLeft"
            iconClasses="size-3.5 text-slate-500"
            className="w-12 h-5 p-0 text-sm text-slate-600 gap-1"
            onClick={() => router.back()}
          />
        )}
        <h2 className="text-2xl font-bold text-gray-900 capitalize">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        {buttons &&
          buttons.map((button, index) => (
            <RegularButton key={index} {...button} />
          ))}
        {links &&
          links.map((link, index) => <CustomLink key={index} {...link} />)}
      </div>
    </div>
  );
};

export default PageHeader;
