"use client";

import { useRouter } from "next/navigation";
import RegularButton from "../Button/RegularButton";
import { PageHeaderProps } from "./PageHeader.type";

const PageHeader = ({
  title,
  regularButtons,
  backButton = false,
}: PageHeaderProps) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        {backButton && (
          <RegularButton
            title="back"
            iconName="arrowLeft"
            iconClassName="size-3.5 text-slate-500"
            className="w-12 h-5 p-0 text-sm text-slate-600 gap-1"
            onClick={() => router.back()}
          />
        )}
        <h2 className="text-2xl font-bold text-gray-900 capitalize">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        {regularButtons &&
          regularButtons.map((button, index) => (
            <RegularButton key={index} {...button} />
          ))}
      </div>
    </div>
  );
};

export default PageHeader;
