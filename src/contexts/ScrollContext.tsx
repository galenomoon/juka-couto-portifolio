import React, { createContext, useRef } from "react";

export const ScrollContext = createContext({
  ref_skills_and_experience: React.createRef(),
  ref_projects: React.createRef(),
  ref_contact: React.createRef(),
  scrollTo: (ref: any, mobile?: boolean) => {},
});

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref_skills_and_experience = useRef(null);
  const ref_projects = useRef(null);
  const ref_contact = useRef(null);

  const scrollTo = (ref: any, mobile?: boolean) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: mobile ? "start" : "center",
    });
  };

  return (
    <ScrollContext.Provider
      value={{ ref_skills_and_experience, ref_projects, ref_contact, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
