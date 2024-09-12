<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import ContactForm from '../components/blocks/ContactForm.vue';
import ScrollToTop from '../components/ScrollToTop.vue';

</script>

<template>
    <ScrollToTop />
    <Header />
    <main class="main">
        <Promo 
            title="Contact Us"
            text="Home > Contact Us"
            imgUrl="/contact/contacts.webp"
        />

        <section class="contact">
            <div class="container">
                <div class="contact__wrapper">
                    <ContactForm />
                    <div class="contact__info">
                        <h2>Quick Contact</h2>
                        <p>If you have any questions simply use the following contact details.</p>
                        <div class="contact__info-email">
                            <div class="email-icon">
                                <img src="/icons/mail.png" alt="mail">
                            </div>
                            <div>
                                <div class="email-title">EMAIL:</div>
                                <a href="mailto:info@australianbestcasinohotels.com" class="email-text">info@australianbestcasinohotels.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.contact
    padding: 80px 0

    &__wrapper
        display: flex
        justify-content: space-between
        
        @media (max-width: 768px)
            flex-direction: column
            justify-content: center

    &__info
        padding: 30px
        border: 1px solid #dee2e6

        h2
            font-size: 24px
            line-height: 28px
            margin-bottom: 15px
            font-weight: 600
            color: #232323
            margin-bottom: 10px
        
        p
            line-height: 24px
            margin-bottom: 24px
            font-size: 16px
            font-weight: 400
            color: #6f6f6f

        &-email
            display: flex
            align-items: center
            gap: 20px
    
.email-icon
    border: 1px solid #dee2e6
    width: 80px
    padding: 0 5px
    display: flex
    justify-content: center
    align-items: center

    @media (max-width: 526px)
        display: none

    img
        width: 100%
        height: 100%
        object-fit: contain

.email-title
    font-weight: 700

.email-text
    font-size: 18px

    @media (max-width: 768px)
        font-size: 14px
</style>