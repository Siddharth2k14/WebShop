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
    const isBusiness = selectedPlan?.name.includes("Business Plan");

    const plans = [
        {
            name: 'Basic Plan',
            site: 'Static Site',
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
            techStack: 'HTML, CSS, JavaScript',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Business Plan',
            site: 'Full Stack Site',
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
            techStack: 'MERN Stack (MongoDB, Express, React, Node.js) / Next.js',
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
            name: 'Advanced Analytics',
            price: '1,500'
        },
        {
            name: 'Extra Pages (per page)',
            price: '500'
        }
    ];

    const restrictedAddOnNames = ['Inventory System (setup)', 'Advanced Analytics'];

    const handleSelectPlan = (plan) => {
        const chosenPrice = planPriceSelection[plan.name] || plan.price;
        const chosenMonthly = planMonthlySelection[plan.name] || plan.monthlyPrice;

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

        const isBusiness = selectedPlan.name.includes("Business Plan");
        const isRestricted = restrictedAddOnNames.includes(addOn.name);

        if (!isBusiness && isRestricted) return;

        setSelectedAddOns((prev) => {
            const exists = prev.find(item => item.name === addOn.name);
            const selectedPrice = addOnPriceSelection[addOn.name] || addOn.price;
            const quantity = addOnQuantitySelection[addOn.name] || 0;

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
                    href="https://webshopagency.in/pricing"
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

            <section className="relative overflow-hidden py-24 bg-slate-950 text-slate-100 border-b border-slate-800">
                <div className="absolute inset-0 pointer-events-none opacity-50">
                    <div className="absolute top-8 left-1/4 w-52 h-52 rounded-full bg-cyan-500/15 blur-3xl" />
                    <div className="absolute top-28 right-10 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl" />
                    <div className="absolute bottom-14 left-1/3 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />
                </div>

                <div className="relative container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="inline-flex items-center rounded-full bg-slate-900/70 text-cyan-300 px-4 py-2 text-sm font-semibold mb-4">
                            Rental Website Model
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Rent a Website, Grow Your Store
                        </h1>
                        <p className="text-slate-300 text-lg">
                            Choose a monthly rental plan that includes design, hosting, maintenance, and support. No large upfront investment required.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            return (
                                <div
                                    key={index}
                                    className={`glass-card overflow-hidden transform hover:-translate-y-1 transition-all ${plan.popular ? 'border-2 border-violet-500 shadow-2xl' : ''}`}
                                >
                                    <div className="p-8 bg-slate-900/75">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-14 h-14 bg-linear-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-white`}>
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-1">{plan.site}</p>
                                                    <h2 className="text-2xl font-bold">{plan.name}</h2>
                                                </div>
                                            </div>
                                            {plan.popular && <span className="rounded-full bg-violet-600 text-white text-xs font-semibold px-3 py-1">Best Seller</span>}
                                        </div>

                                        <p className="text-slate-300 mb-8">{plan.description}</p>

                                        <div className="mb-6">
                                            <div className="flex items-end gap-3">
                                                <span className="text-5xl font-bold text-white">₹{plan.monthlyPrice}</span>
                                                <span className="text-slate-400">/month</span>
                                            </div>
                                            <p className="text-sm text-slate-400 mt-2">One-time setup: ₹{plan.price}</p>
                                        </div>

                                        <div className="bg-slate-900/70 rounded-3xl p-4 mb-6">
                                            <p className="text-sm text-slate-300">
                                                <span className="font-semibold text-white">Tech Stack:</span> {plan.techStack}
                                            </p>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                                                    <span className="text-slate-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            onClick={() => handleSelectPlan(plan)}
                                            variant="contained"
                                            disableElevation
                                            className="w-full px-6 py-3 rounded-2xl font-semibold text-white transition-all"
                                            sx={{
                                                background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                                                color: '#ffffff',
                                                textTransform: 'none',
                                                boxShadow: '0 18px 30px rgba(99, 102, 241, 0.18)',
                                                '&:hover': {
                                                    opacity: 0.95,
                                                    background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
                                                },
                                            }}
                                        >
                                            Rent This Plan
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto text-center">
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-2 text-white">Hosting Included</h3>
                            <p className="text-slate-300">We include secure hosting and backups as part of every rental plan.</p>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-2 text-white">Flexible Upgrades</h3>
                            <p className="text-slate-300">Move from basic to full-stack when your business needs more features.</p>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-2 text-white">Ongoing Support</h3>
                            <p className="text-slate-300">Maintenance, updates, and website changes are handled for you.</p>
                        </div>
                    </div>

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

                    {selectedPlan && (
                        <SelectedPlan
                            selectedPlan={selectedPlan}
                            selectedPlanPrice={selectedPlanPrice}
                            selectedMonthlyPrice={selectedMonthlyPrice}
                            selectedAddOns={selectedAddOns}
                        />
                    )}

                    <div className="mt-12 text-center">
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            * All prices are monthly rentals. Setup happens within 3-5 business weeks.
                            <span className="font-semibold text-slate-100"> We maintain and host your website, you just provide content updates.</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
