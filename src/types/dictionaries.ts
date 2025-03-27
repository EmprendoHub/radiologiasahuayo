export type ContactDicProp = {
  hero: {
    pretitle: string;
    title: string;
  };
  contactInfo: {
    pretitle: string;
    title: string;
    titleTwo: string;
    subtitle: string;
    social: string;
    phone: string;
    questions: string;
  };
};

export type HomeDicProps = {
  sideText: {
    title: string;
    titleTwo: string;
  };
  doublesides: {
    boxOne: {
      title: string;
      titleTwo: string;
      text: string;
      imgUrl: string;
    };
    boxTwo: {
      title: string;
      titleTwo: string;
      text: string;
      imgUrl: string;
    };
  };
};

export type AboutDicProps = { hero: { title: string; subtitle: string } };
