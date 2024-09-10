<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

watchEffect(() => {
  if (isMenuActive.value) {
    document.body.classList.add('body--hidden');
  } else {
    document.body.classList.remove('body--hidden');
  }
});
</script>

<template>
    <header :class="['header', { 'header--active': isMenuActive }]">
        <div class="container">
            <div class="header__wrapper">
                <nav class="header__menu">
                    <div class="header__logo">
                        <router-link to="/" class="header__menu-logo">
                            <img src="/logo.png" alt="logo">
                        </router-link>
                    </div>
                    <ul class="header__menu-main">
                        <li class="header__menu-link">
                            <router-link to="/" exact-active-class="header__menu-link--active">
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link header__menu-link--submenu">
                            <router-link to="/" exact-active-class="header__menu-link--active">
                                <span>Destinations</span>
                            </router-link>
                            <ul class="header__menu-submain">
                                <li>
                                    <router-link to="/united-state" exact-active-class="header__menu-link--active">
                                        <span>United States</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/new-zealand" exact-active-class="header__menu-link--active">
                                        <span>New Zealand</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/netherlands" exact-active-class="header__menu-link--active">
                                        <span>Netherlands</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/canada" exact-active-class="header__menu-link--active">
                                        <span>Canada</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/france" exact-active-class="header__menu-link--active">
                                        <span>France</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/australia" exact-active-class="header__menu-link--active">
                                        <span>Australia</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/contact" exact-active-class="header__menu-link--active">
                                <span>Contact Us</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <button>Sign up</button>
                        </li>
                    </ul>
                </nav>

                <div class="header__burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'


.header
    padding: 25px 0
    &__menu
        display: flex
        justify-content: space-between
        align-items: center

        &-main
            display: flex
            align-items: center
            gap: 20px
        
        &-submain
            position: absolute
            top: 45px
            padding-top: 20px
            width: 170px
            opacity: 0
            transition: $transition
            border-top: 2px solid $primary
            li
                display: block
                width: 100%
                padding: 5px 0 5px 10px
                font-weight: 400
                text-transform: none

                &:hover
                    background: lightgrey
                    span
                        color: $primary
                    
                

        &-link
            text-transform: uppercase
            font-weight: 700
            font-size: 15px

            &--submenu
                position: relative
                &:hover
                    .header__menu-submain
                        opacity: 1
    &__logo
        max-width: 160px
        img
            width: 100%
            height: 100%
            object-fit: cover
        
</style>