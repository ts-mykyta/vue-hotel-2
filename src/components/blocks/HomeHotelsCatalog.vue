<script setup>
const props = defineProps({
    elementsData: {
        type: Array,
        required: true
    }
    
})
</script>

<template>
    <section class="top">
        <div class="container">
            <h2 class="top__title">TOP HOTELS</h2>
            <div class="top__subtitle">BEST TRAVEL PACKAGES AVAILABLE</div>

            <div class="top__wrapper">
                <div 
                    class="hotel"
                    v-for="(item, index) in elementsData" :key="index"
                >
                    <div class="hotel__img">
                        <a :href="item.elemLink">
                            <img :src="item.imgUrl" :alt="item.elemTitle">
                        </a>
                    </div>
                    <div class="hotel__descr">
                        <a :href="item.elemLink">
                            <h3>{{ item.elemTitle }}</h3>
                        </a>
                        <p>{{ item.elemText }}</p>
                    </div>
                    <div class="hotel__btns">
                        <a :href="item.elemLink" class="hotel__btns-country">
                            {{ item.elemCountry }}
                        </a>
                        <a :href="item.elemLink">
                            Relax
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.top
    padding: 50px 0

    &__title
        text-align: center
        font-size: 32px
        line-height: 40px
        margin-bottom: 5px
        font-weight: 700

    &__subtitle
        text-align: center
        font-size: 18px
        color: #939aa4
        padding-top: 10px
        font-size: 16px
        line-height: 24px
        margin-bottom: 24px

    &__wrapper
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
        gap: 20px
        justify-items: center

        @media (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)

        @media (max-width: 576px)
            grid-template-columns: 1fr
        


.hotel
    max-width: 400px
    width: 100%

    &__img
        width: 100%
        height: 370px

        @media (max-width: 576px)
            height: 270px
        
        img
            width: 100%
            height: 100%
            object-fit: cover

    &__descr
        text-align: center
        font-size: 16px
        font-weight: 400
        color: #6f6f6f
        padding: 20px
        min-height: 160px
        border-left: 1px solid #eee
        border-right: 1px solid #eee

        a
            color: #232323

            &:hover
                color: $primary

        h3
            font-size: 24px
            line-height: 28px
            margin-bottom: 15px
            font-weight: 600

    &__btns
        display: flex
        align-items: center
        a
            display: flex
            justify-content: center
            align-items: center
            position: relative
            width: 50%
            border-bottom: 3px solid rgba(0, 0, 0, 0.1)
            display: inline-block
            font-size: 15px
            padding: 12px 15px
            text-align: center
            width: 50%
            color: #fff
            text-transform: uppercase
            font-weight: 600
            overflow: hidden

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
                opacity: .8
                &:after
                    left: 110%
            &:nth-child(1)
                background-color: $primary
            &:nth-child(2)
                background-color: #0e8e4c
                
</style>