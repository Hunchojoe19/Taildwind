import React from "react";
import avatarAnisha from "../assets/png/avatarAnisha.png";
import avatarRichard from "../assets/png/avatarRichard.png";
import avatarAli from "../assets/png/avatarAli.png";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="max-w-6xl p-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">What's different?</h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarAnisha} className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>

            <p className="text-sm text-darkGrayishBlue">
              This Product has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarRichard} className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>

            <p className="text-sm text-darkGrayishBlue">
              This Product has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.
            </p>
          </div>
          <div className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatarAli} className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>

            <p className="text-sm text-darkGrayishBlue">
              We have been able to cancel so many other subscriptions since
              using this Product. There is no more cross-channel confusion and
              everyone is much more focused.
            </p>
          </div>
        </div>
        <div className="my-16">
          <a
            href=""
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
