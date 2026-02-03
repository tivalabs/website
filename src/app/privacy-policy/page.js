'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-text font-exo">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 py-32 md:py-40">
                <article className="prose prose-invert prose-lg max-w-4xl mx-auto">
                    <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-8">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-text/60 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">1. Introduction</h2>
                        <p>
                            Tiva Labs ("we", "our", or "us") respects your privacy and is committed to protecting the personal information of our users ("user" or "you").
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our browser extension and other products (collectively, the "Services").
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl text-white mt-6 mb-3">a. Personal Data</h3>
                        <p>
                            We do not collect any personally identifiable information (PII) such as your name, address, or email address unless you voluntarily provide it to us (e.g., through support inquiries or newsletter sign-ups).
                        </p>

                        <h3 className="text-xl text-white mt-6 mb-3">b. Blockchain Data</h3>
                        <p>
                            When you interact with our Wallet or DApps, we may collect public blockchain data, such as your public wallet address and transaction history. This data is public by nature and stored on the blockchain, not on our private servers.
                        </p>

                        <h3 className="text-xl text-white mt-6 mb-3">c. Usage Data</h3>
                        <p>
                            We may collect non-personal usage data to improve our extension's performance. This includes crash reports, feature usage statistics, and browser version information. This data is anonymized and cannot be used to identify you personally.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To provide, operate, and maintain our Services.</li>
                            <li>To improve, personalize, and expand our Services.</li>
                            <li>To detect and prevent fraudulent or unauthorized activity.</li>
                            <li>To respond to your comments, questions, and customer service requests.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">4. Third-Party Services</h2>
                        <p>
                            Our Services may contain links to third-party websites or services (e.g., DEXs, Bridges) that are not owned or controlled by Tiva Labs.
                            We are not responsible for the privacy practices of such third parties. We encourage you to be aware when you leave our Services and to read the privacy statements of each website that may collect personal information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">5. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information.
                            However, please be aware that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                        </p>
                        <p className="mt-4">
                            <strong>Your Private Keys:</strong> Your private keys are stored locally on your device and are encrypted. We never have access to your private keys or seed phrases. You are solely responsible for keeping them secure.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">6. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-orbitron text-white mb-4">7. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@tiva.labs" className="text-primary hover:underline">support@tiva.labs</a>
                        </p>
                    </section>
                </article>
            </div>

            <Footer />
        </main>
    );
}
