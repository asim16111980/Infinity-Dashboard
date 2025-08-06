import IconButton from "../Button/IconButton";
import { TagProps } from "./tag.type";

const Tag = ({ id, title, onRemoveValue }: TagProps) => {
  return (
    <div
      className="w-fit h-6 flex items-center justify-center gap-1 p-2 bg-slate-200 rounded"
    >
      <span>{title}</span>
      {onRemoveValue && (
        <IconButton
          iconName="x"
          aria-label={`Remove ${title}`}
          onClick={() => onRemoveValue(id)}
          className="size-6 text-slate-400 p-0.5"
        />
      )}
    </div>
  );
};

export default Tag;
