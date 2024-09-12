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
            title="Cookies Policy"
            text="Home > Cookies Policy"
        />

        <section class="policy">
            <div class="container">
                <div class="policy__body">
                    <p>This Cookie Policy explains how Novanightstay ("we", "us", or "our") uses cookies and similar technologies on our website located at australianbestcasinohotels.com ("Website"). This policy explains what cookies are, how we use them, the choices you have regarding cookies, and how you can find more information.</p>

                    <h2>What are cookies?</h2>
                    <p>Cookies are small data files that a website stores on your device when you visit the website. These files typically contain information like your preferences, language settings, and browsing history. We use cookies to improve your experience on our Website by:</p>
                    <ul>
                        <li>Remembering your preferences and settings, so you don't have to re-enter them each time you visit.</li>
                        <li>Analyzing how you use our Website to help us improve its functionality and user experience.</li>
                        <li>Understanding and delivering relevant advertising to you.</li>
                    </ul>

                    <h2>What types of cookies do we use?</h2>
                    <p>We use the following types of cookies on our Website:</p>
                    <ul>
                        <li><strong>Essential cookies:</strong> These are necessary for the Website to function properly and cannot be disabled. They allow you to navigate the Website and use its essential features.</li>
                        <li><strong>Performance cookies:</strong> These cookies collect information about how you use our Website, such as the pages you visit and the links you click. We use this information to improve the Website's performance and user experience.</li>
                        <li><strong>Functionality cookies:</strong> These cookies allow us to remember your preferences and settings, such as your language preferences. They help us personalize your experience on the Website.</li>
                        <li><strong>Targeting/advertising cookies:</strong> These cookies are used to track your browsing activity across different websites and deliver targeted advertising. We may use third-party advertising companies to help us deliver these cookies.</li>
                    </ul>

                    <h2>Your cookie choices:</h2>
                    <p>You have several options regarding cookies:</p>
                    <ul>
                        <li><strong>Accept all cookies:</strong> You can accept all cookies by continuing to use our Website.</li>
                        <li><strong>Manage cookies:</strong> You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies altogether, or to block or delete cookies from specific websites. However, blocking or deleting cookies may limit your ability to use some features of our Website.</li>
                        <li><strong>Opt-out of targeted advertising:</strong> You can opt out of interest-based advertising from many advertising companies. Visit the websites of the Digital Advertising Alliance (DAA) at <a href="https://www.aboutads.info/choices/" target="_blank">https://www.aboutads.info/choices/</a> and the Network Advertising Initiative (NAI) at <a href="https://www.networkadvertising.org/choices/" target="_blank">https://www.networkadvertising.org/choices/</a> to learn more.</li>
                    </ul>

                    <h2>Changes to this Cookie Policy:</h2>
                    <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on our Website. You are advised to review this Cookie Policy periodically for any changes.</p>

                    <h2>Contact us:</h2>
                    <p>If you have any questions about this Cookie Policy, please contact us at <a href="mailto:info@australianbestcasinohotels.com">info@australianbestcasinohotels.com</a>.</p>
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