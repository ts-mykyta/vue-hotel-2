<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'

import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import HomeHotelsCatalog from '../components/blocks/HomeHotelsCatalog.vue';
import ScrollToTop from '../components/ScrollToTop.vue';

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
        "imgUrl": "/countries/australia/sea-change-beachfront-apartments.jpg",
        "imgForSlider": "/home/slider/australia.jpg",
        "elemTitle": "Sea Change Beachfront Apartments",
        "elemText": "Award winning 5 star apartments at Trinity Beach. Discover. Unwind. Indulge. On the doorstep of one of Australia's ...",
        "elemLink": "/australia",
        "elemCountry": "Australia"
    },
    {
        "imgUrl": "/countries/australia/coast-motel.jpg",
        "imgForSlider": "/home/slider/australia2.jpg",
        "elemTitle": "Coast Motel and Apartments",
        "elemText": "Stay on the beachfront & visit the McLaren Vale wineries just 10 minutes from the door of COAST Motel and Apartments.",
        "elemLink": "/australia",
        "elemCountry": "Australia"
    },
    {
        "imgUrl": "/countries/usa/atlantis-casino.jpg",
        "imgForSlider": "/home/slider/usa2.jpg",
        "elemTitle": "Atlantis Casino Resort & Spa",
        "elemText": "Nestled at the base of the Sierra Nevada, Atlantis Casino Resort Spa is proud to be recognized as a AAA ...",
        "elemLink": "/united-states",
        "elemCountry": "USA"
    },
    {
        "imgUrl": "/countries/canada/abbie-s-garden-bed-breakfast.jpg",
        "imgForSlider": "/home/slider/canada.jpg",
        "elemTitle": "Abbie's Garden Bed & Breakfast",
        "elemText": "Our suites are located in buildings outside the MAIN HOUSE, offering you ultimate guest privacy ...",
        "elemLink": "/canada",
        "elemCountry": "Canada"
    },
    {
        "imgUrl": "/countries/canada/waterfront-resort.jpg",
        "imgForSlider": "/home/slider/canada2.jpg",
        "elemTitle": "Summerland Waterfront Resort & Spa",
        "elemText": "Put rest and rejuvenation on your to-do list with a relaxing stay at the Summerland Waterfront Resort & Spa, set ...",
        "elemLink": "/canada",
        "elemCountry": "Canada"
    },
    {
        "imgUrl": "/countries/new-zealand/bayview-valley-lodge.jpg",
        "imgForSlider": "/home/slider/new-zeland.jpg",
        "elemTitle": "Bayview Valley Lodge Boutique",
        "elemText": "Bayview Valley Lodge, Boutique, Boutique Bed & Breakfast, 5 Star Accommodation in Whitianga ...",
        "elemLink": "/new-zealand",
        "elemCountry": "New Zealand"
    },  
]
</script>

<template>
    <ScrollToTop />
    <Header />
    <main class="main">
        <div id="searchWidget"><iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=4&tp1=ееее&tp2=345&lob=H&des=&wbi=&olc=000000&whf=4&hfc=&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H300FW400F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>
        <Promo 
            title="Discover Australia's Top Hotels." 
            text="Indulge In Luxurious Stays, Enjoy Premier Gaming, And Create Unforgettable Memories."
            imgUrl="/home/promo.jpeg"
            specialClasses="promo--home"
        />

        <HomeHotelsCatalog 
            :elementsData="dataObj"
        />

        <section class="adventure">
            <div class="container">
                <h4>Experience the Excellence</h4>
                <h2>Browse our hotel reviews and embark on your next advent</h2>
                <p>Your satisfaction is our top priority. We greatly value your feedback, using it to continually improve our services and offerings. Our consistently high ratings and positive hotel reviews reflect our commitment to providing exceptional experiences.</p>
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

        <section class="blog">
            <div class="container">
                <div class="blog__wrapper">
                    <h2 class="blog__title">Our reviews are written by authentic travelers who have experienced our tours firsthand.</h2>
                    <div class="blog__descr">
                        <p>We prioritize transparency in every aspect of our service. Our reviews offer detailed insights into the key moments, challenges, and overall experiences of our tours, giving you an honest view of what to expect.</p>
                        <p>All reviews are verified to ensure they come from real travelers who have taken part in our tours. This guarantees the integrity of our review system and ensures you receive trustworthy information.</p>
                    </div>
                    <div class="blog__img">
                        <img src="/home/blog1.jpg" alt="">
                    </div>
                    <div class="blog__img">
                        <img src="/home/blog2.jpeg" alt="">
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped lang="sass">
@import "../assets/styles/main"
#searchWidget
    position: absolute
    left: 50%
    transform: translateX(-50%)
    top: 350px
    width: 768px
    height: 300px
    z-index: 3

    @media (max-width: 768px)
        width: 526px
        height: 200px
        top: 8%

    @media (max-width: 576px)
        width: 100%
        height: 250px
        top: 400px
    
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
        height: 100%
        
        &-img
            overflow: hidden
            height: 100%

            img
                width: 100%
                height: 100%
                object-fit: cover
                transition: transform 5s ease

        &-descr
            position: absolute
            z-index: 3
            bottom: 0
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
                

.blog
    padding: 20px 0 40px 0
    &__wrapper
        display: grid
        grid-template-columns: repeat(2, 50%)
        grid-column-gap: 20px
        grid-row-gap: 10px

        @media (max-width: 768px)
            grid-template-columns: repeat(2, 1fr)
            grid-template-rows: repeat(3, 1fr)

    &__title
        grid-area: 1 / 1 / 2 / 2       
        font-size: 32px
        line-height: 40px
        margin-bottom: 25px
        font-weight: 700

        @media (max-width: 768px)
            grid-area: 1 / 1 / 2 / 3

    &__descr
        grid-area: 1 / 2 / 2 / 3
        display: flex
        justify-content: space-between
        gap: 20px
        font-size: 16px
        font-weight: 400
        color: #6f6f6f

        @media (max-width: 768px)
            grid-area: 2 / 1 / 3 / 3
            flex-direction: column

    &__img
        width: 100%
        img
            width: 100%
            height: 100%
            object-fit: cover

    &__img:nth-child(1)
        grid-area: 2 / 1 / 3 / 2

        @media (max-width: 768px)
            grid-area: 3 / 1 / 4 / 2

    &__img:nth-child(2)
        grid-area: 2 / 2 / 3 / 3

        @media (max-width: 768px)
            grid-area: 3 / 2 / 4 / 2
</style>