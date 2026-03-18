import React from 'react'

const AddOns = ({ addOns, selectedPlan, isFullStack, selectedAddOns, addOnPriceSelection, addOnQuantitySelection, toggleAddOn, setAddOnPriceSelection, setAddOnQuantitySelection, setSelectedAddOns }) => {
    return (
        <div id='addons' className="mt-20 max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Add-ons (Optional)
            </h2>

            <p className="text-xl text-center font-bold mb-4">
                First 3 add-ons are only available for Full Stack Plan
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {addOns.map((addOn, index) => {
                    const isDisabled =
                        !selectedPlan ||
                        (!isFullStack && index < 3); // restrict first 3 add-ons

                    return (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow p-5 border transition 
                    ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`}
                        >
                            <label className="flex items-start gap-3 cursor-pointer">

                                <input
                                    type="checkbox"
                                    disabled={isDisabled}
                                    onChange={() => toggleAddOn(addOn)}
                                    checked={selectedAddOns.some(a => a.name === addOn.name)}
                                    className="mt-1"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold mb-1">
                                        {addOn.name}
                                    </h3>

                                    <p className="text-blue-600 font-bold mb-2">
                                        {addOn.price_2
                                            ? `Selected: ₹${addOnPriceSelection[addOn.name] || addOn.price_1}`
                                            : `₹${addOn.price_1}`
                                        }
                                    </p>

                                    {addOn.price_2 && (
                                        <>
                                            <div className="flex gap-2 mb-2">
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setAddOnPriceSelection((prev) => ({ ...prev, [addOn.name]: addOn.price_1 }));
                                                        setSelectedAddOns((prev) => prev.map(item => item.name === addOn.name ? { ...item, selectedPrice: addOn.price_1 } : item));
                                                    }}
                                                    className={`px-2 py-1 rounded-lg border ${addOnPriceSelection[addOn.name] === addOn.price_1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'}`}
                                                >
                                                    ₹{addOn.price_1}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setAddOnPriceSelection((prev) => ({ ...prev, [addOn.name]: addOn.price_2 }));
                                                        setSelectedAddOns((prev) => prev.map(item => item.name === addOn.name ? { ...item, selectedPrice: addOn.price_2 } : item));
                                                    }}
                                                    className={`px-2 py-1 rounded-lg border ${addOnPriceSelection[addOn.name] === addOn.price_2 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'}`}
                                                >
                                                    ₹{addOn.price_2}
                                                </button>
                                            </div>
                                            {addOn.name.toLowerCase().includes('extra page') && (
                                                <div className="mt-2 flex items-center gap-2">
                                                    <label className="text-sm text-slate-600">Pages:</label>
                                                    <input
                                                        type="number"
                                                        min={1}
                                                        value={addOnQuantitySelection[addOn.name] || 1}
                                                        onChange={(e) => {
                                                            const qty = Math.max(1, Number(e.target.value));
                                                            setAddOnQuantitySelection((prev) => ({ ...prev, [addOn.name]: qty }));
                                                            setSelectedAddOns((prev) => prev.map(item => item.name === addOn.name ? { ...item, quantity: qty } : item));
                                                        }}
                                                        className="w-20 px-2 py-1 border border-slate-300 rounded-lg"
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}

                                    <p className="text-sm text-slate-500 mt-1">
                                        Add-on package with flexible billing.
                                    </p>

                                    {addOn.name.toLowerCase().includes('extra page') && (
                                        <p className="text-xs text-slate-500 mt-1">You can select number of pages (each at chosen price above).</p>
                                    )}

                                    {isDisabled && (
                                        <p className="text-xs text-red-500 mt-1">
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
