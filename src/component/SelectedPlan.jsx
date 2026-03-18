import React from 'react'
import { NavLink } from 'react-router-dom';

const SelectedPlan = ({ selectedPlan, selectedPlanPrice, selectedMonthlyPrice, selectedAddOns = [] }) => {
    if (!selectedPlan) {
        return null;
    }

    const effectivePrice = selectedPlanPrice || selectedPlan.price_1;
    const effectiveMonthlyPrice = selectedMonthlyPrice || selectedPlan.monthlyPrice_1;

    const getTotalPrice = () => {
        const basePrice = parseInt(effectivePrice.replace(",", ""));

        const addOnTotal = selectedAddOns.reduce((sum, item) => {
            const priceValue = item?.selectedPrice || item?.price_1;
            const quantity = item?.quantity || 1;
            const price = priceValue ? parseInt(priceValue.replace(",", "")) : 0;
            return sum + (isNaN(price) ? 0 : price * quantity);
        }, 0);

        return basePrice + addOnTotal + parseInt(effectiveMonthlyPrice.replace(",",""));
    };

    return (
        <div className="mt-16 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Your Selection</h2>

            <p className="mb-2">
                <strong>Plan:</strong> {selectedPlan.name}
            </p>

            <p className="mb-2">
                <strong>Base Price:</strong> ₹{effectivePrice}
            </p>

            <p className="mb-2">
                <strong>Monthly Price:</strong> ₹{effectiveMonthlyPrice}
            </p>

            <div className="mb-4">
                <strong>Add-ons:</strong>
                <ul className="list-disc ml-6 mt-2">
                    {selectedAddOns.length === 0 && <li>No add-ons selected</li>}
                    {selectedAddOns.map((item, i) => (
                        <li key={i}>
                            {item.name}
                            {item.quantity > 1 && ` x${item.quantity}`} - ₹{item.selectedPrice || item.price_1}
                            {item.quantity > 1 && ` each`}
                        </li>
                    ))}
                </ul>
            </div>

            <h3 className="text-xl font-bold text-green-600">
                Total: ₹{getTotalPrice()}
            </h3>

            <NavLink
                to="/contact"
                state={{
                    selectedPlan: {
                        name: selectedPlan.name,
                        price_1: selectedPlan.price_1,
                        price_2: selectedPlan.price_2,
                        selectedPrice: effectivePrice,
                        monthlyPrice_1: selectedPlan.monthlyPrice_1,
                        monthlyPrice_2: selectedPlan.monthlyPrice_2,
                        selectedMonthlyPrice: effectiveMonthlyPrice,
                        popular: selectedPlan.popular || false
                    },
                    selectedAddOns: selectedAddOns.map((addOn) => ({
                        name: addOn.name,
                        price_1: addOn.price_1,
                        price_2: addOn.price_2,
                        selectedPrice: addOn.selectedPrice || addOn.price_1,
                        quantity: addOn.quantity || 1
                    }))
                }}
                className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${selectedPlan?.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    }`}>

                Get Started
            </NavLink>
        </div>
    )
}

export default SelectedPlan
