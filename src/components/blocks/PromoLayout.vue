<script setup>
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
</script>

<template>
    <section class="promo" :class="specialClasses" :style="{ backgroundImage: `url(${props.imgUrl})` }">
        <div class="container">
            <h1 class="promo__title">{{ title }}</h1>
            <div class="promo__descr">{{ text }}</div>
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
    height: 650px
    display: block

    .promo__title
        color: #fff
        font-size: 52px
        font-weight: 700
        margin-bottom: 10px
        font-family: serif

    .promo__descr
        color: #fff
        width: 100%
        max-width: 900px
        font-size: 18px
        font-weight: 400
        line-height: 30px
        padding: 0 10px
        text-align: left

@media (max-width: 420px)
    .promo
        &__title
            font-size: 30px
        
        &__descr
            font-size: 16px

</style>