import AdminAside from "./_components/AdminSide";
import { getDictionary } from "@/lib/dictionary.mjs";

export default async function AdminLayout({
  children,
  params,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  const lang = params.lang;
  const { admin } = await getDictionary(lang);
  return (
    <div className="max-w-full pr-2">
      <div className="flex items-start w-full ">
        <AdminAside lang={lang} admin={admin} />
        <div className="relative w-full mb-5 ">{children}</div>
      </div>
    </div>
  );
}
