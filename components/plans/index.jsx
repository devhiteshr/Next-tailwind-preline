import Link from "next/link";
import React from "react";

const Plans = () => {
  return (
    <div class="relative">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="mb-3 text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 text-transparent">
            Compare plans
          </h2>
        </div>

        <div class="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-2">
              <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Features
              </span>
            </div>

            <div class="col-span-1">
              <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Free
              </span>
              <p class="mt-2 text-sm text-gray-500">Free forever</p>
            </div>

            <div class="col-span-1">
              <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <p class="mt-2 text-sm text-gray-500">
                $39 per month billed annually
              </p>
            </div>

            <div class="col-span-1">
              <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Team
              </span>
              <p class="mt-2 text-sm text-gray-500">
                $89 per month billed annually
              </p>
            </div>

            <div class="col-span-1">
              <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <p class="mt-2 text-sm text-gray-500">
                $149 per month billed annually
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-4 lg:space-y-0">
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 lg:py-3">
              <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                General
              </span>
            </li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Number of seats
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">1</span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  Up to 3
                </span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  Up to 10
                </span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Storage
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  15 GB
                </span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  1 TB
                </span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  15 TB
                </span>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <span class="text-sm text-gray-800 dark:text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Email sharing
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Any time, anywhere access
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-6 space-y-4 lg:space-y-0">
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 lg:py-3">
              <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Financial data
              </span>
            </li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Open/High/Low/Close
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Price-volume difference indicator
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-6 space-y-4 lg:space-y-0">
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 lg:py-3">
              <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                On-chain data
              </span>
            </li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Network growth
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Average token age consumed
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Exchange flow
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Total ERC20 exchange funds flow
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Transaction volume
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Total circulation (beta)
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Velocity of tokens (beta)
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                ETH gas used
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-6 space-y-4 lg:space-y-0">
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 lg:py-3">
              <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Social data
              </span>
            </li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Dev activity
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Topic search
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>

          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
                Relative social dominance
              </span>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg
                  class="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>

            <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
              <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg
                  class="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <div class="hidden lg:block mt-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-2"></div>

            <div class="col-span-1">
              <Link
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>

            <div class="col-span-1">
              <Link
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-blue-900 hover:bg-blue-700 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-white transition dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>

            <div class="col-span-1">
              <Link
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>

            <div class="col-span-1">
              <Link
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        <div class="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Need a custom plan?
          </p>

          <button
            type="button"
            class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
