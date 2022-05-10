import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Form = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg font-inter text-katsu">
      <p className="!my-0 text-center font-garamond text-h3 font-bold">
        Contact Me
      </p>
      <form
        className="flex flex-col gap-1"
        method="post"
        action="https://getform.io/f/d62f8969-97e4-4ec0-86f8-7c7d1044470a"
      >
        <input
          className="k-inputfield"
          type="text"
          name="name"
          placeholder="What should I call you?"
        />
        <input
          className="k-inputfield"
          type="text"
          name="message"
          placeholder="I'm all ears!"
        />
        <input
          className="k-inputfield"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <button className="k-inputsend" type="submit">
          Send
        </button>
      </form>
      <p className="my-1 text-center">
        If you want, you can send me a message on Twitter or Instagram!
      </p>
      <div className="mx-auto mb-4">
        <Link
          className="k-interactable mx-2 mt-2 self-end rounded-md px-2 pb-2"
          to="https://twitter.com/koga_one"
        >
          <StaticImage
            className="h-8 w-8"
            src="../images/twitter-dark.svg"
            alt="Twitter Icon by Icons8"
          />
        </Link>
        <Link
          className="k-interactable mx-2 mt-2 self-end rounded-md px-2 pb-2"
          to="https://www.instagram.com/koga.one_/"
        >
          <StaticImage
            className="h-8 w-8"
            src="../images/insta-dark.svg"
            alt="Instagram Icon by Icons8"
          />
        </Link>
      </div>
    </div>
  );
};

export default Form;
