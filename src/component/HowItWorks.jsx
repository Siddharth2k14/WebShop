import { MessageSquare, Palette, Code2, Rocket, Settings, QrCode } from 'lucide-react';
import { Helmet } from 'react-helmet';

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
            description: 'We deploy your website with hosting and connect it to your QR code for easy customer access.'
        },
        {
            icon: QrCode,
            title: 'QR Integration',
            description: 'We create a custom QR code for your business so customers can instantly access your website.'
        },
        {
            icon: Settings,
            title: 'Maintenance',
            description: 'We handle all updates. Just send us changes and we implement them.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>How Our Website Service Works | WebShop Agency</title>

                <meta
                    name="description"
                    content="Learn how WebShop Agency builds and maintains websites for local businesses through a simple 4-step process including consultation, development, launch, and maintenance."
                />

                <link
                    rel="canonical"
                    href="https://web-shop-olive.vercel.app/howitworks"
                />
            </Helmet>

            <section className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Our Rental Service Works</h1>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            A simple onboarding process to start your website rental and keep it running smoothly.
                        </p>
                    </div>

                    <div className="grid md:grid-rows-5 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="relative">
                                    <div className="glass-card p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                                        <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/20">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-linear-to-br from-cyan-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-center text-white">{step.title}</h3>
                                        <p className="text-slate-300 text-center">{step.description}</p>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-linear-to-b from-cyan-500 to-violet-600"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto bg-slate-900/70 p-8 rounded-2xl shadow-2xl shadow-slate-950/40 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-4 text-center text-white">The Rental Model Explained</h3>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                <span className="font-semibold text-cyan-300">✓ No Large Upfront Investment:</span> Pay monthly, not thousands upfront.
                            </p>
                            <p>
                                <span className="font-semibold text-cyan-300">✓ We Handle Everything:</span> Hosting, security, updates, backups - all included.
                            </p>
                            <p>
                                <span className="font-semibold text-cyan-300">✓ Your Only Job:</span> Run your business and tell us when products or prices change.
                            </p>
                            <p>
                                <span className="font-semibold text-cyan-300">✓ Flexible:</span> Upgrade to full-stack when you need it, cancel anytime with notice.
                            </p>
                            <p>
                                <span className="font-semibold text-cyan-300">✓ Workflow:</span> Customer will come and scan the QR code, open the website directly.
                            </p>
                        </div>
                        <div className="mt-12 bg-slate-900/70 rounded-2xl p-8 border border-slate-800">

                            <h4 className="text-2xl font-bold text-white mb-6 text-center">
                                Customers Can Check
                            </h4>

                            <div className="grid sm:grid-cols-2 gap-4 text-slate-200">

                                <div className="bg-slate-950/80 rounded-xl p-4 shadow-sm flex items-center justify-center text-center">
                                    ✓ Product availability
                                </div>

                                <div className="bg-slate-950/80 rounded-xl p-4 shadow-sm flex items-center justify-center text-center">
                                    ✓ Prices
                                </div>

                                <div className="bg-slate-950/80 rounded-xl p-4 shadow-sm flex items-center justify-center text-center">
                                    ✓ New arrivals
                                </div>

                                <div className="bg-slate-950/80 rounded-xl p-4 shadow-sm flex items-center justify-center text-center">
                                    ✓ Shop timings
                                </div>

                                <div className="bg-slate-950/80 rounded-xl p-4 shadow-sm flex items-center justify-center text-center sm:col-span-2">
                                    ✓ Contact details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowItWorks;
