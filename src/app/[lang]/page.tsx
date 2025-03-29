import { getDictionary } from "@/lib/dictionary.mjs";
import ImageHero from "@/components/home/ImageHero";
// import DoubleSideToSide from "@/components/home/DoubleSideToSide";
import CategoriesComp from "@/components/home/CategoriesComp";
import HeroSlider from "@/components/home/HeroSlider";
import SingleSideToSide from "@/components/home/SingleSideToSide";
import ContactInner from "@/components/home/ContactInner";
import Marquee from "@/components/marquees/Marquee";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const { homeDic, flipBoxes, contactDic, categoryDic } = await getDictionary(
    lang
  );

  return (
    <div className="overflow-x-hidden">
      <ImageHero homeDic={homeDic} lang={lang} />
      <Marquee />
      {/* <DoubleSideToSide homeDic={homeDic} lang={lang} /> */}
      <CategoriesComp categoryDic={categoryDic} />
      <HeroSlider homeDic={homeDic} />
      <SingleSideToSide flipBoxes={flipBoxes} homeDic={homeDic} />
      <ContactInner homeDic={homeDic} contactDic={contactDic} />
    </div>
  );
}
