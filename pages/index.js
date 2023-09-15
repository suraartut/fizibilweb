import {
  BannerAbout,
  BannerTop,
  References,
  OurWorks,
} from "@/components/Home";
import BannerMobile from "@/components/Home/BannerTopMobile/BannerMobile";

export default function Home() {
  return (
    <>
      <BannerTop />
      <BannerMobile />
      <BannerAbout />
      <OurWorks />
      <References />
    </>
  );
}
