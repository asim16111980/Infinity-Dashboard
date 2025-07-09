import RegularButton from "../Button/RegularButton";
import { PageHeaderProps } from "./PageHeader.type";

const PageHeader = ({ title, regularButton, iconButton }: PageHeaderProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {regularButton && <RegularButton title={regularButton.title} />}
    </div>
  );
};

export default PageHeader;
