import { ArrowRight, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";


import WebsiteScene from "./WebsiteScene";
import HowItWorks from "./HowItWorks.jsx";
import Feature from "./Feature.jsx";

const Home = () => {
  return (
    <>
      {/* =========================================================
          SEO
      ========================================================= */}
      <Helmet>
        <title>Affordable Websites for Local Shops | WebShop Agency</title>

        <meta
          name="description"
          content="Get a professional website for your shop with no upfront cost. WebShop Agency provides affordable website rental service with design, hosting, and maintenance included."
        />

        <link rel="canonical" href="https://webshopagency.in/" />

        <meta
          property="og:title"
          content="WebShop Agency - Websites for Local Businesses"
        />

        <meta
          property="og:description"
          content="Affordable website rental service for local businesses. No upfront cost, monthly plans, and full maintenance."
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebShop Agency",
              "url": "https://webshopagency.in/",
              "logo": "https://res.cloudinary.com/dhgojtmbf/image/upload/v1772568298/logo_lnrgcs.avif",
              "email": "webshopagency04@gmail.com",
              "telephone": "+91 9555204672",
              "sameAs": [
                "https://www.linkedin.com/company/web-shop-agency/"
              ]
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WebShop Agency",
              "url": "https://webshopagency.in/"
            }
          `}
        </script>
      </Helmet>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative bg-slate-950 py-20 md:py-28 lg:py-32 overflow-hidden border-b border-slate-800">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          {/* Cyan glow */}
          <div
            className="
              absolute
              top-0
              left-0
              w-72
              h-72
              md:w-96
              md:h-96
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
          />

          {/* Violet glow */}
          <div
            className="
              absolute
              top-20
              right-0
              w-80
              h-80
              md:w-[28rem]
              md:h-[28rem]
              rounded-full
              bg-violet-500/15
              blur-3xl
            "
          />

          {/* Pink bottom glow */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              w-80
              h-80
              md:w-[32rem]
              md:h-[32rem]
              rounded-full
              bg-pink-500/10
              blur-3xl
              -translate-x-1/2
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
              bg-[size:50px_50px]
            "
          />
        </div>

        {/* Main Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* =====================================================
                HERO CONTENT + 3D
            ====================================================== */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
              {/* ===================================================
                  LEFT SIDE - CONTENT
              ==================================================== */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    glass-card
                    px-5
                    py-3
                    rounded-full
                    mb-6
                    shadow-xl
                  "
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />

                  <span className="text-sm text-slate-200 font-medium">
                    Rent a Modern Website, Pay Monthly
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    xl:text-7xl
                    font-bold
                    mb-6
                    leading-[1.08]
                    tracking-tight
                    text-white
                  "
                >
                  Rent Your Shop Website,
                  <br />
                  <span
                    className="
                      bg-gradient-to-r
                      from-cyan-300
                      via-cyan-200
                      to-violet-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Leave the Tech to Us
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="
                    text-lg
                    md:text-xl
                    text-slate-300
                    mb-8
                    max-w-2xl
                    mx-auto
                    lg:mx-0
                    leading-relaxed
                  "
                >
                  Launch a polished online presence for your business with our
                  website rental model. No large upfront cost, just a simple
                  monthly plan.
                </p>

                {/* CTA Buttons */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-4
                    justify-center
                    lg:justify-start
                  "
                >
                  {/* Primary CTA */}
                  <NavLink
                    to="/pricing"
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      btn-accent
                      px-8
                      py-4
                      rounded-2xl
                      shadow-2xl
                      shadow-cyan-500/20
                      hover:opacity-95
                      transition-all
                      transform
                      hover:-translate-y-0.5
                    "
                  >
                    View Rental Plans
                    <ArrowRight
                      className="
                        w-5
                        h-5
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </NavLink>

                  {/* Secondary CTA */}
                  <NavLink
                    to="/contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      btn-accent-outline
                      px-8
                      py-4
                      rounded-2xl
                      border
                      border-slate-700
                      hover:border-cyan-400
                      hover:text-cyan-300
                      transition-all
                    "
                  >
                    Start Now
                  </NavLink>
                </div>

                {/* Trust line */}
                <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-400">
                  <span>✓ No large upfront cost</span>
                  <span>✓ Hosting included</span>
                  <span>✓ Maintenance included</span>
                </div>
              </div>

              {/* ===================================================
                  RIGHT SIDE - 3D SCENE
              ==================================================== */}
              <div
                className="
                  relative
                  h-[360px]
                  sm:h-[430px]
                  md:h-[500px]
                  lg:h-[540px]
                  w-full
                "
              >
                {/* 3D glow behind scene */}
                <div
                  className="
                    absolute
                    inset-10
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                    pointer-events-none
                  "
                />

                {/* Violet glow */}
                <div
                  className="
                    absolute
                    bottom-10
                    right-10
                    w-48
                    h-48
                    rounded-full
                    bg-violet-500/10
                    blur-3xl
                    pointer-events-none
                  "
                />

                {/* 3D Canvas */}
                <div className="absolute inset-0">
                  <WebsiteScene />
                </div>

                {/* Small label */}
                <div
                  className="
                    absolute
                    bottom-2
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    px-4
                    py-2
                    rounded-full
                    bg-slate-900/70
                    border
                    border-slate-700/70
                    backdrop-blur-md
                    text-xs
                    text-slate-400
                    pointer-events-none
                  "
                >
                  Your business, online
                </div>
              </div>
            </div>

            {/* =====================================================
                FEATURE CARDS
            ====================================================== */}
            <div className="mt-14 md:mt-20 grid gap-4 sm:grid-cols-3">
              {/* Quick Setup */}
              <div
                className="
                  group
                  glass-card
                  p-6
                  rounded-2xl
                  border
                  border-slate-800/80
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.24em]
                    text-cyan-300
                    mb-3
                  "
                >
                  Launch in days
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Quick Setup
                </h3>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  Your site goes live fast with a ready-to-run rental package.
                </p>
              </div>

              {/* Design + Hosting */}
              <div
                className="
                  group
                  glass-card
                  p-6
                  rounded-2xl
                  border
                  border-slate-800/80
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.24em]
                    text-cyan-300
                    mb-3
                  "
                >
                  All-in-one
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Design + Hosting
                </h3>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  We handle design, hosting, maintenance and updates for one
                  monthly fee.
                </p>
              </div>

              {/* Flexible Scale */}
              <div
                className="
                  group
                  glass-card
                  p-6
                  rounded-2xl
                  border
                  border-slate-800/80
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.24em]
                    text-cyan-300
                    mb-3
                  "
                >
                  Grow anytime
                </p>

                <h3 className="text-xl font-semibold text-white">
                  Flexible Scale
                </h3>

                <p className="mt-3 text-slate-300 leading-relaxed">
                  Start simple and upgrade to larger plans as your business
                  grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OTHER HOME SECTIONS
      ========================================================= */}
      {/* Feature */}
      <Feature />

      {/* Howitworks */}
      <HowItWorks />
    </>
  );
};

export default Home;
