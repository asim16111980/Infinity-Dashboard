import Link from "next/link";
import { CustomLinkProps } from "./customLink.type";
import Icon from "../Icon/Icon";

const CustomLink = ({
  href,
  className,
  title,
  iconName,
  iconClassName,
}: CustomLinkProps) => {
  return (
    <Link
      href={href ?? "#"}
      className={className}
      aria-label={title ?? undefined}
    >
      {iconName && (
        <Icon name={iconName} className={iconClassName} aria-hidden="true" />
      )}
      <span className="capitalize">{title}</span>
    </Link>
  );
};

export default CustomLink;
