import LinkButton from "../Button/LinkButton";
import RegularButton from "../Button/RegularButton";
import { PageHeaderProps } from "./PageHeader.type";

const PageHeader = ({ title, regularButton, linkButton }: PageHeaderProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900 capitalize">{title}</h2>
      <div className="flex items-center gap-3">
        {regularButton && <RegularButton title={regularButton.title} />}
        {linkButton && (
          <LinkButton
            title={linkButton.title}
            lucideIcon={linkButton.lucideIcon}
            href={linkButton.href}
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
