<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
</script>

<template>
    <ScrollToTop />
    <Header />
    <main class="main">
        <Promo 
            imgUrl="/policy-banner.jpg"
            title="Privacy Policy"
            text="Home > Privacy Policy"
        />

        <section class="policy">
            <div class="container">
                <div class="policy__body">
                    <p>This Privacy Policy describes how Novanightstay collects, uses, and discloses personal information about you when you use our website.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect the following types of information from our users:</p>
                    <ul>
                        <li><strong>Information you provide directly:</strong> This includes information you submit through our website, such as your name, email address, and IP address. You may also choose to provide additional information, such as your travel preferences and interests.</li>
                        <li><strong>Information collected automatically:</strong> This includes information collected automatically when you visit our website, such as your browser type, operating system, device information, and browsing activity. We may also collect information about your location, but only with your consent.</li>
                        <li><strong>Information from third-party sources:</strong> We may receive information about you from third-party sources, such as social media platforms or advertising partners. However, we will only collect this information if you have given your consent to the third party to share it with us.</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect from you for the following purposes:</p>
                    <ul>
                        <li>To operate and maintain our website</li>
                        <li>To improve our website and services</li>
                        <li>To send you information about hotels, deals, and promotions</li>
                        <li>To respond to your inquiries and requests</li>
                        <li>To personalize your experience on our website</li>
                        <li>To comply with legal and regulatory requirements</li>
                    </ul>

                    <h2>Sharing Your Information</h2>
                    <p>We may share your information with the following third parties:</p>
                    <ul>
                        <li>Hotels and booking platforms listed on our website when you click on a link to make a reservation</li>
                        <li>Service providers who help us operate and maintain our website</li>
                        <li>Law enforcement agencies or other government officials, as required by law</li>
                    </ul>
                    <p>We will not share your information with any other third parties without your consent.</p>

                    <h2>Data Retention</h2>
                    <p>We will retain your personal information for as long as it is necessary for the purposes set out in this Privacy Policy. This means that we will keep your information for a reasonable period after your last visit to our website, taking into account factors such as legal requirements, accounting needs, and our ongoing business interests.</p>

                    <h2>Your Choices</h2>
                    <p>You have the following choices regarding your personal information:</p>
                    <ul>
                        <li>You can access and update your personal information by contacting us at <a href="mailto:info@australianbestcasinohotels.com">info@australianbestcasinohotels.com</a></li>
                        <li>You can opt out of receiving marketing emails from us by clicking on the unsubscribe link in any marketing email we send you.</li>
                        <li>You can request that we delete your personal information by contacting us at <a href="mailto:info@australianbestcasinohotels.com">info@australianbestcasinohotels.com</a></li>
                    </ul>

                    <h2>Security</h2>
                    <p>We take reasonable steps to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure, and we cannot guarantee the security of your information.</p>

                    <h2>Changes to this Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p>Email: <a href="mailto:info@australianbestcasinohotels.com">info@australianbestcasinohotels.com</a></p>

                    <h2>Additional Information for Users in Europe, USA, Australia, and Canada</h2>

                    <h3>Europe</h3>
                    <p>As a company registered in Belgium, we comply with the General Data Protection Regulation (GDPR) and other applicable European data protection laws. You can find more information about your rights under the GDPR here: <a href="https://gdpr.eu/" target="_blank">https://gdpr.eu/</a></p>

                    <h3>USA</h3>
                    <p>For users in the USA, we comply with the California Consumer Privacy Act (CCPA). You can find more information about your rights under the CCPA here: <a href="https://oag.ca.gov/privacy/ccpa" target="_blank">https://oag.ca.gov/privacy/ccpa</a></p>

                    <h3>Australia</h3>
                    <p>For users in Australia, we comply with the Privacy Act 1988. You can find more information about your rights under the Privacy Act here: <a href="https://www.oaic.gov.au/privacy/australian-privacy-law/" target="_blank">https://www.oaic.gov.au/privacy/australian-privacy-law/</a></p>

                    <h3>Canada</h3>
                    <p>For users in Canada, we comply with the Personal Information Protection and Electronic Documents Act (PIPEDA). You can find more information about your rights under PIPEDA here: <a href="https://www.priv.gc.ca/en/opc-actions-and-decisions/decisions/p85-042/p85-042_01/" target="_blank">https://www.priv.gc.ca/en/opc-actions-and-decisions/decisions/p85-042/p85-042_01/</a></p>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.policy
    &__title
        font-size: 52px
        font-weight: 700
        width: 100%
        text-align: center
        margin-bottom: 40px

    &__body
        font-size: 16px
        line-height: 28px
        padding: 40px 0
        p
            margin-bottom: 10px

        h3, h2
            margin-bottom: 20px

        ul
            padding-left: 40px
            margin-bottom: 10px

        li
            list-style-type: disc

        a
            color: $primary
</style>