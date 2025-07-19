import TextInput from "@/ui/components/TextInput/TextInput";
import PageHeader from "@/ui/components/PageHeader/PageHeader";
import Textarea from "@/ui/components/Textarea/Textarea";

const Page = () => {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="add product"
        regularButtons={[
          {
            variant: "secondary",
            title: "cancel",
            className: "bg-white text-base text-blue-700 rounded",
          },
          {
            title: "save",
            href: "/products/add",
            className:
              "text-white text-base bg-blue-700 rounded",
          },
        ]}
        backButton
      />
      <div className="w-full flex-1 flex gap-4">
        <div className="flex-1 flex flex-col bg-white rounded-md px-4 shadow divide-y divide-slate-200">
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900">Information</h3>
            <TextInput
              label="Product Name"
              // value=""
              // onChange={() => {}}
              placeholder="product name"
            />
            <Textarea
              label="Product Description"
              placeholder="Product description"
            />
          </div>
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900">Information</h3>
            <TextInput
              label="Product Name"
              // value=""
              // onChange={() => {}}
              placeholder="product name"
            />
            <Textarea
              label="Product Description"
              placeholder="Product description"
            />
          </div>
        </div>
        <div className="w-96"></div>
      </div>
    </section>
  );
};

export default Page;
