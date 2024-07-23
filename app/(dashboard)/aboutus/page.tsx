import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-background text-foreground">
      <div className="bg-background text-foreground p-10">
        {/* Header */}

        {/* Body */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent text-center">
          BudgetTracker <span className="text-primary">(Designed for You)</span>
        </div>
        
        <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent text-center mt-4">
            Making managing finances easier with our budget management and
            tracking features and services.
        </p>

        {/* Features */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text font-bold leading-tight tracking-tighter text-transparent mt-12">
          <h2 className=" text-4xl font-semibold">Features</h2>
        </div>
        <div className="text-primary">
          <div className="mt-4 flex text-center">
              <span className="text-2xl font-bold mr-3">Transaction Management</span>
              <span className="text-2xl font-bold mr-3">Category Statistics</span>
              <span className="text-2xl font-bold mr-3">Historical Data Aggregates</span>
              <span className="text-2xl font-bold mr-3">Stunning Charts</span>
          </div>
        </div>

        {/* Why Us */}
        <div className="mt-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text font-bold leading-tight tracking-tighter text-transparent">
          <h2 className="text-4xl font-semibold">Why Us?</h2>
          <div className="flex space-x-4">
            <div className="w-1/2 mt-8 rounded-md">
              <Image
                src="/images/one.jpg"
                alt="Left Image"
                width={400}
                height={300}
              />
            </div>
            <div className="w-1/2 mt-8">
              <p className="text-primary text-2xl">
                Our Team all come to work every day to enable people to make
                smart decisions about their money. We believe that managing
                finance should be as effortless as shopping online. It should be
                done anytime, anywhere, and in a few clicks.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2 mt-8">
              <p className="text-primary text-2xl">
                What started as a simple expense tracker for a small group of
                people has grown into a personal finance app that brings beauty
                to the finances of our users from parents, to working
                professionals, to students, to businesses and more.
              </p>
            </div>
            <div className="w-1/2 mt-8">
              <Image
                src="/images/two.jpg"
                alt="Right Image"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Stress-Free Financial Life */}
        <div className="mt-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text font-bold leading-tight tracking-tighter text-transparent">
          <h2 className="text-4xl font-semibold">
            We Want to Make Your Financial Life Stress-Free
          </h2>
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2 mt-8">
              <Image
                src="/images/three.jpg"
                alt="Left Image"
                width={400}
                height={300}
              />
            </div>
            <div className="w-1/2 mt-8">
              <p className="text-primary text-2xl">
                We help you get your finances into shape so that you don&apos;t need
                to stress about every dollar you spend. Knowing how much and
                what you spend makes it easier to change your financial habits
                if needed.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2 mt-8">
              <p className="text-primary text-2xl">
                Our goal is to provide you with the tools and insights to manage
                your money effectively, without unnecessary stress. Whether
                you&apos;re saving for a big purchase, planning for retirement, or
                simply tracking your daily expenses, we&apos;ve got you covered.
              </p>
            </div>
            <div className="w-1/2 mt-8">
              <Image
                src="/images/four.jpg"
                alt="Right Image"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mt-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text font-bold leading-tight tracking-tighter text-transparent">
          <h2 className="text-4xl font-semibold">Meet The Team</h2>
          {/* Team member cards */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Abbas */}
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              </div>
              <h3 className="text-lg font-semibold text-primary">Abbas</h3>
              <p className="text-gray-600">abbas@btracker.ca</p>
            </div>

            {/* Sherie */}
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              </div>
              <h3 className="text-lg font-semibold text-primary">Sherie</h3>
              <p className="text-gray-600">sherie@btracker.ca</p>
            </div>

            {/* Shoba */}
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              </div>
              <h3 className="text-lg font-semibold text-primary">Shoba</h3>
              <p className="text-gray-600">shoba@btracker.ca</p>
            </div>

            {/* Kimberly */}
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              </div>
              <h3 className="text-lg font-semibold text-primary">Kimberly</h3>
              <p className="text-gray-600">kimberly@btracker.com</p>
            </div>

            {/* Abin */}
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full overflow-hidden">
              </div>
              <h3 className="text-lg font-semibold text-primary">Abin</h3>
              <p className="text-gray-600">abin@btracker.ca</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <h2 className="text-gray-600">
          If you want to get in touch with us:
          <br />
          <strong className="text-primary-foreground">For Support:</strong>{" "}
          contact@btracker.ca
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-600">
              For Business Opportunities & Marketing Purposes:
              <br />
              <strong>business@btracker.ca</strong>
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              For Media & PR Opportunities:
              <br />
              <strong>media@btracker.ca</strong>
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              For Job Opportunities:
              <br />
              <strong>career@btracker.ca</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
