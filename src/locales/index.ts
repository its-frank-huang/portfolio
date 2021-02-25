import { cn } from "./cn";
import { en } from "./en";

export const resources = {
  en: {
    translation: en,
  },
  cn: {
    translation: cn,
  },
};

export type Translation = {
  name: string;
  age: string;
  from: string;
  major: string;
  nav: {
    intro: string;
    about: string;
    tech: string;
    projects: string;
    contact: string;
  };
  introduction: {
    greeting: string;
    im_a: string;
    developer: string;
  };
  about: {
    start: string;
    end: string;
    p1: string;
    p2: {
      l1: string;
      l2: string;
      l3: string;
      l4: string;
    };
    p3: {
      l1: string;
      l2: string;
    };
    p4: string;
  };
};
