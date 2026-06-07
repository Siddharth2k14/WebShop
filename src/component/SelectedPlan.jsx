import React from 'react'
import { NavLink } from 'react-router-dom';

const SelectedPlan = ({ selectedPlan, selectedPlanPrice, selectedMonthlyPrice, selectedAddOns = [] }) => {
    if (!selectedPlan) {
        return null;
    }

    const effectivePrice = selectedPlanPrice || selectedPlan.price;
    const effectiveMonthlyPrice = selectedMonthlyPrice || selectedPlan.monthlyPrice;

    const getTotalPrice = () => {
        const basePrice = parseInt(effectivePrice.replace(",", ""));

        const addOnTotal = selectedAddOns.reduce((sum, item) => {
            const priceValue = item?.selectedPrice || item?.price;
            const quantity = item?.quantity || 1;
            const price = priceValue ? parseInt(priceValue.replace(",", "")) : 0;
            return sum + (isNaN(price) ? 0 : price * quantity);
        }, 0);

        return basePrice + addOnTotal + parseInt(effectiveMonthlyPrice.replace(",",""));
    };

    return (
        <div className="mt-16 max-w-3xl mx-auto glass-card rounded-2xl p-8 border border-slate-800 shadow-2xl shadow-slate-950/40">
            <h2 className="text-2xl font-bold mb-4 text-white">Your Selection</h2>

            <p className="mb-2 text-slate-300">
                <strong className="text-white">Plan:</strong> {selectedPlan.name}
            </p>

            <p className="mb-2 text-slate-300">
                <strong className="text-white">Base Price:</strong> ₹{effectivePrice}
            </p>

            <p className="mb-2 text-slate-300">
                <strong className="text-white">Monthly Price:</strong> ₹{effectiveMonthlyPrice}
            </p>

            <div className="mb-4 text-slate-300">
                <strong className="text-white">Add-ons:</strong>
                <ul className="list-disc ml-6 mt-2">
                    {selectedAddOns.length === 0 && <li>No add-ons selected</li>}
                    {selectedAddOns.map((item, i) => (
                        <li key={i}>
                            {item.name}
                            {item.quantity > 1 && ` x${item.quantity}`} - ₹{item.selectedPrice || item.price}
                            {item.quantity > 1 && ` each`}
                        </li>
                    ))}
                </ul>
            </div>

            <h3 className="text-xl font-bold text-cyan-300 mb-6">
                Total: ₹{getTotalPrice()}
            </h3>

            <NavLink
                to="/contact"
                state={{
                    selectedPlan: {
                        name: selectedPlan.name,
                        price: selectedPlan.price,
                        selectedPrice: effectivePrice,
                        monthlyPrice: selectedPlan.monthlyPrice,
                        selectedMonthlyPrice: effectiveMonthlyPrice,
                        popular: selectedPlan.popular || false
                    },
                    selectedAddOns: selectedAddOns.map((addOn) => ({
                        name: addOn.name,
                        price: addOn.price,
                        selectedPrice: addOn.selectedPrice || addOn.price,
                        quantity: addOn.quantity || 1
                    }))
                }}
                className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${selectedPlan?.popular
                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-linear-to-r from-blue-600 to-cyan-600 text-white'
                    }`}>

                Get Started
            </NavLink>
        </div>
    )
}

export default SelectedPlan

