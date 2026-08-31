import { Layers, Rocket, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet";

const Feature = () => {
  const features = [
    {
      icon: Rocket,
      title: "Quick Launch",
      description:
        "Get your website live within days, not months. Fast turnaround for your business needs.",
    },
    {
      icon: Shield,
      title: "Worry-Free Maintenance",
      description:
        "We handle all updates, hosting, and technical issues. You just tell us what to change (Charges apply).",
    },
    {
      icon: Zap,
      title: "Rental Model",
      description:
        "Pay monthly with no large upfront investment. Affordable for local businesses.",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description:
        "Start with a simple website, upgrade to full-stack with database when your business grows.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Website Features for Local Businesses | WebShop Agency</title>

        <meta
          name="description"
          content="Explore the features of WebShop Agency websites including fast launch, worry-free maintenance, scalable solutions, and affordable rental pricing."
        />

        <link rel="canonical" href="https://webshopagency.in/feature" />
      </Helmet>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group w-full h-[320px] [perspective:1200px]"
            >
              {/* =====================================================
            3D CARD
        ====================================================== */}
              <div
                className="
            relative
            w-full
            h-full
            transition-transform
            duration-1000
            [transform-style:preserve-3d]
            group-hover:[transform:rotateY(180deg)]
          "
              >
                {/* ===================================================
              FRONT
          ==================================================== */}
                <div
                  className="
              absolute
              inset-0
              w-full
              h-full
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              shadow-xl
              overflow-hidden
              [backface-visibility:hidden]
            "
                >
                  {/* Glow */}
                  <div
                    className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                rounded-full
                bg-cyan-500/10
                blur-3xl
              "
                  />

                  <div
                    className="
                relative
                h-full
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-8
              "
                  >
                    {/* Icon */}
                    <div
                      className="
                  w-16
                  h-16
                  mb-6
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-violet-600
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  shadow-cyan-500/20
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Number */}
                    <span
                      className="
                  absolute
                  top-5
                  right-6
                  text-xs
                  font-mono
                  text-slate-600
                "
                    >
                      0{index + 1}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>

                    {/* Hover hint */}
                    <p
                      className="
                  mt-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400/70
                "
                    >
                      Hover to explore
                    </p>
                  </div>
                </div>

                {/* ===================================================
              BACK
          ==================================================== */}
                <div
                  className="
              absolute
              inset-0
              w-full
              h-full
              rounded-3xl
              border
              border-cyan-400/30
              bg-gradient-to-br
              from-slate-900
              via-slate-900
              to-slate-950
              shadow-2xl
              shadow-cyan-500/10
              overflow-hidden
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
                >
                  {/* Cyan glow */}
                  <div
                    className="
                absolute
                -top-24
                -left-24
                w-56
                h-56
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
                  />

                  {/* Violet glow */}
                  <div
                    className="
                absolute
                -bottom-24
                -right-24
                w-56
                h-56
                rounded-full
                bg-violet-500/10
                blur-3xl
              "
                  />

                  <div
                    className="
                relative
                z-10
                h-full
                flex
                flex-col
                justify-center
                p-8
              "
                  >
                    {/* Icon */}
                    <div
                      className="
                  w-12
                  h-12
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-violet-600
                  flex
                  items-center
                  justify-center
                  mb-5
                  shadow-lg
                  shadow-cyan-500/20
                "
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-sm">
                      {feature.description}
                    </p>

                    {/* Bottom line */}
                    <div
                      className="
                  mt-6
                  h-[2px]
                  w-12
                  bg-gradient-to-r
                  from-cyan-400
                  to-violet-500
                  rounded-full
                "
                    />

                    <p
                      className="
                  mt-4
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
                    >
                      WebShop Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feature;
