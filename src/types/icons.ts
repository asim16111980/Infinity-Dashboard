import { ICONS } from "@/constants/icons";

export type IconName = keyof typeof ICONS;
export type IconRendererProps = {
  name: IconName;
  className?: string;
};

// export type SocialIconProps = {
//   name: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
//   className?: string;
// };