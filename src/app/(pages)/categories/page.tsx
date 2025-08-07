import PageHeader from "@/ui/components/PageHeader";

export default function Page() {
  return (
    <section className="size-full flex flex-col gap-7 bg-slate-200 p-7">
      <PageHeader
        title="Categories"
        links={[
          {
            title: "add product",
            iconName: "plus",
            iconClassName: "size-6",
            href: "/categories/create",
          },
        ]}
      />
    </section>
  );
}
