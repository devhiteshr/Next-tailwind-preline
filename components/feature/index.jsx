import Image from "next/image";
import React from "react";
import ReactImg from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import ReactHooks from "../../assets/hook.png";
import DarkMode from "../../assets/dark-mode.png";
import ReduxToolkit from "../../assets/redux-toolkit.png";
import LayoutImg from "../../assets/layout.png";
import ResponsiveImg from "../../assets/responsive.png";
import TrustedSupport from "../../assets/support.png";

const Feature = () => {
  return (
    <div>
      <section id="features" class="py-32 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-6">
          <div class="max-w-2xl mx-auto text-center mb-10">
            <h2 class="mb-3 text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 text-transparent">
              Amazing Features
            </h2>
            <p class="mt-2 lg:text-lg text-gray-600 dark:text-gray-200">
              Elstar is feature rich, yet not overly complex and easily
              extensible, it comes with everything developers have been looking
              for.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={ReactImg}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Latest React</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Elstar built with latest version of react (v18) &amp; Create
                  React App without build setup configuration
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={Tailwind}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Tailwind</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Tailwind CSS is a first-utility framework that allow
                  developers build a unique User Interface
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={ReactHooks}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">React Hooks</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  All component written in functional way that let you to use
                  state or other React lifecycle without a class
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={DarkMode}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Dark Mode</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Elstar provide dark &amp; light mode selection, every single
                  piece of UI was adaptable with dark mode
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={ReduxToolkit}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Redux Toolkit</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Redux toolkit make state management easier to maintain &amp;
                  less boilerplate compare with just Redux
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={LayoutImg}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Various Layout</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Elstar has various option of layouts &amp; allow you to set
                  different layouts for different routes
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={ResponsiveImg}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Fully Responsive</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  Every page &amp; components in Elstar is fully responsive and
                  able to fit perfectly in any screens
                </p>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-slate-700 p-6 rounded-md flex flex-col justify-between min-h-[260px]">
              <div class="rounded-full bg-white dark:bg-slate-600 h-[70px] w-[70px] drop-shadow p-1">
                <Image
                  class="rounded-full bg-indigo-50"
                  src={TrustedSupport}
                  alt="Latest React"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <h4 class="font-semibold mb-3">Trusted Support</h4>
                <p class="max-w-[300px] min-h-[72px] text-base">
                  We will always around, when you have any question or concern,
                  our support helps you solve any issues you have
                </p>
              </div>
            </div>
          </div>
          <div class="mt-10 text-center">
            <button class="button bg-white border border-gray-600 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-14 px-8 py-2 text-base h-12">
              And a lot more...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
