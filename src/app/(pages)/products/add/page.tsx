"use client";

import TextInput from "@/ui/components/TextInput/TextInput";
import PageHeader from "@/ui/components/PageHeader/PageHeader";
import Textarea from "@/ui/components/Textarea/Textarea";
import FileUploader from "@/ui/components/FileUploader/FileUploader";
import ToggleButton from "@/ui/components/Button/ToggleButton";
import ProductOptionsManager from "@/ui/components/ProductOptionsManager";
import { useState } from "react";
import ProductOptionValues from "@/ui/components/ProductOptionValues";
import ProductOptionSelector from "@/ui/components/ProductOptionSelector/ProductOptionSelector";
import { DropdownOption } from "@/ui/components/Dropdown";

const Page = () => {
  const [hasMultipleOptions, setHasMultipleOptions] = useState(true);

  const handleRemoveValue = (values:string[]) => {
    console.log(values);
  };
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      {/* <PageHeader
        title="add product"
        regularButtons={[
          {
            variant: "secondary",
            title: "cancel",
          },
          {
            title: "save",
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
            <h3 className="text-base font-bold text-slate-900">Images</h3>
            <FileUploader />
          </div>
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900">Price</h3>
            <div className="flex items-center justify-between">
              <TextInput label="Product Price" placeholder="Enter price" />
              <TextInput
                label="Discount Price"
                placeholder="Price at Discount"
              />
            </div>
            <ToggleButton label="Add tax for this product" />
          </div> */}
      {/* <ProductOptionValues
        initialValues={["red", "blue", "green"]}
        onRemoveValue={handleRemoveValue}
      /> */}
      <ProductOptionSelector
        initialOption={   { label: "color", value: ["red", "blue", "green"] }}
        initialOptions={[
          { label: "color", value: ["red", "blue", "green"] },
          { label: "size", value: ["small", "medium", "large"] },
        ]}
        onRemoveValue={() => {}}
      />
      {/* <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900">
              Different Options
            </h3>
            <ToggleButton
              label="This product has multiple options"
              checked={hasMultipleOptions}
              onChange={() => setHasMultipleOptions(!hasMultipleOptions)}
            />
            {hasMultipleOptions && (
              <ProductOptionsManager
                initialOptions={[
                  { label: "color", value: ["red", "blue", "green"] },
                  { label: "size", value: ["small", "medium", "large"] },
                ]}
              />
            )}
          </div>
        </div>
        <div className="w-96"></div>
      </div> */}
    </section>
  );
};

export default Page;
