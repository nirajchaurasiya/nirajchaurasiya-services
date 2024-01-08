"use client";

import { useRouter } from "next/navigation";
export default function ServicesCard() {
  const router = useRouter();
  const navigateToRequiredDestiny = (type: string) => {
    router.push(`/service/${type}`);
  };
  return (
    <section className="text-gray-300 body-font overflow-hidden">
      <div className="container px-5 py-12 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-100">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-gray-300">
            Build a standout website with us!
          </p>

          {/* <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div> */}
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                STARTER
              </h2>
              <h1 className="text-5xl text-gray-100 pb-4 mb-4 border-b border-gray-200 leading-none">
                $20
              </h1>
              <p className="mb-2 text-xl">
                HTML + CSS (Foundational Web Design)
              </p>
              <p className="mb-2 text-xs">Features</p>

              {[
                "Structured",
                " Responsive",
                "Fast",
                "SEO-friendly",
                "Hosting on request (additional charges)",
                "Domain name on request (additional charge) ",
              ].map((e) => (
                <p key={e} className="flex items-center text-gray-300 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {e}
                </p>
              ))}
              <p className="flex items-center text-gray-300 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                and many more...
              </p>
              <button
                onClick={() => {
                  navigateToRequiredDestiny("starter-pack");
                }}
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                Interested? Learn more!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-300 mt-3">
                Great for the people wh has just started!
              </p>
            </div>
          </div>

          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                BASIC
              </h2>
              <h1 className="text-5xl text-gray-100 pb-4 mb-4 border-b border-gray-200 leading-none">
                $60
              </h1>
              <p className="mb-2 text-xl">
                HTML + CSS + JS (Interactive Web Design)
              </p>
              {[
                "Includes starter pack",
                "Interactive",
                "Dynamic",
                "Engaging",
                "Cross-browser",
                "Hosting on request (additional charges)",
                "Domain name on request (additional charge) ",
              ].map((e) => (
                <p key={e} className="flex items-center text-gray-300 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {e}
                </p>
              ))}
              <p className="flex items-center text-gray-300 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                and many more...
              </p>
              <button
                onClick={() => {
                  navigateToRequiredDestiny("basic-pack");
                }}
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                Interested? Learn more!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-300 mt-3">Let&apos;s build it!</p>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                PRO
              </h2>
              <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$150</span>
              </h1>
              <p className="mb-2 text-xl">
                HTML + CSS + JS + PHP (Server-Side Development)
              </p>
              <p className="mb-2 text-xs">Features</p>
              {[
                "Includes starter and basic pack",
                "Dynamic",
                "Database-driven",
                "Secure",
                "Hosting on request (additional charges)",
                "Domain name on request (additional charge) ",
              ].map((e) => (
                <p key={e} className="flex items-center text-gray-300 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {e}
                </p>
              ))}
              <p className="flex items-center text-gray-300 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                and many more...
              </p>
              <button
                onClick={() => {
                  navigateToRequiredDestiny("pro-pack");
                }}
                className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
              >
                Interested? Learn more!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-300 mt-3">
                Fully flexible application!
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                SPECIAL
              </h2>
              <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$299</span>
              </h1>
              <p className="mb-2 text-xl">
                React + Node.js (Single-Page Applications)
              </p>
              <p className="mb-2 text-xs">Features</p>
              {[
                "Modular",
                "Server-rendered",
                "Virtual DOM",
                "Secure",
                "Efficient",
                "Hosting on request (additional charges)",
                "Domain name on request (additional charge) ",
              ].map((e) => (
                <p key={e} className="flex items-center text-gray-300 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {e}
                </p>
              ))}
              <p className="flex items-center text-gray-300 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                and many more...
              </p>
              <button
                onClick={() => {
                  navigateToRequiredDestiny("special-pack");
                }}
                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              >
                Interested? Learn more!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-300 mt-3">
                Let&apos;s build your first single page application!
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
              <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                Advanced
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                ADVANCED PACKAGE
              </h2>
              <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$600+</span>
              </h1>
              <p className="mb-2 text-xl">Custom Full-Stack Solution</p>
              <p className="mb-2 text-xs">Features</p>
              {[
                "Include special package",
                "Comprehensive",
                "Adaptable",
                "Scalable",
                "Full-stack",
                "Hosting on request (additional charges)",
                "Domain name on request (additional charge) ",
              ].map((e) => (
                <p key={e} className="flex items-center text-gray-300 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {e}
                </p>
              ))}
              <p className="flex items-center text-gray-300 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                and many more...
              </p>
              <button
                onClick={() => {
                  navigateToRequiredDestiny("custom-pack");
                }}
                className="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
              >
                Interested? Learn more!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-300 mt-3">
                Contact for more information!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
