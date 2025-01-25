import AdminAside from "./_components/AdminSide";
import { getDictionary } from "@/lib/dictionary.mjs";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
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
