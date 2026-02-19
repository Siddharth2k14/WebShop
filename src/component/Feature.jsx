import { Layers, Rocket, Shield, Zap } from "lucide-react";

const Feature = () => {

    const features = [
        {
            icon: Rocket,
            title: 'Quick Launch',
            description: 'Get your website live within days, not months. Fast turnaround for your business needs.'
        },
        {
            icon: Shield,
            title: 'Worry-Free Maintenance',
            description: 'We handle all updates, hosting, and technical issues. You just tell us what to change.'
        },
        {
            icon: Zap,
            title: 'Rental Model',
            description: 'Pay monthly with no large upfront investment. Cancel anytime with no hidden fees.'
        },
        {
            icon: Layers,
            title: 'Scalable Solutions',
            description: 'Start with a simple website, upgrade to full-stack with database when your business grows.'
        }
    ];

    return (
        <section id="feature" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We make having a professional online presence simple and affordable for local businesses
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default Feature;