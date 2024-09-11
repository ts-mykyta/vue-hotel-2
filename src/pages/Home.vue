<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'

import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import HomeHotelsCatalog from '../components/blocks/HomeHotelsCatalog.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';

const breakpoints =  {
    320: {
        itemsToShow: 1,
        snapAlign: 'center', 
    },
    526: {
        itemsToShow: 1.7,
        snapAlign: 'center',
    },
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    928: {
        itemsToShow: 2.6,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 3.4,
        snapAlign: 'start',
    },
    1440: {
        itemsToShow: 5,
        snapAlign: 'start',
    }
}

const dataObj = [
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic1.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/united-states",
        "elemCountry": "USA"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic2.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/new-zealand",
        "elemCountry": "New Zealand"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic3.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/netherlands",
        "elemCountry": "Netherlands"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic4.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/canada",
        "elemCountry": "Canada"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic5.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/france",
        "elemCountry": "France"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "imgForSlider": "/home/slider/pic3.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/australia",
        "elemCountry": "Australia"
    },
]
</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Discover Australia's Premier Casino Hotels" 
            text="Explore Luxury Accommodations, World-Class Gaming, and Unforgettable Experience"
            imgUrl="/home/promo.jpg"
            specialClasses="promo--home"
        />

        <HomeHotelsCatalog 
            :elementsData="dataObj"
        />

        <section class="adventure">
            <div class="container">
                <h4>Experience the Excellence</h4>
                <h2>Explore our hotel reviews and start your adventure</h2>
                <p>Your satisfaction is our utmost priority. We deeply value your feedback and use it to enhance our services and offerings. Our consistently high ratings and hotel reviews demonstrate our dedication to delivering outstanding experiences.</p>
            </div>
        </section>

        <section class="popular">
            <div class="container">
                <h2 class="popular__title">Popular Destinations</h2>
                <div class="popular__subtitle">CHOOSE YOUR NEXT DESTINATION</div>
            </div>

            <Carousel 
                :itemsToShow="5"
                :autoplay="5000"
                :wrapAround="true"
                :autoplayTimeout="3000"
                :touchDrag="true"
                :pauseAutoplayOnHover="true"
                :breakpoints="breakpoints"
                :spacePadding="10"
            >
                <Slide v-for="(item, index) in dataObj" :key="index">
                    <div class="popular__item">
                        <div class="popular__item-img">
                            <img :src="item.imgForSlider" :alt="item.elemCountry">
                        </div>
                        <div class="popular__item-descr">
                            <div>| {{ item.elemCountry }}</div>
                            <li>
                                <router-link :to="item.elemLink">
                                    <span>View All Hotels</span>
                                </router-link>
                            </li>
                        </div>
                    </div>
                </slide>
            </carousel>
        </section>

    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"

.adventure
    position: relative
    background: url('/home/adventure.png') top center / cover no-repeat
    padding: 80px 0

    &:after
        content: ""
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: #000
        opacity: .5
        z-index: 1

    h4
        position: relative
        z-index: 2
        color: #fff
        font-size: 28px
        line-height: 35px
        margin-bottom: 20px
        font-weight: 700
        
    h2
        position: relative
        z-index: 2
        font-size: 50px
        color: #fff
        line-height: 60px
        margin-bottom: 25px
        font-weight: 700
        max-width: 570px

    p
        position: relative
        z-index: 2
        color: #fff
        font-size: 18px
        line-height: 28px
        max-width: 570px
        

.popular
    padding: 80px 0
    overflow: hidden

    &__title
        font-size: 32px
        line-height: 40px
        margin-bottom: 15px
        font-weight: 700
        text-transform: uppercase

    &__subtitle
        margin-bottom: 30px
        font-size: 18px
        color: #939aa4

    &__item
        margin: 0 45px
        position: relative

        &-img
            overflow: hidden

            img
                width: 100%
                height: 100%
                object-fit: cover
                transition: transform 5s ease

        &-descr
            position: absolute
            z-index: 3
            bottom: 5px
            left: 0
            text-align: left
            padding: 20px 0 20px 40px
            background: rgba(0, 0, 0, .3)
            width: 100%
            color: #fff
            transition: $transition

            div
                font-weight: 700
                margin-bottom: 10px


        &:hover
            .popular__item-descr
                padding-bottom: 40px
            
            .popular__item-img img
                transform: scale(1.1)
                

</style>