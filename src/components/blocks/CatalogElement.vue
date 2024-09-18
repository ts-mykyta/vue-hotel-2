<script setup>
const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="catalog__element">
    <div class="catalog__element-top">
        <div class="catalog__element-img">
            <img :src="elementData.imgUrl" :alt="elementData.hotelName">
        </div>
        <div class="catalog__element-book">
            <h3>{{ elementData.hotelName }}</h3>
            <div class="catalog__element-stars">
                <img src="/icons/star-full.svg" alt="star">
                <img src="/icons/star-full.svg" alt="star">
                <img src="/icons/star-full.svg" alt="star">
                <img src="/icons/star-full.svg" alt="star">
                <img src="/icons/star-full.svg" alt="star">
            </div>
            <a :href="elementData.hotelLink ? elementData.hotelLink : '#'" class="catalog__element-btn">
                Book Now
            </a>
        </div>
    </div>
    <div class="catalog__element-bot">{{ elementData.hotelDescr }}</div>
</div>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.catalog__element
    max-width: 320px
    height: 100%
    transition: $transition
    border-left: 1px solid #e1e1e1
    border-right: 1px solid #e1e1e1
    border-bottom: 1px solid #e1e1e1
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px

    &-top
        position: relative
    &-img
        width: 100%
        height: 290px
        transition: $transition
        img
            width: 100%
            height: 100%
            object-fit: cover
            transition: $transition

    &-book
        position: absolute
        width: 100%
        bottom: 0
        padding: 10px
        background-color: rgba(0, 0, 0, 0.6)
        color: #fff

        h3
            font-size: 24px
            line-height: 28px
            font-weight: 600
    
    &-stars
        display: flex
        align-items: center
        margin-bottom: 10px
        img
            width: 20px
            height: 18px

    &-btn
        position: relative
        overflow: hidden
        border-radius: 100px
        border: 2px solid #fff
        padding: 10px 20px
        display: inline-block
        cursor: pointer
        line-height: 1.42857
        font-weight: 600
        text-align: center
        white-space: pre

        &:after
            background-color: #fff
            content: ""
            height: 100%
            left: 0
            opacity: 0.3
            position: absolute
            top: 0
            transform: skewX(25deg)
            transition: all 0.5s ease 0s
            width: 25px
            z-index: -1
            filter: blur(5px)

        &:hover
            background-color: $primary
            color: #fff
            border-color: $primary
            &:after
                left: 110%
                z-index: 9

    &-bot
        display: block
        min-height: 230px
        box-sizing: border-box
        padding: 10px
        font-size: 16px
        font-weight: 400
        color: #6f6f6f


    &:hover
        .catalog__element-img
            border-radius: 8px
            img
                border-radius: 8px
                box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.7)
                transition: all 0.5s

        .catalog__element-book
            border-radius: 0 0 8px 8px
</style>