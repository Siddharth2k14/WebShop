import { CheckCircle2, Globe, Database } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Static Website',
            price: '1,000',
            icon: Globe,
            description: 'Perfect for small shops and businesses',
            features: [
                'Beautiful responsive design',
                'Up to 5 pages',
                'Contact form',
                'Google Maps integration',
                'Mobile-friendly',
                'Free hosting included',
                'Free maintenance',
                'Content updates as needed'
            ],
            techStack: 'HTML, CSS, JavaScript',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Full-Stack Website',
            price: '2,000',
            icon: Database,
            description: 'For businesses needing advanced features',
            features: [
                'Everything in Static plan',
                'Custom backend functionality',
                'Database integration',
                'User authentication',
                'Admin dashboard',
                'Inventory management',
                'Order tracking system',
                'Advanced analytics'
            ],
            techStack: 'MERN Stack (MongoDB, Express, React, Node.js)',
            gradient: 'from-purple-500 to-pink-500',
            popular: true
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Monthly rental model with no hidden costs. Cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
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
                                        <span className="text-4xl font-bold">₹{plan.price}</span>
                                        <span className="text-slate-600 ml-2">/month</span>
                                    </div>

                                    <div className="bg-slate-50 rounded-lg p-3 mb-6">
                                        <p className="text-sm text-slate-600">
                                            <span className="font-semibold">Tech Stack:</span> {plan.techStack}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <NavLink
                                        to="/contact"
                                        className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${plan.popular
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                                            }`}
                                    >
                                        Get Started
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        * All prices are monthly rentals. Setup happens within 3-5 business days.
                        <span className="font-semibold"> We maintain and host your website, you just provide content updates.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;