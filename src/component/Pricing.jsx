import { Button } from "@mui/material";
import { CheckCircle2, Globe, Database } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import SelectedPlan from "./SelectedPlan";
import AddOns from "./AddOns";
import { motion } from "framer-motion";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
  const [selectedMonthlyPrice, setSelectedMonthlyPrice] = useState(null);
  const [planPriceSelection, setPlanPriceSelection] = useState({});
  const [planMonthlySelection, setPlanMonthlySelection] = useState({});
  const [addOnPriceSelection, setAddOnPriceSelection] = useState({});
  const [addOnQuantitySelection, setAddOnQuantitySelection] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const isBusiness = selectedPlan?.name.includes("Business Plan");

  const plans = [
    {
      name: "Basic Plan",
      site: "Static Site",
      price: "2,999",
      monthlyPrice: "799",
      message: "for specific domain cost (monthly) varies",
      icon: Globe,
      description: "Perfect for small businesses and local shops",
      features: [
        "4-5 pages (Home, About, Services, Contact)",
        "Mobile responsive design",
        "WhatsApp integration button",
        "Basic SEO optimization",
        "Hosting included",
        "Monthly maintenance included",
      ],
      techStack: "HTML, CSS, JavaScript",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Business Plan",
      site: "Full Stack Site",
      price: "14,999",
      monthlyPrice: "1,999",
      message: "for specific domain cost (monthly) varies",
      icon: Database,
      description: "Best for growing businesses needing advanced features",
      features: [
        "Manage products/services easily from dashboard",
        "Receive and track orders or customer inquiries",
        "Secure login system for admin/users",
        "Website hosting included (no extra cost)",
        "Monthly updates & maintenance handled",
      ],
      techStack: "MERN Stack (MongoDB, Express, React, Node.js) / Next.js",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
  ];

  const addOns = [
    {
      name: "Inventory System (setup)",
      price: "5,000",
    },
    {
      name: "Advanced Analytics",
      price: "1,500",
    },
    {
      name: "Extra Pages (per page)",
      price: "500",
    },
  ];

  const restrictedAddOnNames = [
    "Inventory System (setup)",
    "Advanced Analytics",
  ];

  const handleSelectPlan = (plan) => {
    const chosenPrice = planPriceSelection[plan.name] || plan.price;
    const chosenMonthly = planMonthlySelection[plan.name] || plan.monthlyPrice;

    setSelectedPlan(plan);
    setSelectedPlanPrice(chosenPrice);
    setSelectedMonthlyPrice(chosenMonthly);
    setSelectedAddOns([]);

    setPlanPriceSelection((prev) => ({ ...prev, [plan.name]: chosenPrice }));
    setPlanMonthlySelection((prev) => ({
      ...prev,
      [plan.name]: chosenMonthly,
    }));

    setTimeout(() => {
      document.getElementById("addons")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleAddOn = (addOn) => {
    if (!selectedPlan) return;

    const isBusiness = selectedPlan.name.includes("Business Plan");
    const isRestricted = restrictedAddOnNames.includes(addOn.name);

    if (!isBusiness && isRestricted) return;

    setSelectedAddOns((prev) => {
      const exists = prev.find((item) => item.name === addOn.name);
      const selectedPrice = addOnPriceSelection[addOn.name] || addOn.price;
      const quantity = addOnQuantitySelection[addOn.name] || 0;

      if (exists) {
        return prev.filter((item) => item.name !== addOn.name);
      } else {
        return [...prev, { ...addOn, selectedPrice, quantity }];
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Website Pricing for Local Businesses | WebShop Agency</title>

        <meta
          name="description"
          content="Affordable website rental pricing for local businesses. Get a professional website starting at ₹999/month including hosting, maintenance, and updates."
        />

        <link rel="canonical" href="https://webshopagency.in/pricing" />

        <script type="application/ld+json">
          {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Website Development for Local Businesses",
                        "provider": {
                        "@type": "Organization",
                        "name": "WebShop Agency"
                        },
                        "areaServed": {
                        "@type": "Country",
                        "name": "India"
                        },
                        "description": "Affordable website rental services for local businesses including design, hosting, and maintenance.",
                        "offers": {
                        "@type": "Offer",
                        "price": "999",
                        "priceCurrency": "INR"
                        }
                        }
                    `}
        </script>
      </Helmet>

      <section className="relative overflow-hidden py-24 md:py-32 bg-slate-950 text-slate-100 border-b border-slate-800">
        {/* =========================================================
      BACKGROUND
  ========================================================== */}

        <div className="absolute inset-0 pointer-events-none">
          {/* Cyan glow */}
          <motion.div
            className="
        absolute
        top-8
        left-1/4
        w-72
        h-72
        rounded-full
        bg-cyan-500/15
        blur-3xl
      "
            animate={{
              x: [0, 35, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Violet glow */}
          <motion.div
            className="
        absolute
        top-28
        right-10
        w-80
        h-80
        rounded-full
        bg-violet-500/15
        blur-3xl
      "
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pink glow */}
          <motion.div
            className="
        absolute
        bottom-14
        left-1/3
        w-64
        h-64
        rounded-full
        bg-pink-500/10
        blur-3xl
      "
            animate={{
              x: [0, 25, 0],
              y: [0, -20, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid */}
          <div
            className="
        absolute
        inset-0
        opacity-[0.025]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:50px_50px]
      "
          />
        </div>

        {/* =========================================================
      MAIN CONTENT
  ========================================================== */}

        <div className="relative container mx-auto px-4">
          {/* =======================================================
        HEADER
    ======================================================== */}

          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Badge */}

            <motion.span
              className="
          inline-flex
          items-center
          rounded-full
          bg-slate-900/70
          border
          border-cyan-400/20
          text-cyan-300
          px-5
          py-2.5
          text-sm
          font-semibold
          mb-5
          backdrop-blur-md
        "
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            >
              Rental Website Model
            </motion.span>

            {/* Heading */}

            <motion.h1
              className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          mb-5
          text-white
          leading-tight
        "
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Rent a Website,{" "}
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
                Grow Your Store
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              className="text-slate-300 text-lg md:text-xl leading-relaxed"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.65,
              }}
            >
              Choose a monthly rental plan that includes design, hosting,
              maintenance, and support. No large upfront investment required.
            </motion.p>
          </motion.div>

          {/* =========================================================
        PRICING CARDS
    ========================================================== */}

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -100 : 100,
                    rotateY: index === 0 ? 8 : -8,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -10,
                    rotateX: 1,
                    rotateY: index === 0 ? -1 : 1,
                    scale: 1.01,
                  }}
                  style={{
                    transformPerspective: 1400,
                  }}
                  className={`
              group
              relative
              glass-card
              overflow-hidden
              transition-colors
              duration-500
              ${
                plan.popular
                  ? "border-2 border-violet-500 shadow-2xl shadow-violet-500/10"
                  : "border border-slate-800 hover:border-cyan-400/30"
              }
            `}
                >
                  {/* =================================================
                CARD GLOW
            ================================================== */}

                  <div
                    className={`
                absolute
                ${plan.popular ? "-top-32 -right-32" : "-top-32 -left-32"}
                w-80
                h-80
                rounded-full
                ${plan.popular ? "bg-violet-500/10" : "bg-cyan-500/10"}
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-1000
                pointer-events-none
              `}
                  />

                  {/* =================================================
                CARD CONTENT
            ================================================== */}

                  <div className="relative z-10 p-8 bg-slate-900/75">
                    {/* Header */}

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {/* Icon */}

                        <motion.div
                          className={`
                      w-14
                      h-14
                      bg-linear-to-br
                      ${plan.gradient}
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-lg
                    `}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5,
                          }}
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>

                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-1">
                            {plan.site}
                          </p>

                          <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {plan.name}
                          </h2>
                        </div>
                      </div>

                      {/* Best Seller */}

                      {plan.popular && (
                        <motion.span
                          className="
                      rounded-full
                      bg-violet-600
                      text-white
                      text-xs
                      font-semibold
                      px-3
                      py-1
                      shadow-lg
                      shadow-violet-500/20
                    "
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          Best Seller
                        </motion.span>
                      )}
                    </div>

                    {/* Description */}

                    <motion.p
                      className="text-slate-300 mb-8 leading-relaxed"
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.15,
                      }}
                    >
                      {plan.description}
                    </motion.p>

                    {/* =================================================
                  PRICE
              ================================================== */}

                    <motion.div
                      className="mb-7"
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.6 + index * 0.15,
                      }}
                    >
                      <div className="flex items-end gap-3">
                        <span className="text-5xl md:text-6xl font-bold text-white">
                          ₹{plan.monthlyPrice}
                        </span>

                        <span className="text-slate-400 mb-2">/month</span>
                      </div>

                      <p className="text-sm text-slate-400 mt-2">
                        One-time setup: ₹{plan.price}
                      </p>

                      <p className="text-sm text-slate-400 mt-2">
                        {plan.message}
                      </p>
                    </motion.div>

                    {/* =================================================
                  TECH STACK
              ================================================== */}

                    <motion.div
                      className="
                  bg-slate-900/70
                  rounded-3xl
                  p-4
                  mb-7
                  border
                  border-slate-800
                "
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + index * 0.15,
                      }}
                    >
                      <p className="text-sm text-slate-300">
                        <span className="font-semibold text-white">
                          Tech Stack:
                        </span>{" "}
                        {plan.techStack}
                      </p>
                    </motion.div>

                    {/* =================================================
                  FEATURES
              ================================================== */}

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.9 + index * 0.15 + idx * 0.1,
                          }}
                        >
                          <CheckCircle2
                            className="
                        w-5
                        h-5
                        text-cyan-400
                        shrink-0
                        mt-1
                      "
                          />

                          <span className="text-slate-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* =================================================
                  CTA
              ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 1.1 + index * 0.15,
                      }}
                    >
                      <Button
                        onClick={() => handleSelectPlan(plan)}
                        variant="contained"
                        disableElevation
                        className="
                    w-full
                    px-6
                    py-3
                    rounded-2xl
                    font-semibold
                    text-white
                    transition-all
                  "
                        sx={{
                          background:
                            "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
                          color: "#ffffff",
                          textTransform: "none",
                          boxShadow: "0 18px 30px rgba(99, 102, 241, 0.18)",
                          "&:hover": {
                            opacity: 0.95,
                            background:
                              "linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 22px 35px rgba(99, 102, 241, 0.25)",
                          },
                        }}
                      >
                        Rent This Plan
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =========================================================
        BENEFITS
    ========================================================== */}

          <div className="mt-20 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto text-center">
            {[
              {
                title: "Hosting Included",
                description:
                  "We include secure hosting and backups as part of every rental plan.",
              },
              {
                title: "Flexible Upgrades",
                description:
                  "Move from basic to full-stack when your business needs more features.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Maintenance, updates, and website changes are handled for you.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
            group
            relative
            glass-card
            p-7
            rounded-3xl
            border
            border-slate-800
            hover:border-cyan-400/30
            transition-colors
            duration-500
            overflow-hidden
          "
              >
                {/* Glow */}

                <div
                  className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/5
              to-violet-500/5
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-700
            "
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* =========================================================
        ADDONS
    ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16"
          >
            <AddOns
              addOns={addOns}
              selectedPlan={selectedPlan}
              isBusiness={isBusiness}
              selectedAddOns={selectedAddOns}
              addOnPriceSelection={addOnPriceSelection}
              addOnQuantitySelection={addOnQuantitySelection}
              toggleAddOn={toggleAddOn}
              setAddOnPriceSelection={setAddOnPriceSelection}
              setAddOnQuantitySelection={setAddOnQuantitySelection}
              setSelectedAddOns={setSelectedAddOns}
            />
          </motion.div>

          {/* =========================================================
        SELECTED PLAN
    ========================================================== */}

          {selectedPlan && (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-12"
            >
              <SelectedPlan
                selectedPlan={selectedPlan}
                selectedPlanPrice={selectedPlanPrice}
                selectedMonthlyPrice={selectedMonthlyPrice}
                selectedAddOns={selectedAddOns}
              />
            </motion.div>
          )}

          {/* =========================================================
        FOOTNOTE
    ========================================================== */}

          <motion.div
            className="mt-14 text-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              * All prices are monthly rentals. Setup happens within 3-5
              business weeks.
              <span className="font-semibold text-slate-100">
                {" "}
                We maintain and host your website, you just provide content
                updates.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
