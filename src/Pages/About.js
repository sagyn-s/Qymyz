import React from "react";
import Work from "../Components/Work";
import { eduDetails, personalDetails, workDetails } from "../Details";

function About() {
  const createMarkup = () => ({ __html: personalDetails.about });
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl" dangerouslySetInnerHTML={createMarkup()}></p>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, CompanyLink, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              companylink={CompanyLink}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, CompanyLink, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              companylink={CompanyLink}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
