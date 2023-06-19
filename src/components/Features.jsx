import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="container flex flex-col justify-center items-center px-4 mx-auto mt-10 space-y-12 md:justify-start md:items-start md:space-y-0 md:flex-row">
        <div className="flex flex-col justify-center items-center space-y-12 md:space-y-0 w-1/2 md:justify-start md:items-start">
          <h2 className="text-4xl text-center max-w-md mb-10 font-bold md:text-left">
            What’s different?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            This products provides everything your team needs, without
            complexity. Our product is tailor-made for modern digital product
            teams
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track Company Wide Progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track Company Wide Progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced Built-in Reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced Built-in Reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything You Need In One Place
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything You Need In One Place
              </h3>
              <p className="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
