<script setup>
import { useRoute } from 'vue-router';
import { ref, watchEffect} from 'vue';

import PopupComponent from './PopupComponent.vue';

// Popup
const visible = ref(false);

function showPopup() {
  visible.value = true; // Показываем попап
}

function closePopup() {
  visible.value = false; // Скрываем попап
}

// Menu
const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function toggleSubMenu() {
    const subMenu = document.querySelector(".header__menu-sub")
    subMenu.classList.toggle("header__menu-sub--active")
}

watchEffect(() => {
  if (isMenuActive.value) {
    document.querySelector(".overlay").classList.add('overlay--active');
  } else {
    document.querySelector(".overlay").classList.remove('overlay--active');
  }
});
</script>

<template>
    <header :class="['header', { 'header--active': isMenuActive }]">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/" class="header__logo">
                    <img src="/logo.png" alt="logo">
                    <span>australiahotelscasino</span>
                </router-link>

                <nav class="header__menu">
                    <ul class="header__menu-main">
                        <li>
                            <router-link to="/" class="header__menu-logo">
                                <img src="/logo.png" alt="logo">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="header__menu-link">
                                <span>Home</span>
                            </router-link> 
                        </li>
                        <li @click="toggleSubMenu">
                            <router-link 
                                to="/" 
                                class="header__menu-link header__menu-link--sub"
                            >
                                <span>Destinations</span>
                            </router-link> 

                            <ul class="header__menu-sub">
                                <li>
                                    <router-link to="/united-states">
                                        <span>United States</span>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/new-zealand">
                                        <span>New Zealand</span>
                                    </router-link>  
                                </li>
                                <li>
                                    <router-link to="/netherlands">
                                        <span>Netherlands</span>
                                    </router-link> 
                                </li> 
                                <li>
                                    <router-link to="/canada">
                                        <span>Canada</span>
                                    </router-link>  
                                </li>
                                <li>
                                    <router-link to="/france">
                                        <span>France</span>
                                    </router-link>
                                </li>  
                                <li>
                                    <router-link to="/australia">
                                        <span>Australia</span>
                                    </router-link> 
                                </li> 
                            </ul>
                        </li>
                        <li>
                            <router-link to="/contact" class="header__menu-link">
                                <span>Contact Us</span>
                            </router-link>
                        </li>
                        <li>
                            <button @click="showPopup" class="header__menu-btn">Sign Up</button>
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

        <PopupComponent :visible="visible" @close="closePopup" />
    </header>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.header
    padding: 10px 0
    position: fixed
    top: 0
    width: 100%
    background: #fff
    z-index: 5

    &__wrapper
        display: flex
        justify-content: space-between
        align-items: center


    &__logo
        max-width: 50px
        display: flex
        align-items: center
        gap: 10px

        span
            font-weight: 900
            font-family: "Sarabun"
            color: #4E4B84
            font-size: 18px
            font-family: sans-serif

            @media (max-width: 1024px)
                font-size: 16px

        img
            width: 100%
            height: 100%
            object-fit: cover

    &__menu
        z-index: 7
        &-logo
            display: none

        &-main
            display: flex
            align-items: center
            gap: 24px

            li
                position: relative
                text-transform: uppercase
                font-weight: 600
                font-size: 15px

                &:hover .header__menu-sub 
                    opacity: 1
                    visibility: visible
                    

        &-sub
            position: absolute
            display: flex
            flex-direction: column
            top: 45px
            background-color: #fff
            border-top: 2px solid $primary
            padding: 10px 0
            width: 220px
            z-index: 3
            transition: $transition
            opacity: 0
            visibility: hidden
            
            li
                width: 100%
                transition: $transition
                
                a
                    color: #505050
                    display: block
                    font-size: 14px
                    padding: 8px 20px
                    text-transform: capitalize
                    transition: all 0.15s linear
                    font-weight: 500
                    font-family: Montserrat, sans-serif

                &:hover
                    background: lightgrey
                    a
                        color: $primary

        &-link
            padding: 30px 0       

        &-btn
            border-radius: 0
            font-size: 15px
            padding: 10px 15px
            cursor: pointer
            font-weight: 600
            background-color: #2f21ab
            border: none
            color: #fff
            font-weight: 700
            transition: all .2 linear

            &:hover
                background-color: $primary

    &__burger
        width: 20px
        height: 16px
        display: none
        flex-direction: column
        gap: 5px
        cursor: pointer
        z-index: 7

        span
            display: block
            width: 100%
            height: 2px
            background: #666
            border-radius: 1px
            transition: $transition


@media (max-width: 768px)
    .header
        &__menu
            position: fixed
            top: 0
            left: -300px
            background: #fff
            width: 280px
            display: block
            overflow-y: scroll
            height: 100vh
            transition: $transition
            
            &-logo
                display: block
                max-width: 140px
                padding: 30px 0 30px 10px

                img
                    width: 100%
                    height: 100%
                    object-fit: cover

            &-main
                flex-direction: column
                justify-content: start
                align-items: start
                gap: 0

                li
                    width: 100%
                    height: 100%
                    border-bottom: 1px solid #e9e9e9
                    padding: 15px

                    &:first-child
                        padding: 15px 0 15px 10px

                    &:last-child
                        border-bottom: none

            &-sub
                position: relative
                top: 10px
                background: #f6f6f6
                width: 100%
                transition: $transition
                display: none
                visibility: visible
                opacity: 1

                li
                    border: none

                &--active
                    display: block

        &__burger
            display: flex


        &--active
            .header__burger
                span:nth-child(1)
                    transform: rotate(45deg) translate(6px, 6px)

                span:nth-child(2)
                    position: relative
                    transform: translateX(-300px)
                    opacity: 0

                span:nth-child(3)
                    transform: rotate(-45deg) translate(4px, -4px)
            
            .header__menu
                left: 0


        
    
</style>