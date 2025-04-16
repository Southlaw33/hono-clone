import React from "react";
const features = [
    {
      emoji: "🚀",
      title: "Ultrafast & Lightweight",
      description: "The router RegExpRouter is really fast. The hono/tiny preset is under 14kB. Using only Web Standard APIs.",
    },
    {
      emoji: "🌍",
      title: "Multi-runtime",
      description: "Works on Cloudflare, Fastly, Deno, Bun, AWS, or Node.js. The same code runs on all platforms.",
    },
    {
      emoji: "🔋",
      title: "Batteries Included",
      description: "Hono has built-in middleware, custom middleware, third-party middleware, and helpers. Batteries included.",
    },
    {
      emoji: "😊",
      title: "Delightful DX",
      description: 'Super clean APIs. First-class TypeScript support. Now, we\'ve got "Types".',
    },
  ];
const FeatureBlock = () => {
  return (
    <div className="grid grid-cols-4 gap-9">
      {features.map((feature) => {
        return (
          <div
            key={feature.title}
            className="card card-border bg-base-200  p-8"
          >
            <div className="flex flex-col gap-2 items-start">
              <div className="text-4xl py-2 px-3 bg-base-100 rounded-md">
                {feature.emoji}
              </div>
              <h2 className="card-title text-xl font-bold">{feature.title}</h2>
              <p className="text-lg">{feature.description}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FeatureBlock;
