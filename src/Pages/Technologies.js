import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    vscode,
    git,
    github,
    npm,
    python,
    qt,
    pygame,
    bootstrap,
    flask,
    sql,
    sqlalchemy,
    fastapi,
    docker,
    mongodb,
    aws,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={python} title="Python" alt="" />
        <img src={qt} title="QT" alt="" />
        <img src={pygame} title="Pygame" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={flask} title="Flask" alt="" />
        <img src={sql} title="SQL" alt="" />
        <img src={sqlalchemy} title="SQLAlchemy" alt="" />
        <img src={fastapi} title="FastAPI" alt="" />
        <img src={docker} title="Docker" alt="" />
        <img src={mongodb} title="MongoDB" alt="" />
        <img src={aws} title="Amazon Web Services" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
      </section>
    </main>
  );
}

export default Technologies;
