import NewsLetter from "../components/common/NewsLetter";
import ContentContact from "../components/home/ContentContact";
import ContentInner1 from "../components/home/ContentInner1";
import ContentInner2 from "../components/home/ContentInner2";
import ContentInner3 from "../components/home/ContentInner3";
import ContentInner4 from "../components/home/ContentInner4";
import ContentInner5 from "../components/home/ContentInner5";
import ContentInner6 from "../components/home/ContentInner6";
import HeroContent from "../components/home/HeroContent";
import Plans from "../components/home/Plans";

const Home = () => {
  return (
    <>
      <HeroContent />
      <ContentInner1 />
      <ContentInner2 />
      <ContentInner3 />
      <ContentInner4 />
      <ContentInner5 />
      <ContentInner6 />
      <Plans />
      <ContentContact />
      <div className="relative z-20 -mb-32 bg-brand-navy">
        <div className="container mx-auto px-6">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
