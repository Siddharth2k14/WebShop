import { Layers, Rocket, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet";

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
            description: 'We handle all updates, hosting, and technical issues. You just tell us what to change (Charges apply).'
        },
        {
            icon: Zap,
            title: 'Rental Model',
            description: 'Pay monthly with no large upfront investment. Affordable for local businesses.'
        },
        {
            icon: Layers,
            title: 'Scalable Solutions',
            description: 'Start with a simple website, upgrade to full-stack with database when your business grows.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Website Features for Local Businesses | WebShop Agency</title>

                <meta
                    name="description"
                    content="Explore the features of WebShop Agency websites including fast launch, worry-free maintenance, scalable solutions, and affordable rental pricing."
                />

                <link
                    rel="canonical"
                    href="https://webshopagency.in/feature"
                />
            </Helmet>

            <section className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Why Rent Your Website With WebShop Agency
                        </h1>

                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Affordable monthly website rental for local stores, with design, hosting, and ongoing maintenance included.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="glass-card p-6 rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-violet-600 rounded-3xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-300">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
};

export default Feature;
