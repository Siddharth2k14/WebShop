import { MessageSquare, Palette, Code2, Rocket, Settings } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: MessageSquare,
            title: 'Consultation',
            description: 'Tell us about your business, products, and what makes you special.'
        },
        {
            icon: Palette,
            title: 'Design & Development',
            description: 'We create a beautiful, custom website tailored to your brand.'
        },
        {
            icon: Rocket,
            title: 'Launch',
            description: 'Your website goes live with hosting included. Ready in 3-5 days!'
        },
        {
            icon: Settings,
            title: 'Maintenance',
            description: 'We handle all updates. Just send us changes and we implement them.'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Simple 4-step process to get your business online
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                                    <p className="text-slate-600 text-center">{step.description}</p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-center">The Rental Model Explained</h3>
                    <div className="space-y-4 text-slate-700">
                        <p>
                            <span className="font-semibold text-blue-600">✓ No Large Upfront Investment:</span> Pay monthly, not thousands upfront.
                        </p>
                        <p>
                            <span className="font-semibold text-blue-600">✓ We Handle Everything:</span> Hosting, security, updates, backups - all included.
                        </p>
                        <p>
                            <span className="font-semibold text-blue-600">✓ Your Only Job:</span> Run your business and tell us when products or prices change.
                        </p>
                        <p>
                            <span className="font-semibold text-blue-600">✓ Flexible:</span> Upgrade to full-stack when you need it, cancel anytime with notice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;