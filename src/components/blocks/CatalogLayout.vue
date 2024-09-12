<script setup>
import CatalogElement from './CatalogElement.vue';


const props = defineProps({
    title: {
        type: String,
        required: true
    },

    subtitle: {
        type: String,
        required: true
    },

    elementsData: {
        type: Array,
        required: true
    }
    
})
</script>

<template>
    <section class="catalog">
        <div class="container">
            <h2 class="catalog__title">{{ title }}</h2>
            <div class="catalog__subtitle">{{ subtitle }}</div>

            <div class="catalog__wrapper" >
                <CatalogElement
                    v-for="(item, index) in elementsData" :key="index" 
                    :elementData="item"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.catalog
    padding: 80px 0
    
    &__title
        font-size: 32px
        line-height: 40px
        margin-bottom: 25px
        font-weight: 700
        color: #232323
        text-transform: uppercase
        text-align: center

    &__subtitle
        margin: 0 auto 40px auto
        max-width: 700px
        font-family: Montserrat
        font-size: 18px
        color: #939aa4
        text-align: center

    &__wrapper
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
        gap: 20px
        justify-items: center

        @media (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)

        @media (max-width: 576px)
            grid-template-columns: 1fr
</style>