import DashComponent from "./_components/DashComponent";
import { getDashboard } from "../_actions";

const AdminDashboardPage = async ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const data = await getDashboard(lang);

  return (
    <>
      <DashComponent data={data} lang={lang} />
    </>
  );
};

export default AdminDashboardPage;
