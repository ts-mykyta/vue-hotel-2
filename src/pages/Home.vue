<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import HomeHotelsCatalog from '../components/blocks/HomeHotelsCatalog.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';

const dataObj = [
    {
        "imgUrl": "/home/hotel.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/us",
        "elemCountry": "USA"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/us",
        "elemCountry": "USA"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/us",
        "elemCountry": "USA"
    },
    {
        "imgUrl": "/home/hotel.webp",
        "elemTitle": "Nemacolin",
        "elemText": "Discover rustic charm and refined elegance at Nemacolin, a picturesque retreat nestled amidst Pennsylvania's scenic countryside.",
        "elemLink": "/us",
        "elemCountry": "USA"
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
        

    

</style>