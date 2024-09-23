<script setup>
function getCurrentYear() {
    return new Date().getFullYear();
}
</script>

<template>
    <footer class="footer" style="">
        <div class="footer__wrapper">
            <div class="container">
                <div class="footer__mail">
                    <a href="mailto:info@hotelsbestresorts.com">info@hotelsbestresorts.com</a>
                    <a href="tel:+61396509223">Phone +6.139.6509.223</a>
                    <p>Address:367 Collins St, Melbourne VIC 3000</p>
                </div>

                <div class="footer__nav">
                    <ul>
                        <li>
                            <router-link to="/privacy" class="header__logo">
                                <span>Privacy Policy</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/terms" class="header__logo">
                                <span>Terms & Conditions</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/cookies" class="header__logo">
                                <span>Cookies Policy</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="footer__copyright">
            <div class="container">
                <span>Hotelsbestresorts.com - All Rights Reserved © {{ getCurrentYear() }}</span>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.footer
    color: #b0b0b0

    &__wrapper
        padding: 80px 0 80px 0
        background: url('/footer-banner.jpg') bottom center / cover no-repeat
        font-size: 14px
        line-height: 22px

        .container
            display: flex
            justify-content: center
            gap: 40px

    &__mail
        a
            display: block
    
    &__nav
        ul
            display: flex
            flex-direction: column
            gap: 10px


    &__copyright
        background: #000
        padding: 25px 0
        font-size: 14px
        color: #b0b0b0


@media (max-width: 768px)
    .footer
        &__wrapper
            .container
                flex-direction: column
        
        &__copyright
            text-align: center

</style>