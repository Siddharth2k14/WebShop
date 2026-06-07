import React from 'react'

const AddOns = ({ addOns, selectedPlan, isBusiness, selectedAddOns, addOnPriceSelection, addOnQuantitySelection, toggleAddOn, setAddOnPriceSelection, setAddOnQuantitySelection, setSelectedAddOns }) => {
    return (
        <div id='addons' className="mt-20 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                Add-ons (Optional)
            </h2>

            <p className="text-xl text-center font-bold mb-4 text-slate-300">
                First 2 add-ons are only available for Business Plan
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {addOns.map((addOn, index) => {
                    const isDisabled =
                        !selectedPlan ||
                        (!isBusiness && index < 2); // restrict first 3 add-ons

                    return (
                        <div
                            key={index}
                            className={`rounded-xl p-5 border border-slate-800 transition ${isDisabled ? "opacity-50 cursor-not-allowed bg-slate-900/60" : "bg-slate-900/70 hover:shadow-2xl"}`}
                        >
                            <label className="flex items-start gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    disabled={isDisabled}
                                    onChange={() => toggleAddOn(addOn)}
                                    checked={selectedAddOns.some(a => a.name === addOn.name)}
                                    className="mt-1 rounded-sm text-cyan-500 focus:ring-cyan-500"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold mb-1 text-white">
                                        {addOn.name}
                                    </h3>

                                    <p className="text-cyan-300 font-bold mb-2">
                                        {addOn.price
                                            ? `Selected: ₹${addOnPriceSelection[addOn.name] || addOn.price}`
                                            : `₹${addOn.price}`
                                        }
                                    </p>

                                    {addOn.name.toLowerCase().includes('extra page') && (
                                        <div className="mt-2 flex items-center gap-2">
                                            <label className="text-sm text-slate-400">Pages:</label>
                                            <input
                                                type="number"
                                                min={1}
                                                value={addOnQuantitySelection[addOn.name] || 1}
                                                onChange={(e) => {
                                                    const qty = Math.max(1, Number(e.target.value));
                                                    setAddOnQuantitySelection((prev) => ({ ...prev, [addOn.name]: qty }));
                                                    setSelectedAddOns((prev) => prev.map(item => item.name === addOn.name ? { ...item, quantity: qty } : item));
                                                }}
                                                className="w-20 px-2 py-1 bg-slate-950 text-slate-100 border border-slate-700 rounded-lg"
                                            />
                                        </div>
                                    )}

                                    <p className="text-sm text-slate-400 mt-1">
                                        Add-on package with flexible billing.
                                    </p>

                                    {addOn.name.toLowerCase().includes('extra page') && (
                                        <p className="text-xs text-slate-500 mt-1">You can select number of pages (each at chosen price above).</p>
                                    )}

                                    {isDisabled && (
                                        <p className="text-xs text-rose-400 mt-1">
                                            Select Full Stack Plan
                                        </p>
                                    )}
                                </div>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AddOns

