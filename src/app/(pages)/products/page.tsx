import IconButton from "@/app/ui/components/Button/IconButton";
import PageHeader from "@/app/ui/components/PageHeader/PageHeader";
import SearchBox from "@/app/ui/components/SearchBox/SearchBox";
import { Pencil, Plus,  Trash } from "lucide-react";

const Page = () => {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="product"
        regularButton={{ title: "export" }}
        linkButton={{
          title: "add product",
          lucideIcon: Plus,
          href: "/products/add",
        }}
      />
      <div className="w-full flex-1 flex flex-col gap-7 p-7 bg-white rounded-md shadow">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select name="filter" id=""></select>
           <SearchBox className="w-80 h-10 rounded border border-slate-200" inputClassName="text-base text-slate-400 placeholder:text-slate-400"/>
          </div>
          <div className="flex items-center gap-4">
            <IconButton lucideIcon={Pencil} />
            <IconButton lucideIcon={Trash} />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Page;
