import PageHeader from "@/ui/components/PageHeader/PageHeader";
import { Plus } from "lucide-react";

const Page = () => {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="add product"
        regularButtons={[
          {
            variant: "secondary",
            title: "cancel",
            className: "w-24 h-10 bg-white text-base text-blue-700 rounded",
          },
          {
            title: "add product",
            href: "/products/add",
            className:
              "w-40 h-10 gap-2 text-white text-base bg-blue-700 rounded",
          },
        ]}
        backButton
      />
    </section>
  );
};

export default Page;
