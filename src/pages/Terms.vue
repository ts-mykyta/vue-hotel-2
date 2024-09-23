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
            title="Terms & Conditions"
            text="Home > Terms & Conditions"
        />

        <section class="policy">
            <div class="container">
                <div class="policy__body">
                    <p>Welcome to the Hotelsbestresorts website ("Website")! These Terms and Conditions ("Terms") govern your use of the Website, which provides comparisons and reviews of hotels primarily in Europe, USA, Australia, and Canada. Please read these Terms carefully before accessing or using the Website. By accessing or using the Website, you agree to be bound by these Terms.</p>

                    <h2>Information Only</h2>
                    <p>This Website is for informational purposes only. We do not sell any hotels or other travel-related products or services. Links on the Website to third-party websites are provided solely as a convenience to you and are not an endorsement by Hotelsbestresorts of those websites or their content. You acknowledge and agree that you use these links at your own risk and that Hotelsbestresorts is not responsible for the content or availability of any third-party website.</p>

                    <h2>User Conduct</h2>
                    <p>You agree to use the Website in a lawful and responsible manner and in accordance with these Terms. You agree not to:</p>
                    <ul>
                        <li>Use the Website for any illegal or unauthorized purpose, including but not limited to, posting any content that is defamatory, obscene, threatening, or hateful.</li>
                        <li>Interfere with or disrupt the Website or its servers or networks.</li>
                        <li>Attempt to gain unauthorized access to any portion of the Website or any other accounts or systems connected to the Website.</li>
                        <li>Violate any applicable laws or regulations.</li>
                    </ul>

                    <h2>Intellectual Property Rights</h2>
                    <p>The content and materials on this Website, including without limitation, the text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the property of Hotelsbestresorts or its licensors and are protected by copyright and other intellectual property laws. You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any portion of the Website or its content without the prior written consent of Hotelsbestresorts.</p>

                    <h2>Disclaimer of Warranties</h2>
                    <p>The information provided on this Website is provided "as is" and "as available" without any representations or warranties, express or implied. Hotelsbestresorts makes no representations or warranties in relation to the accuracy, completeness, or reliability of the information on the Website. Hotelsbestresorts disclaims all warranties, express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                    <h2>Limitation of Liability</h2>
                    <p>To the fullest extent permitted by applicable law, Hotelsbestresorts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, damages for loss of profits, revenue, data, use, or other intangibles, whether arising out of or in connection with the use or performance of the Website, or from any information, content, materials, or services provided or available through the Website, even if Hotelsbestresorts has been advised of the possibility of such damages.</p>

                    <h2>Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless Hotelsbestresorts, its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the Website using your Internet account.</p>

                    <h2>Governing Law and Jurisdiction</h2>
                    <p>These Terms shall be governed by and construed in accordance with the applicable laws, without regard to its conflict of law principles. You agree that any legal action or proceeding arising out of or relating to these Terms or your use of the Website shall be brought exclusively in the local courts, and you hereby consent to the jurisdiction and venue of such courts.</p>

                    <h2>Changes to Terms</h2>
                    <p>Hotelsbestresorts reserves the right to modify or replace these Terms at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms or the Website, please contact us at <a href="mailto:info@hotelsbestresorts.com">info@hotelsbestresorts.com</a>.</p>
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