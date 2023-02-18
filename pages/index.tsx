import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Keyzy Technical Assignment</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Keyzy" />
        <meta name="application-name" content="Keyzy" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">Keyzy Technical Assignment</h1>

        <div className="flex flex-nowrap columns-2">
          <div>
            <div>
              <h2 className="mt-3 text-2xl">Inputs</h2>
              <form className="relative pt-1">
                <div className="grid justify-items-start mt-6">
                  <label htmlFor="urlInput" className="form-label">
                    URL
                  </label>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 isabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    id="urlInput"
                  />
                </div>

                <RangeSlider
                  formItemName="Discount vs. asking price"
                  startValue={0}
                  endValue={30}
                  defaultValue={15}
                />

                <div className="grid justify-items-start mt-6">
                  <label htmlFor="desiredYield" className="form-label">
                    Desired yield
                  </label>
                  <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 isabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    id="desiredYield"
                  />
                </div>

                <RangeSlider
                  formItemName="Converted rent rate"
                  startValue={10}
                  endValue={25}
                  defaultValue={20}
                />

                <div className="grid justify-items-start mt-6">
                  <legend className="justify-items-start">Duration</legend>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    3 years
                  </button>

                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    5 years
                  </button>

                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    7 years
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div>
              <h2 className="mt-3 text-2xl">Results</h2>

              <div className="ml-5">
                <h2 className="mt-3 text-lg">Data retrieved</h2>

                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Listing price</p>
                    <p>£_ _ _,_ _ _</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Post code</p>
                    <p>_ _ _&nbsp;&nbsp; _ _ _</p>
                  </div>
                </div>

                <h2 className="mt-3 text-lg">Outputs</h2>

                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p>Target price</p>
                    <p className="ml-5">£_ _ _,_ _ _</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Total monthly rental</p>
                    <p className="ml-5">£_ _ _,_ _ _</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="ml-8">Rent</p>
                    <p className="ml-5">£_ _ _,_ _ _</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="ml-8">Converted rent</p>
                    <p className="ml-5">£_ _ _,_ _ _</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Future buy-back price</p>
                    <p className="ml-5">£_ _ _,_ _ _</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const RangeSlider = (props: {
  formItemName: string;
  startValue: number;
  endValue: number;
  defaultValue: number;
}) => {
  const [selectedValue, setSelectedValue] = useState(15);
  const [labelLeftPos, setLabelLeftPos] = useState(50);

  const { formItemName, startValue, endValue, defaultValue } = props;

  useEffect(() => {
    setSelectedValue(defaultValue);
    setLabelLeftPos((defaultValue / endValue) * 100);
  }, [defaultValue]);

  const converToRange = (numVal: number) =>
    Math.round((numVal / 100) * endValue);

  const handleSlider = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.clientWidth);
    setSelectedValue(converToRange(+e.target.value));
    setLabelLeftPos(
      (+e.target.value / 100) *
        (e.target.clientWidth - (+e.target.value / 100) * 30)
    );
  };

  const safeFormItemName = formItemName
    .replace(/\s+/g, "_")
    .replace(/\W+/g, "");

  return (
    <div className="grid justify-items-start mt-6">
      <label htmlFor={safeFormItemName} className="form-label">
        {formItemName}
      </label>

      <div className="flex items-end">
        <p className="mr-2">{startValue}%</p>
        <div style={{ paddingTop: 24 }}>
          <div
            style={{
              position: "relative",
              display: "block",
            }}
          >
            <span
              className=""
              style={{
                position: "absolute",
                top: -24,
                width: "30%",
                left: labelLeftPos,
              }}
            >
              {selectedValue}%
            </span>
          </div>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            id={safeFormItemName}
            onChange={handleSlider}
            defaultValue={(defaultValue / endValue) * 100}
          />
        </div>
        <p className="ml-2">{endValue}%</p>
      </div>
    </div>
  );
};

export default Home;
