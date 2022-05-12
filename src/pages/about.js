import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Form from "../components/contact";

const About = () => {
  return (
    <Layout pageTitle="About">
      <Header title="About"></Header>
      <article>
        <div cvlas>
          <h2 className="text-d1">ok, so you want to know more about me?</h2>
        </div>
        <div className="prose mx-auto mb-4 flex max-w-[80ch] rounded-lg bg-aka bg-opacity-10 px-4 py-8 text-katsu desktop:prose-lg desktop:mb-1 desktop:p-8">
          <div className="mx-auto">
            <Form></Form>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default About;
