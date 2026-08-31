import {
  MessageSquare,
  Palette,
  Code2,
  Rocket,
  Settings,
  QrCode,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description:
        "Tell us about your business, products, and what makes you special.",
    },
    {
      icon: Palette,
      title: "Design & Development",
      description:
        "We create a beautiful, custom website tailored to your brand.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "We deploy your website with hosting and connect it to your QR code for easy customer access.",
    },
    {
      icon: QrCode,
      title: "QR Integration",
      description:
        "We create a custom QR code for your business so customers can instantly access your website.",
    },
    {
      icon: Settings,
      title: "Maintenance",
      description:
        "We handle all updates. Just send us changes and we implement them.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>How Our Website Service Works | WebShop Agency</title>

        <meta
          name="description"
          content="Learn how WebShop Agency builds and maintains websites for local businesses through a simple 4-step process including consultation, development, launch, and maintenance."
        />

        <link rel="canonical" href="https://webshopagency.in/howitworks" />
      </Helmet>

      <section className="relative py-20 md:py-28 bg-slate-950 text-slate-100 border-b border-slate-800 overflow-hidden">
        {/* =========================================================
      BACKGROUND
  ========================================================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cyan glow */}
          <motion.div
            className="
        absolute
        top-40
        -left-32
        w-80
        h-80
        rounded-full
        bg-cyan-500/10
        blur-3xl
      "
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Violet glow */}
          <motion.div
            className="
        absolute
        bottom-20
        -right-32
        w-96
        h-96
        rounded-full
        bg-violet-500/10
        blur-3xl
      "
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
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

        <div className="container mx-auto px-4 relative z-10">
          {/* =========================================================
        SECTION HEADER
    ========================================================== */}

          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              How Our Rental Service Works
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
              A simple onboarding process to start your website rental and keep
              it running smoothly.
            </p>
          </motion.div>

          {/* =========================================================
        TIMELINE
    ========================================================== */}

          <div className="relative max-w-6xl mx-auto">
            {/* Central timeline */}
            <div
              className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-px
          bg-slate-800
          -translate-x-1/2
        "
            />

            {/* Animated timeline glow */}
            <motion.div
              className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          via-violet-500
          to-cyan-400
          -translate-x-1/2
          origin-top
        "
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* =======================================================
          STEPS
      ======================================================== */}

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;

                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`
                relative
                flex
                flex-col
                md:flex-row
                items-center
                ${isLeft ? "md:justify-start" : "md:justify-end"}
              `}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -80 : 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* =================================================
                  CARD
              ================================================== */}

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.015,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className={`
                  relative
                  w-full
                  md:w-[calc(50%-40px)]
                  glass-card
                  p-6
                  md:p-7
                  rounded-3xl
                  border
                  border-slate-800
                  hover:border-cyan-400/40
                  shadow-xl
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                  transition-colors
                  duration-500
                  ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                `}
                    >
                      {/* Card glow */}
                      <div
                        className="
                    absolute
                    -top-16
                    -right-16
                    w-40
                    h-40
                    rounded-full
                    bg-cyan-400/10
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                  "
                      />

                      {/* Icon */}
                      <motion.div
                        className="
                    relative
                    w-14
                    h-14
                    bg-gradient-to-br
                    from-cyan-500
                    to-violet-600
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-5
                    shadow-lg
                    shadow-cyan-500/20
                  "
                        initial={{
                          scale: 0,
                          rotate: -20,
                        }}
                        whileInView={{
                          scale: 1,
                          rotate: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 180,
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Bottom line */}
                      <motion.div
                        className="
                    mt-6
                    h-[2px]
                    bg-gradient-to-r
                    from-cyan-400
                    to-violet-500
                    rounded-full
                  "
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "60px",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15 + 0.4,
                        }}
                      />
                    </motion.div>

                    {/* =================================================
                  STEP NUMBER
              ================================================== */}

                    <motion.div
                      className="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-11
                  h-11
                  rounded-full
                  bg-slate-950
                  border-2
                  border-cyan-400/60
                  items-center
                  justify-center
                  text-white
                  font-bold
                  shadow-lg
                  shadow-cyan-500/20
                  z-20
                "
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Mobile number */}
                    <div
                      className="
                  md:hidden
                  absolute
                  -top-3
                  -left-3
                  w-9
                  h-9
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-500
                  to-violet-600
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-sm
                  shadow-lg
                "
                    >
                      {index + 1}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =========================================================
        RENTAL MODEL
    ========================================================== */}

          <motion.div
            className="
        mt-20
        max-w-3xl
        mx-auto
        bg-slate-900/70
        p-6
        md:p-8
        rounded-3xl
        shadow-2xl
        shadow-slate-950/40
        border
        border-slate-800
      "
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
              The Rental Model Explained
            </h3>

            <div className="space-y-5 text-slate-300">
              {[
                {
                  title: "No Large Upfront Investment:",
                  text: "Pay monthly, not thousands upfront.",
                },
                {
                  title: "We Handle Everything:",
                  text: "Hosting, security, updates, backups - all included.",
                },
                {
                  title: "Your Only Job:",
                  text: "Run your business and tell us when products or prices change.",
                },
                {
                  title: "Flexible:",
                  text: "Upgrade to full-stack when you need it, cancel anytime with notice.",
                },
                {
                  title: "Workflow:",
                  text: "Customer will come and scan the QR code, open the website directly.",
                },
              ].map((item, index) => (
                <motion.p
                  key={index}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <span className="font-semibold text-cyan-300">
                    ✓ {item.title}
                  </span>{" "}
                  {item.text}
                </motion.p>
              ))}
            </div>

            {/* =======================================================
          CUSTOMER CHECKS
      ======================================================== */}

            <motion.div
              className="
          mt-10
          bg-slate-950/70
          rounded-2xl
          p-6
          md:p-8
          border
          border-slate-800
        "
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                Customers Can Check
              </h4>

              <div className="grid sm:grid-cols-2 gap-4 text-slate-200">
                {[
                  "Product availability",
                  "Prices",
                  "New arrivals",
                  "Shop timings",
                  "Contact details",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.03,
                      borderColor: "rgba(34,211,238,0.4)",
                    }}
                    className={`
                bg-slate-900
                rounded-xl
                p-4
                border
                border-slate-800
                shadow-sm
                flex
                items-center
                justify-center
                text-center
                transition-colors
                ${index === 4 ? "sm:col-span-2" : ""}
              `}
                  >
                    <span>
                      <span className="text-cyan-400 mr-2">✓</span>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
