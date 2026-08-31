import { Code2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = {
    static: [
      {
        logo: FaHtml5,
        name: "HTML5",
        color: "from-orange-500 to-red-500",
      },
      {
        logo: FaCss3,
        name: "CSS3",
        color: "from-blue-500 to-blue-600",
      },
      {
        logo: FaJs,
        name: "JavaScript",
        color: "from-yellow-400 to-yellow-500",
      },
    ],
    fullStack: [
      {
        logo: SiMongodb,
        name: "MongoDB",
        color: "from-green-500 to-green-600",
      },
      {
        logo: SiExpress,
        name: "Express.js",
        color: "from-gray-600 to-gray-700",
      },
      {
        logo: RiReactjsFill,
        name: "React",
        color: "from-cyan-400 to-blue-500",
      },
      {
        logo: FaNodeJs,
        name: "Node.js",
        color: "from-green-600 to-green-700",
      },
      {
        logo: TbBrandNextjs,
        name: "Next.js",
        color: "from-gray-800 to-gray-900",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tech Stack Website | WebShop Agency</title>

        <meta
          name="description"
          content="WebShop Agency builds websites using modern technologies including HTML5, CSS3, JavaScript and the MERN stack (MongoDB, Express, React, Node.js)."
        />

        <link rel="canonical" href="https://webshopagency.in/techstack" />
      </Helmet>

      <section className="relative min-h-screen py-24 md:py-32 overflow-hidden bg-slate-950 text-slate-100">
        {/* =========================================================
          BACKGROUND
      ========================================================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cyan Glow */}
          <motion.div
            className="
            absolute
            top-10
            left-10
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            bg-cyan-500/15
            blur-3xl
          "
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Violet Glow */}
          <motion.div
            className="
            absolute
            top-24
            right-10
            w-80
            h-80
            md:w-[28rem]
            md:h-[28rem]
            rounded-full
            bg-violet-500/15
            blur-3xl
          "
            animate={{
              x: [0, -40, 0],
              y: [0, 35, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pink Glow */}
          <motion.div
            className="
            absolute
            bottom-0
            left-1/2
            w-96
            h-96
            md:w-[32rem]
            md:h-[32rem]
            rounded-full
            bg-pink-500/10
            blur-3xl
            -translate-x-1/2
          "
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 12,
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
          MAIN CONTAINER
      ========================================================== */}

        <div className="relative container mx-auto px-4">
          {/* =======================================================
            PAGE HEADER
        ======================================================== */}

          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Badge */}

            <motion.span
              className="
              inline-flex
              items-center
              rounded-full
              bg-slate-800/80
              border
              border-cyan-400/20
              px-5
              py-2.5
              text-sm
              uppercase
              tracking-[0.24em]
              text-cyan-300
              mb-6
              backdrop-blur-md
              shadow-lg
              shadow-cyan-500/5
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
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Future-Ready Website Technology
            </motion.span>

            {/* Heading */}

            <motion.h1
              className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.08]
              tracking-tight
              mb-6
              text-white
            "
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A modern stack for rental websites that{" "}
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
                scale
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              className="
              text-slate-300
              text-lg
              sm:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
            "
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              From static landing pages to full-stack dashboards, we build
              rental-ready websites with performance, security, and ease-of-use
              in mind.
            </motion.p>
          </motion.div>

          {/* =========================================================
            TECHNOLOGY PANELS
        ========================================================== */}

          <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* =======================================================
              STATIC WEBSITE
          ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -120,
                rotateY: 12,
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
                amount: 0.2,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotateY: -2,
                rotateX: 1,
              }}
              style={{
                transformPerspective: 1400,
              }}
              className="
              group
              relative
              glass-card
              border
              border-slate-700/70
              p-8
              md:p-10
              backdrop-blur-xl
              shadow-2xl
              shadow-slate-900/30
              overflow-hidden
            "
            >
              {/* Cyan glow */}

              <div
                className="
                absolute
                -top-32
                -right-32
                w-80
                h-80
                rounded-full
                bg-cyan-400/10
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-1000
              "
              />

              {/* Header */}

              <div className="relative z-10 flex items-center gap-4 mb-10">
                <motion.div
                  className="
                  rounded-2xl
                  bg-slate-900/80
                  p-4
                  border
                  border-slate-800
                  shadow-inner
                  shadow-cyan-500/10
                "
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code2 className="w-7 h-7 text-cyan-300" />
                </motion.div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Static Website
                  </h2>

                  <p className="text-slate-400 mt-1">
                    Fast, beautiful rental landing pages for local businesses.
                  </p>
                </div>
              </div>

              {/* Technologies */}

              <div className="relative z-10 grid gap-4">
                {technologies.static.map((tech, index) => {
                  const TechLogo = tech.logo;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + index * 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                      }}
                      className="
                      group/tech
                      relative
                      flex
                      items-center
                      gap-4
                      rounded-3xl
                      border
                      border-white/10
                      bg-slate-900/70
                      px-5
                      py-4
                      text-base
                      font-semibold
                      overflow-hidden
                      transition-colors
                      duration-500
                      hover:border-cyan-400/40
                    "
                    >
                      {/* Animated side line */}

                      <motion.div
                        className="
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-1
                        bg-gradient-to-b
                        from-cyan-400
                        to-violet-500
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
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.5 + index * 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      {/* Logo */}

                      <div
                        className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-3xl
                        bg-linear-to-br
                        ${tech.color}
                        shadow-lg
                        transition-transform
                        duration-500
                        group-hover/tech:scale-110
                      `}
                      >
                        {TechLogo && (
                          <TechLogo className="w-6 h-6 text-white" />
                        )}
                      </div>

                      <span className="text-slate-100">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Description */}

              <motion.p
                className="
                relative
                z-10
                text-slate-400
                mt-10
                leading-relaxed
              "
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                }}
              >
                Ideal for brochure-style businesses, service providers, and
                rental storefronts that need a polished online presence quickly.
              </motion.p>
            </motion.div>

            {/* =======================================================
              FULL STACK
          ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 120,
                rotateY: -12,
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
                amount: 0.2,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                rotateY: 2,
                rotateX: 1,
              }}
              style={{
                transformPerspective: 1400,
              }}
              className="
              group
              relative
              glass-card
              border
              border-slate-700/70
              p-8
              md:p-10
              backdrop-blur-xl
              shadow-2xl
              shadow-slate-900/30
              overflow-hidden
            "
            >
              {/* Violet glow */}

              <div
                className="
                absolute
                -top-32
                -left-32
                w-80
                h-80
                rounded-full
                bg-violet-400/10
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-1000
              "
              />

              {/* Header */}

              <div className="relative z-10 flex items-center gap-4 mb-10">
                <motion.div
                  className="
                  rounded-2xl
                  bg-slate-900/80
                  p-4
                  border
                  border-slate-800
                  shadow-inner
                  shadow-violet-500/10
                "
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code2 className="w-7 h-7 text-violet-300" />
                </motion.div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    Full-Stack (MERN)
                  </h2>

                  <p className="text-slate-400 mt-1">
                    A powerful stack for dynamic platforms and recurring rental
                    workflows.
                  </p>
                </div>
              </div>

              {/* Technologies */}

              <div className="relative z-10 grid gap-4">
                {technologies.fullStack.map((tech, index) => {
                  const TechLogo = tech.logo;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + index * 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        x: -8,
                        scale: 1.02,
                      }}
                      className="
                      group/tech
                      relative
                      flex
                      items-center
                      gap-4
                      rounded-3xl
                      border
                      border-white/10
                      bg-slate-900/70
                      px-5
                      py-4
                      text-base
                      font-semibold
                      overflow-hidden
                      transition-colors
                      duration-500
                      hover:border-violet-400/40
                    "
                    >
                      {/* Animated side line */}

                      <motion.div
                        className="
                        absolute
                        right-0
                        top-0
                        bottom-0
                        w-1
                        bg-gradient-to-b
                        from-violet-400
                        to-cyan-500
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
                        }}
                        transition={{
                          duration: 0.9,
                          delay: 0.5 + index * 0.18,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      {/* Logo */}

                      <div
                        className={`
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-3xl
                        bg-linear-to-br
                        ${tech.color}
                        shadow-lg
                        transition-transform
                        duration-500
                        group-hover/tech:scale-110
                      `}
                      >
                        {TechLogo && (
                          <TechLogo className="w-6 h-6 text-white" />
                        )}
                      </div>

                      <span className="text-slate-100">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Description */}

              <motion.p
                className="
                relative
                z-10
                text-slate-400
                mt-10
                leading-relaxed
              "
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                }}
              >
                Built for secure admin dashboards, real-time product management,
                and rental systems that keep growing with your business.
              </motion.p>
            </motion.div>
          </div>

          {/* =========================================================
            BOTTOM DECORATIVE ELEMENT
        ========================================================== */}

          <motion.div
            className="
            max-w-6xl
            mx-auto
            mt-16
            flex
            justify-center
          "
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            <div
              className="
              h-px
              w-full
              max-w-4xl
              bg-gradient-to-r
              from-transparent
              via-cyan-400/40
              to-transparent
            "
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
