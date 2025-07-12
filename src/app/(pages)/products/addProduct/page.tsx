import PageHeader from "@/app/ui/components/PageHeader/PageHeader";
import { Plus } from "lucide-react";

const Page = () => {
    return (
        <section className="size-full flex flex-col gap-7 bg-slate-200 p-7" >
        <PageHeader title="product" regularButton={{ title: "export" }} iconButton={{title:"add product",lucideIcon:Plus}}/>
        </section>
    );
}

export default Page; 