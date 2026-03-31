import { Button } from '@mui/material';
import { CheckCircle2, Globe, Database } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import SelectedPlan from './SelectedPlan';
import AddOns from './AddOns';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
    const [selectedMonthlyPrice, setSelectedMonthlyPrice] = useState(null);
    const [planPriceSelection, setPlanPriceSelection] = useState({});
    const [planMonthlySelection, setPlanMonthlySelection] = useState({});
    const [addOnPriceSelection, setAddOnPriceSelection] = useState({});
    const [addOnQuantitySelection, setAddOnQuantitySelection] = useState({});
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const isFullStack = selectedPlan?.name.includes("Full Stack");

    const plans = [
        {
            name: 'Basic Website Plan',
            price: '2,999',
            monthlyPrice: '799',
            icon: Globe,
            description: 'Perfect for small businesses and local shops',
            features: [
                '4-5 pages (Home, About, Services, Contact)',
                'Mobile responsive design',
                'WhatsApp integration button',
                'Basic SEO optimization',
                'Hosting included',
                'Monthly maintenance included'
            ],
            techStack: 'HTML, CSS, JavaScript / Next.js',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Business Website / Full Stack Plan',
            price: '14,999',
            monthlyPrice: '1,999',
            icon: Database,
            description: 'Best for growing businesses needing advanced features',
            features: [
                "Manage products/services easily from dashboard",
                "Receive and track orders or customer inquiries",
                "Secure login system for admin/users",
                "Website hosting included (no extra cost)",
                "Monthly updates & maintenance handled"
            ],
            techStack: 'MERN Stack (MongoDB, Express, React, Node.js)',
            gradient: 'from-purple-500 to-pink-500',
            popular: true
        }
    ];

    const addOns = [
        {
            name: 'Inventory System (setup)',
            price: '5,000'
        },
        {
            name: 'Order Tracking',
            price: '2,000'
        },
        {
            name: 'Advanced Analytics',
            price: '1,500'
        },
        {
            name: 'Extra Pages (per page)',
            price: '500'
        }
    ];

    const handleSelectPlan = (plan) => {
        const chosenPrice = planPriceSelection[plan.name] || plan.price_1;
        const chosenMonthly = planMonthlySelection[plan.name] || plan.monthlyPrice_1;

        setSelectedPlan(plan);
        setSelectedPlanPrice(chosenPrice);
        setSelectedMonthlyPrice(chosenMonthly);
        setSelectedAddOns([]);

        setPlanPriceSelection((prev) => ({ ...prev, [plan.name]: chosenPrice }));
        setPlanMonthlySelection((prev) => ({ ...prev, [plan.name]: chosenMonthly }));

        setTimeout(() => {
            document.getElementById("addons")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }

    const toggleAddOn = (addOn) => {
        if (!selectedPlan) return;

        const isFullStack = selectedPlan.name.includes("Full Stack");

        // block restricted add-ons
        const index = addOns.findIndex(a => a.name === addOn.name);
        if (!isFullStack && index < 3) return;

        setSelectedAddOns((prev) => {
            const exists = prev.find(item => item.name === addOn.name);
            const selectedPrice = addOnPriceSelection[addOn.name] || addOn.price_1;
            const quantity = addOnQuantitySelection[addOn.name] || 1;

            if (exists) {
                return prev.filter(item => item.name !== addOn.name);
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

                <link
                    rel="canonical"
                    href="https://web-shop-olive.vercel.app/pricing"
                />

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

            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Monthly rental model with no hidden costs. Cancel anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            const chosenPriceForPlan = planPriceSelection[plan.name] || plan.price_1;
                            return (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all ${plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div className="p-8">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mb-4`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                        <p className="text-slate-600 mb-4">{plan.description}</p>

                                        <div className="flex items-baseline mb-6">
                                            <span className="text-4xl font-bold">
                                                ₹{plan.price}
                                            </span>
                                            <span className="text-slate-600 ml-2"> one time</span>
                                        </div>

                                        <div className="flex items-baseline mb-6">
                                            <span className="text-2xl font-bold">₹{plan.monthlyPrice}</span>
                                            <span className="text-slate-600 ml-2">/month</span>
                                        </div>

                                        <div className="bg-slate-50 rounded-lg p-3 mb-6">
                                            <p className="text-sm text-slate-600">
                                                <span className="font-semibold">Tech Stack:</span> {plan.techStack}
                                            </p>
                                        </div>

                                        <ul className="space-y-3 mb-4">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            onClick={() => handleSelectPlan(plan)}
                                            className={`block text-center px-6 py-3 rounded-lg font-semibold`}
                                        >
                                            Select Plan
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <AddOns
                        addOns={addOns}
                        selectedPlan={selectedPlan}
                        isFullStack={isFullStack}
                        selectedAddOns={selectedAddOns}
                        addOnPriceSelection={addOnPriceSelection}
                        addOnQuantitySelection={addOnQuantitySelection}
                        toggleAddOn={toggleAddOn}
                        setAddOnPriceSelection={setAddOnPriceSelection}
                        setAddOnQuantitySelection={setAddOnQuantitySelection}
                        setSelectedAddOns={setSelectedAddOns}
                    />

                    {selectedPlan && (
                        <SelectedPlan
                            selectedPlan={selectedPlan}
                            selectedPlanPrice={selectedPlanPrice}
                            selectedMonthlyPrice={selectedMonthlyPrice}
                            selectedAddOns={selectedAddOns}
                        />
                    )}

                    <div className="mt-12 text-center">
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            * All prices are monthly rentals. Setup happens within 3-5 business days.
                            <span className="font-semibold"> We maintain and host your website, you just provide content updates.</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;