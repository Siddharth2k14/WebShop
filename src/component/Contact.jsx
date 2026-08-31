import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const location = useLocation();

  const selectedPlan = location.state?.selectedPlan;
  const selectedAddOns = location.state?.selectedAddOns || [];
  const selectedPlanPrice = selectedPlan?.selectedPrice || selectedPlan?.price;
  const selectedMonthlyPrice =
    selectedPlan?.selectedMonthlyPrice || selectedPlan?.monthlyPrice;
  const selectedAddOnsLabel = selectedAddOns.length
    ? selectedAddOns
        .map((a) => (a.quantity > 1 ? `${a.name} x${a.quantity}` : a.name))
        .join(", ")
    : "None";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const businessName = formData.get("businessName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const websiteType = formData.get("websiteType");
    const message = formData.get("message");

    // Create mailto link with form data
    const subject = encodeURIComponent(
      `New Website Inquiry from ${businessName}`,
    );
    const addOnsText = selectedAddOns.length
      ? selectedAddOns
          .map((a) => {
            const qty = a.quantity || 1;
            const price = a.selectedPrice || a.price;
            const line =
              qty > 1
                ? `- ${a.name} x${qty} (₹${price} each, ₹${parseInt(price.replace(",", "")) * qty})`
                : `- ${a.name} (₹${price})`;
            return line;
          })
          .join("\n")
      : "None";

    const body = encodeURIComponent(
      `Name: ${name}
Business Name: ${businessName}
Email: ${email}
Phone: ${phone}

Selected Plan: ${selectedPlan?.name || websiteType}
Selected Price: ₹${selectedPlanPrice || "N/A"}
Selected Monthly Price: ₹${selectedMonthlyPrice || "N/A"}

Add-ons:
${addOnsText}

Message:
${message}`,
    );

    window.location.href = `mailto:webshopagency04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact WebShop Agency | Website for Local Businesses</title>

        <meta
          name="description"
          content="Contact WebShop Agency to get an affordable website for your business. Launch your professional website with monthly pricing and full maintenance included."
        />

        <link rel="canonical" href="https://webshopagency.in/contact" />

        <script type="application/ld+json">
          {`
{
 "@context": "https://schema.org",
 "@type": "ContactPoint",
 "telephone": "+91 9555204672",
 "contactType": "customer service",
 "email": "webshopagency04@gmail.com",
 "areaServed": "IN"
}
`}
        </script>
      </Helmet>
      <section className="relative py-20 md:py-28 bg-slate-950 text-slate-100 border-b border-slate-800 overflow-hidden">
        {/* =========================================================
        BACKGROUND
    ========================================================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cyan Glow */}
          <motion.div
            className="
                absolute
                top-0
                left-0
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
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Violet Glow */}
          <motion.div
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
            animate={{
              x: [0, -35, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
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
                w-80
                h-80
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
              duration: 14,
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
        CONTAINER
    ========================================================== */}

        <div className="relative container mx-auto px-4">
          {/* =====================================================
            HEADER
        ====================================================== */}

          <motion.div
            className="text-center mb-16"
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

            <motion.div
              className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-slate-900/70
                    border
                    border-cyan-400/20
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-cyan-300
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
                duration: 0.9,
                delay: 0.2,
              }}
            >
              Let's Build Your Online Presence
            </motion.div>

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
              Get Your Website{" "}
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
                Today
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              className="
                    text-slate-300
                    max-w-2xl
                    mx-auto
                    text-lg
                    md:text-xl
                    leading-relaxed
                "
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
              Ready to take your business online? Let's discuss your needs and
              get started!
            </motion.p>
          </motion.div>

          {/* =====================================================
            MAIN GRID
        ====================================================== */}

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <motion.div
              className="space-y-8"
              initial={{
                opacity: 0,
                x: -100,
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
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Contact Information */}

              <div>
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-7 text-white"
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
                    duration: 0.8,
                  }}
                >
                  Contact Information
                </motion.h3>

                <div className="space-y-5">
                  {/* Email */}

                  <motion.div
                    className="group flex items-start gap-4"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                  >
                    <motion.div
                      className="
                                    w-12
                                    h-12
                                    shrink-0
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-linear-to-br
                                    from-cyan-500
                                    to-violet-600
                                    shadow-lg
                                    shadow-cyan-500/20
                                "
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>

                    <div>
                      <p className="font-semibold mb-1 text-slate-100">Email</p>

                      <a
                        href="mailto:webshopagency04@gmail.com"
                        className="
                                        text-cyan-300
                                        hover:text-cyan-100
                                        transition-colors
                                    "
                      >
                        webshopagency04@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}

                  <motion.div
                    className="group flex items-start gap-4"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                  >
                    <motion.div
                      className="
                                    w-12
                                    h-12
                                    shrink-0
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-linear-to-br
                                    from-cyan-500
                                    to-violet-600
                                    shadow-lg
                                    shadow-cyan-500/20
                                "
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </motion.div>

                    <div>
                      <p className="font-semibold mb-1 text-slate-100">Phone</p>

                      <p className="text-slate-300">+91 9555204672</p>
                    </div>
                  </motion.div>

                  {/* Location */}

                  <motion.div
                    className="group flex items-start gap-4"
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.45,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                  >
                    <motion.div
                      className="
                                    w-12
                                    h-12
                                    shrink-0
                                    rounded-xl
                                    flex
                                    items-center
                                    justify-center
                                    bg-linear-to-br
                                    from-cyan-500
                                    to-violet-600
                                    shadow-lg
                                    shadow-cyan-500/20
                                "
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>

                    <div>
                      <p className="font-semibold mb-1 text-slate-100">
                        Location
                      </p>

                      <p className="text-slate-300">
                        Serving local businesses across India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* =================================================
                    WHAT TO PREPARE
                ================================================== */}

              <motion.div
                className="
                        group
                        glass-card
                        p-6
                        rounded-3xl
                        border
                        border-slate-800
                        hover:border-cyan-400/30
                        transition-colors
                        duration-500
                        relative
                        overflow-hidden
                    "
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                whileHover={{
                  y: -6,
                }}
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
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-700
                        "
                />

                <div className="relative z-10">
                  <h4 className="font-semibold mb-4 text-white text-lg">
                    What to prepare:
                  </h4>

                  <ul className="space-y-3 text-slate-300">
                    {[
                      "List of products/services you offer",
                      "Your business logo (if available)",
                      "Product photos",
                      "Any specific features you need",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
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
                          delay: 0.55 + index * 0.12,
                        }}
                      >
                        <span className="text-cyan-400">✓</span>

                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT SIDE - FORM
            ================================================== */}

            <motion.div
              className="
                    glass-card
                    p-6
                    md:p-8
                    rounded-3xl
                    border
                    border-slate-800
                    shadow-2xl
                    shadow-slate-950/40
                    relative
                    overflow-hidden
                "
              initial={{
                opacity: 0,
                x: 100,
                rotateY: -8,
                scale: 0.96,
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
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                rotateY: 1,
              }}
              style={{
                transformPerspective: 1400,
              }}
            >
              {/* Form Glow */}

              <div
                className="
                        absolute
                        -top-32
                        -right-32
                        w-80
                        h-80
                        rounded-full
                        bg-violet-500/10
                        blur-3xl
                        pointer-events-none
                    "
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-7 text-white"
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
                    delay: 0.3,
                  }}
                >
                  Send us a Message
                </motion.h3>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Name */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-slate-200 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                "
                    />
                  </motion.div>

                  {/* Business Name */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-slate-200 mb-2">
                      Business Name
                    </label>

                    <input
                      type="text"
                      name="businessName"
                      placeholder="Your shop/business name"
                      required
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                "
                    />
                  </motion.div>

                  {/* Email */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-slate-200 mb-2">Email</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                "
                    />
                  </motion.div>

                  {/* Phone */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-slate-200 mb-2">Phone</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                "
                    />
                  </motion.div>

                  {/* Website Type */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-slate-200 mb-2">
                      Website Type
                    </label>

                    <select
                      name="websiteType"
                      defaultValue={selectedPlan?.name || "Not sure yet"}
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                "
                    >
                      <option>Basic Website Plan</option>

                      <option>Business Website / Full Stack Plan</option>

                      <option>Not sure yet</option>
                    </select>
                  </motion.div>

                  {/* Add-ons */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-slate-200 mb-2">Add-ons</label>

                    <input
                      type="text"
                      name="addOns"
                      readOnly
                      value={selectedAddOnsLabel}
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                "
                    />
                  </motion.div>

                  {/* Message */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <label className="block text-slate-200 mb-2">
                      Tell us about your business
                    </label>

                    <textarea
                      rows={4}
                      name="message"
                      placeholder="What do you sell? What makes your business special?"
                      required
                      className="
                                    w-full
                                    px-4
                                    py-3
                                    bg-slate-950
                                    text-slate-100
                                    border
                                    border-slate-700
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-cyan-500
                                    focus:border-cyan-500
                                    transition-all
                                    resize-none
                                "
                    />
                  </motion.div>

                  {/* Submit Button */}

                  <motion.button
                    type="submit"
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
                      delay: 1.1,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                                w-full
                                btn-accent
                                px-6
                                py-4
                                rounded-lg
                                font-semibold
                                hover:shadow-lg
                                hover:shadow-cyan-500/20
                                transition-all
                                flex
                                items-center
                                justify-center
                                gap-2
                            "
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
