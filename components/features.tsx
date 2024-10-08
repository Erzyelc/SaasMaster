"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";

const Features = () => {
  return (
    // sm:h-[80vh]
    <div className="h-full relative  w-full flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-bold tracking-tight text-[#3b82f6] sm:text-5xl pt-10">
        Some of our incredible features
      </h1>

      <div className="py-24 sm:py-12 z-50">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-[#1B1B1B] lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-[#3b82f6] max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="/mobile.png"
                      alt="mobile image"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-[#1B1B1B] max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-[#3b82f6]  max-lg:text-center">
                    Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    // src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    src="/performance.svg"
                    alt="performance"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-[#1B1B1B]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-[#3b82f6]  max-lg:text-center">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi.
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className=" w-full rounded-b-lg"
                    src="/security.svg"
                    alt="securitysvg"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-[#1B1B1B] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-[#3b82f6] max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          random-user.js
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          App.jsx
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <div>
                        <p>
                          <span className="text-green-400">import</span>{" "}
                          <span className="text-blue-400">{`{ useState, useEffect }`}</span>{" "}
                          <span className="text-green-400">from</span>{" "}
                          <span className="text-yellow-400">
                            &quot;react&quot;
                          </span>
                          ;
                        </p>
                        <p>
                          <span className="text-green-400">export default</span>{" "}
                          <span className="text-blue-400">function</span>{" "}
                          <span className="text-blue-400">RandomUserPage</span>{" "}
                          <span className="text-green-400">() </span>{" "}
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-4">
                          <span className="text-green-400">const</span>{" "}
                          <span className="text-blue-400">
                            [userData, setUserData]
                          </span>{" "}
                          = <span className="text-blue-400">useState</span>(
                          <span className="text-yellow-400">null</span>);
                        </p>
                        <p className="ml-4">
                          <span className="text-green-400">const</span>{" "}
                          <span className="text-blue-400">
                            [loading, setLoading]
                          </span>{" "}
                          = <span className="text-blue-400">useState</span>(
                          <span className="text-yellow-400">true</span>);
                        </p>
                        <p className="ml-4">
                          <span className="text-blue-400">useEffect</span>
                          <span className="text-green-400">(() ={">"} </span>
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-8">
                          <span className="text-green-400">const</span>{" "}
                          <span className="text-blue-400">fetchRandomUser</span>{" "}
                          ={" "}
                          <span className="text-blue-400">
                            async () = {">"}
                          </span>{" "}
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-12">
                          <span className="text-green-400">
                            setLoading(true)
                          </span>
                          ;
                        </p>
                        <p className="ml-12">
                          <span className="text-green-400">try</span>{" "}
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-16">
                          <span className="text-blue-400">const res</span> ={" "}
                          <span className="text-blue-400">await fetch</span>(
                          <span className="text-yellow-400">
                            &quot;https://randomuser.me/api/&quot;
                          </span>
                          );
                        </p>
                        <p className="ml-16">
                          <span className="text-blue-400">const data</span> ={" "}
                          <span className="text-blue-400">await res.json</span>
                          ();
                        </p>
                        <p className="ml-16">
                          <span className="text-green-400">setUserData</span>
                          (data.results[0]);
                        </p>
                        <p className="ml-12">
                          <span className="text-green-400">&#125;</span>{" "}
                          <span className="text-green-400">catch (error) </span>{" "}
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-16">
                          <span className="text-blue-400">console.error</span>(
                          <span className="text-yellow-400">
                            &quot;Error fetching random user:&quot;
                          </span>
                          , error);
                        </p>
                        <p className="ml-12">
                          <span className="text-green-400">&#125;</span>{" "}
                          <span className="text-green-400">finally</span>{" "}
                          <span className="text-green-400">&#123;</span>
                        </p>
                        <p className="ml-16">
                          <span className="text-green-400">
                            setLoading(false)
                          </span>
                          ;
                        </p>
                        <p className="ml-12">
                          <span className="text-green-400">&#125;</span>;
                        </p>
                        <p className="ml-8">
                          <span className="text-blue-400">fetchRandomUser</span>
                          ();
                        </p>
                        <p className="ml-4">
                          <span className="text-green-400">&#125;</span>, []);
                        </p>
                        <p className="ml-4">
                          <span className="text-green-400">if</span> (loading){" "}
                          {"{"}
                          <span className="text-blue-400">return </span>
                          <span className="text-yellow-400">
                            &quot;Loading...&quot;
                          </span>
                          {"}"};
                        </p>
                        <p className="ml-4">
                          <span className="text-green-400">return</span> (
                        </p>
                        <p className="ml-8">
                          &lt;<span className="text-blue-400">div</span>&gt;
                        </p>
                        <p className="ml-12">
                          &lt;<span className="text-blue-400">h1</span>
                          &gt;Random User Data&lt;/
                          <span className="text-blue-400">h1</span>&gt;
                        </p>

                        <p className="ml-8">
                          &lt;/<span className="text-blue-400">div</span>&gt;
                        </p>
                        <p className="ml-4">&#125;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <DotPattern className={cn("[]")} />
    </div>
  );
};

export default Features;
