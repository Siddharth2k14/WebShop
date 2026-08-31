import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddOns = ({
  addOns,
  selectedPlan,
  isBusiness,
  selectedAddOns,
  addOnPriceSelection,
  addOnQuantitySelection,
  toggleAddOn,
  setAddOnPriceSelection,
  setAddOnQuantitySelection,
  setSelectedAddOns,
}) => {
  return (
    <motion.div
      id="addons"
      className="mt-20 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
        HEADER
    ====================================================== */}

      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
      >
        Add-ons (Optional)
      </motion.h2>

      <motion.p
        className="text-xl text-center font-bold mb-4 text-slate-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
        }}
      >
        First 2 are only for Business Plan.
      </motion.p>

      {/* =====================================================
        ADD-ON CARDS
    ====================================================== */}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {addOns.map((addOn, index) => {
          const restrictedAddOnNames = [
            "Inventory System (setup)",
            "Advanced Analytics",
          ];

          const isRestricted = restrictedAddOnNames.includes(addOn.name);

          const isDisabled = !selectedPlan || (!isBusiness && isRestricted);

          const isSelected = selectedAddOns.some((a) => a.name === addOn.name);

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.94,
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
                duration: 0.9,
                delay: 0.35 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                !isDisabled
                  ? {
                      y: -8,
                      scale: 1.02,
                    }
                  : {}
              }
              className={`
                        group
                        relative
                        rounded-2xl
                        p-5
                        border
                        overflow-hidden
                        transition-all
                        duration-500

                        ${
                          isDisabled
                            ? `
                                    opacity-50
                                    cursor-not-allowed
                                    bg-slate-900/60
                                    border-slate-800
                                  `
                            : `
                                    bg-slate-900/70
                                    border-slate-800
                                    hover:border-cyan-400/40
                                    hover:shadow-2xl
                                    hover:shadow-cyan-500/10
                                  `
                        }

                        ${
                          isSelected
                            ? `
                                    border-cyan-400/60
                                    shadow-xl
                                    shadow-cyan-500/10
                                  `
                            : ""
                        }
                    `}
            >
              {/* =================================================
                        CARD GLOW
                    ================================================== */}

              {!isDisabled && (
                <div
                  className="
                                absolute
                                -top-20
                                -right-20
                                w-40
                                h-40
                                rounded-full
                                bg-cyan-400/10
                                blur-3xl
                                opacity-0
                                group-hover:opacity-100
                                transition-opacity
                                duration-700
                                pointer-events-none
                            "
                />
              )}

              {/* Selected glow */}

              {isSelected && (
                <motion.div
                  className="
                                absolute
                                inset-0
                                rounded-2xl
                                border
                                border-cyan-400/20
                                pointer-events-none
                            "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* =================================================
                        CARD CONTENT
                    ================================================== */}

              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  {/* Checkbox */}

                  <motion.input
                    type="checkbox"
                    disabled={isDisabled}
                    checked={isSelected}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleAddOn(addOn);
                    }}
                    whileTap={!isDisabled ? { scale: 0.85 } : {}}
                    className="
                                    mt-1
                                    rounded-sm
                                    text-cyan-500
                                    focus:ring-cyan-500
                                    cursor-pointer
                                    disabled:cursor-not-allowed
                                "
                  />

                  <div className="flex-1">
                    {/* Add-on title */}

                    <motion.h3
                      className="text-lg font-semibold mb-1 text-white"
                      layout
                    >
                      {addOn.name}
                    </motion.h3>

                    {/* Price */}

                    <motion.p
                      className="text-cyan-300 font-bold mb-2"
                      key={addOnPriceSelection[addOn.name]}
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                    >
                      {addOn.price
                        ? `Selected: ₹${
                            addOnPriceSelection[addOn.name] || addOn.price
                          }`
                        : `₹${addOn.price}`}
                    </motion.p>

                    {/* =================================================
                                    EXTRA PAGE QUANTITY
                                ================================================== */}

                    <AnimatePresence>
                      {addOn.name.toLowerCase().includes("extra page") &&
                        isSelected && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: -10,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              y: -10,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 flex items-center gap-3">
                              <label className="text-sm text-slate-400">
                                Pages:
                              </label>

                              <motion.input
                                type="number"
                                min="1"
                                value={addOnQuantitySelection[addOn.name]}
                                onChange={(e) => {
                                  const qty = Number(e.target.value);

                                  setAddOnQuantitySelection((prev) => ({
                                    ...prev,
                                    [addOn.name]: qty,
                                  }));

                                  setSelectedAddOns((prev) =>
                                    prev.map((item) =>
                                      item.name === addOn.name
                                        ? {
                                            ...item,
                                            quantity: qty,
                                          }
                                        : item,
                                    ),
                                  );
                                }}
                                className="
                                                            w-20
                                                            px-2
                                                            py-1
                                                            bg-slate-950
                                                            text-slate-100
                                                            border
                                                            border-slate-700
                                                            rounded-lg
                                                            focus:outline-none
                                                            focus:ring-2
                                                            focus:ring-cyan-500
                                                        "
                                whileFocus={{
                                  scale: 1.05,
                                }}
                              />
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Description */}

                    <motion.p className="text-sm text-slate-400 mt-2" layout>
                      Add-on package with flexible billing.
                    </motion.p>

                    {/* Extra page information */}

                    {addOn.name.toLowerCase().includes("extra page") && (
                      <motion.p
                        className="text-xs text-slate-500 mt-1"
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
                          duration: 0.6,
                          delay: 0.5 + index * 0.1,
                        }}
                      >
                        You can select number of pages (each at chosen price
                        above).
                      </motion.p>
                    )}

                    {/* Restricted message */}

                    <AnimatePresence>
                      {isDisabled && (
                        <motion.p
                          className="text-xs text-rose-400 mt-2"
                          initial={{
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -5,
                          }}
                        >
                          Select Business Plan
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* =================================================
                        SELECTED INDICATOR
                    ================================================== */}

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="
                                    absolute
                                    bottom-0
                                    left-0
                                    right-0
                                    h-1
                                    bg-gradient-to-r
                                    from-cyan-400
                                    to-violet-500
                                    origin-left
                                "
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AddOns;
