<script setup>
import { ref } from 'vue'

const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    specialClasses: {
        type: String,
        required: false
    }
})

const showTitle = ref(false)
const showText = ref(false)

setTimeout(() => {
    showTitle.value = true
    showText.value = true
}, 100)
</script>

<template>
    <section class="promo" :class="specialClasses" :style="{ backgroundImage: `url(${props.imgUrl})` }">
        <div class="container">
            <transition name="slide-fade">
                <h1 v-if="showTitle" class="promo__title">{{ title }}</h1>
            </transition>
            <transition name="slide-fade">
                <div v-if="showText" class="promo__descr">{{ text }}</div>
            </transition>
        </div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"
    
.promo
    height: 450px
    background-position: center center
    background-size: cover
    padding-top: 120px
    display: flex
    justify-content: center
    align-items: center
    

    &__title
        color: #fff
        font-size: 42px
        font-weight: 800
        margin-bottom: 10px
    
    &__descr
        color: #fff
        width: 100%
        max-width: 900px
        font-size: 18px
        font-weight: 400
        line-height: 30px
        padding: 0 10px
        text-align: center


.promo--home
    max-height: 650px
    display: block

    @media (max-width: 768px)
        height: 500px

    @media (max-width: 576px)
        height: 600px

    .promo__title
        color: #fff
        font-size: 52px
        font-weight: 700
        margin-bottom: 10px
        font-family: serif
        @media (max-width: 576px)
            font-size: 40px

    .promo__descr
        color: #fff
        width: 100%
        max-width: 900px
        font-size: 18px
        font-weight: 400
        line-height: 30px
        padding: 0 10px
        text-align: left


.slide-fade-enter-active, .slide-fade-leave-active
  transition: all 2.5s ease-out

.slide-fade-enter-from
  opacity: 0
  transform: translateX(-50px)

.slide-fade-enter-to
  opacity: 1
  transform: translateX(0)

.slide-fade-leave-from
  opacity: 1
  transform: translateX(0)

.slide-fade-leave-to
  opacity: 0
  transform: translateX(-50px)

@media (max-width: 420px)
    .promo
        &__title
            font-size: 30px
        
        &__descr
            font-size: 16px

</style>