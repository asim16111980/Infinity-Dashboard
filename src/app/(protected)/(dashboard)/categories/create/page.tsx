import IconButton from "@/ui/components/Button/IconButton";
import RegularButton from "@/ui/components/Button/RegularButton";
import { ToggleCheckbox } from "@/ui/components/CheckBox";
import CustomLink from "@/ui/components/CustomLink";
import FileUploader from "@/ui/components/FileUploader";
import Icon from "@/ui/components/Icon";
import PageHeader from "@/ui/components/PageHeader";
import TextInput from "@/ui/components/TextInput/TextInput";
import Image from "next/image";

export default function Page() {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="add product"
        buttons={[{ variant: "secondary", title: "cancel" }, { title: "save" }]}
        backButton
      />
      <div className="w-full flex-1 flex gap-4">
        <div className="flex-1 h-min flex flex-col bg-white rounded-md px-4 shadow">
          <div className="flex flex-col gap-4 py-6">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              products <span className="font-normal text-slate-500 ml-2">{12}</span>
            </h3>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-2 bg-white border border-slate-200 rounded">
                  <Icon name="ellipsisVertical" />
                  <Image
                    width={48}
                    height={48}
                    alt=""
                    src="/Image.png"
                    className="rounded"
                  />
                  <span className="text-sm font-medium text-slate-900">
                    Women Striped T-Shirt
                  </span>
                  <div className="flex items-center gap-4 px-4 ml-auto">
                    <IconButton iconName="edit" className="text-slate-400" />
                    <IconButton iconName="trash" className="text-slate-400" />
                  </div>
                </div>
              </ul>
              <CustomLink
                variant="custom"
                href="/products/add"
                title="add pro"
                iconName="plus"
                className="w-full h-10 text-blue-500 bg-white border border-slate-200 rounded"
              />
            </div>
          </div>
        </div>
        <div className="w-96 flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4 bg-white rounded-md px-4 py-6 shadow">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Category Visibility
            </h3>
            <ToggleCheckbox label="Visible on site" checked />
          </div>
          <div className="flex flex-col items-start gap-4 bg-white rounded-md px-4 py-6 shadow">
            <h3 className="text-base font-bold text-slate-900 capitalize">
              Category Info
            </h3>
            <div className="flex flex-col gap-6 w-full">
              <TextInput
                label="Category Name"
                placeholder="Enter category name"
              />
              <FileUploader label="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
