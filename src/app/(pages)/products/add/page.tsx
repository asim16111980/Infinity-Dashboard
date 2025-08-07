"use client";
import TextInput from "@/ui/components/TextInput";
import PageHeader from "@/ui/components/PageHeader";
import Textarea from "@/ui/components/Textarea/Textarea";
import FileUploader from "@/ui/components/FileUploader/FileUploader";
import { ToggleCheckbox } from "@/ui/components/CheckBox";
import ProductOptionsManager from "@/ui/components/ProductOptionsManager";
import { useState } from "react";
import { EssentialOption } from "@/ui/components/ProductOptionsManager";
import { CATEGORIES } from "@/constants/categories";
import CheckBox from "@/ui/components/CheckBox";
import Tag from "@/ui/components/Tag";
import CustomLink from "@/ui/components/CustomLink";

const Page = () => {
  const [hasMultipleOptions, setHasMultipleOptions] = useState<boolean>(true);
  const [essentialOptions, setEssentialOptions] = useState<EssentialOption[]>(
    []
  );
  const [tags, setTags] = useState<string[]>([]);

  const handleChangeOptions = (essentialOptions: EssentialOption[]) => {
    setEssentialOptions(essentialOptions);
  };

  function handleKeyDown(value: string): boolean {
    if (value.trim() !== "") {
      setTags((prevTags) => [...prevTags, value.trim()]);
      return true;
    }
    return false;
  }

  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="add product"
        buttons={[{ variant: "secondary", title: "cancel" }, { title: "save" }]}
        backButton
      />
      <div className="w-full flex-1 flex gap-4">
        <div className="flex-1 flex flex-col bg-white rounded-md px-4 shadow divide-y divide-slate-200">
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Information
            </h3>
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
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Images
            </h3>
            <FileUploader />
          </div>
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Price
            </h3>
            <div className="flex items-center justify-between">
              <TextInput label="Product Price" placeholder="Enter price" />
              <TextInput
                label="Discount Price"
                placeholder="Price at Discount"
              />
            </div>
            <ToggleCheckbox label="Add tax for this product" />
          </div>

          <div className="flex flex-col gap-6 py-6">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Different Options
            </h3>
            <ToggleCheckbox
              label="This product has multiple options"
              checked={hasMultipleOptions}
              onChange={() => setHasMultipleOptions(!hasMultipleOptions)}
            />
            {hasMultipleOptions && (
              <ProductOptionsManager
                initialOptions={[
                  {
                    id: 0,
                    label: "color",
                    value: [
                      { id: 0, title: "red" },
                      { id: 1, title: "blue" },
                      { id: 2, title: "green" },
                    ],
                    selected: false,
                  },
                  {
                    id: 1,
                    label: "size",
                    value: [
                      { id: 0, title: "small" },
                      { id: 1, title: "medium" },
                      { id: 2, title: "large" },
                    ],
                    selected: false,
                  },
                ]}
                initialOptionIndex={0}
                onChangeOptions={handleChangeOptions}
              />
            )}
          </div>
        </div>
        <div className="w-96 flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4 bg-white rounded-md px-4 py-6 shadow">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Categories
            </h3>
            <ul className="flex flex-col gap-4">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <CheckBox
                    id={`category-${category.id}`}
                    name="categories"
                    value={category.id}
                    label={category.name}
                    labelClasses="gap-2 text-sm text-slate-900 capitalize font-normal"
                    checkboxClasses="size-5"
                    className="rounded border border-slate-300"
                  />
                </li>
              ))}
            </ul>
            <CustomLink
              variant="secondary"
              href="/categories/create"
              title="Create New"
            />
          </div>
          <div className="flex flex-col gap-4 bg-white rounded-md px-4 py-6 shadow">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Tags
            </h3>
            <TextInput
              label="Add Tags"
              placeholder="Enter tag name"
              onKeyDown={handleKeyDown}
            />
            <ul className="flex flex-wrap gap-4">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  id={index}
                  title={tag}
                  onRemoveValue={(id) =>
                    setTags(tags.filter((_, i) => i !== id))
                  }
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 bg-white rounded-md px-4 py-6 shadow">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              SEO Settings
            </h3>
            <TextInput label="Title" />
            <Textarea label="Description" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
