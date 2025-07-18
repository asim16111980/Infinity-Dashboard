import IconButton from "@/ui/components/Button/IconButton";
import CheckBox from "@/ui/components/CheckBox/CheckBox";
import Dropdown from "@/ui/components/Dropdown/Dropdown";
import PageHeader from "@/ui/components/PageHeader/PageHeader";
import SearchBox from "@/ui/components/SearchBox/SearchBox";
import { FILTER_ITEMS } from "@/constants/filterItems";
import { ArrowLeft, ArrowRight, Pencil, Plus, Trash } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="product"
        regularButtons={[
          {
            variant: "secondary",
            title: "export",
            className: "w-24 h-10 bg-white text-base text-blue-700 rounded",
          },
          {
            asLink: true,
            title: "add product",
            lucideIcon: Plus,
            iconClassName: "size-6",
            href: "/products/add",
            className:
              "w-40 h-10 gap-2 text-white text-base bg-blue-700 rounded",
          },
        ]}
      />
      <div className="w-full flex-1 flex flex-col gap-7 p-7 bg-white rounded-md shadow">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Dropdown title="filter" items={FILTER_ITEMS} />
            <SearchBox
              className="w-80 h-10 rounded bg-white border border-slate-200"
              iconClassName="text-slate-500"
              inputClassName="text-base text-slate-400 placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-4">
            <IconButton
              lucideIcon={Pencil}
              className="size-10 bg-white text-blue-500 border border-slate-200 rounded hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            />
            <IconButton
              lucideIcon={Trash}
              className="size-10 bg-white text-blue-500 border border-slate-200 rounded hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            />
          </div>
        </div>
        <div className="w-full flex-1 overflow-x-auto">
          <table className="min-w-full">
            <thead className="w-full h-11 border-b-2 border-slate-200">
              <tr className="text-sm text-slate-500">
                <th>
                  <CheckBox
                    label="product"
                    className="gap-2 text-sm text-slate-500 capitalize font-normal"
                    checkBoxClassName="size-5"
                    inputClassName="rounded border border-slate-300"
                  />
                </th>
                <th className="capitalize font-normal">inventory</th>
                <th className="capitalize font-normal">color</th>
                <th className="capitalize font-normal">price</th>
                <th className="capitalize font-normal">rating</th>
              </tr>
            </thead>
            <tbody>
              {/* {products.map((product) => (
      <tr key={product.id} className="hover:bg-slate-50">
        <td><img src={product.image} className="w-10 h-10 rounded" /></td>
        <td className="font-medium">{product.name}</td>
        <td>${product.price}</td>
        <td>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
            Active
          </span>
        </td>
        <td>
          <button>✏️</button>
          <button>🗑️</button>
        </td>
      </tr>
    ))} */}
            </tbody>
          </table>
        </div>
        <div className="w-full h-9 flex items-center justify-between">
          <div className="w-96 flex items-center justify-between">
            <IconButton lucideIcon={ArrowLeft} className="text-slate-400" />
            <ul className="flex-1 flex items-center text-base text-slate-600 mx-2">
              <li>
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#">...</Link>
              </li>
            </ul>
            <IconButton lucideIcon={ArrowRight} className="text-slate-400" />
          </div>
          <span className="text-base text-slate-600">Results</span>
        </div>
      </div>
    </section>
  );
};

export default Page;
