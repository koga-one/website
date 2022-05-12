import * as React from "react";
import Layout from "../components/layout";

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <div className="flex h-screen font-fira">
        <div className="mx-auto flex flex-col items-center gap-8 self-center">
          <p className="text-h1 font-black text-aka tablet:text-d3 desktop:text-d2">
            404
          </p>
          <p className="text-h5">Why are you here? This page doesn't exist!</p>
          <a
            className="k-interactable-simple rounded-md bg-katsu px-4 py-2 text-kami"
            href="javascript:history.back()"
          >
            Go Back
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
