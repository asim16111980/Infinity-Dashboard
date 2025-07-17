import { ArrowLeft } from "lucide-react";
import RegularButton from "../Button/RegularButton";
import { PageHeaderProps } from "./PageHeader.type";
import Link from "next/link";

const PageHeader = ({
  title,
  regularButtons,
  backButton = false,
}: PageHeaderProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        {backButton && (
          <Link href="#">
            <RegularButton
              asChild
              title="back"
              lucideIcon={ArrowLeft}
              iconClassName="size-3.5 text-slate-500"
              className="w-12 h-5 text-sm text-slate-600 gap-1"
            />
          </Link>
        )}
        <h2 className="text-2xl font-bold text-gray-900 capitalize">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        {regularButtons &&
          regularButtons.map((button, index) =>
            button.asChild ? (
              <Link href={button.href ?? "#"}>
                <RegularButton key={index} {...button} />
              </Link>
            ) : (
              <RegularButton key={index} {...button} />
            )
          )}
      </div>
    </div>
  );
};

export default PageHeader;
