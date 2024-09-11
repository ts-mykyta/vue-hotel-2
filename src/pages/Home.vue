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

        
    </main>
    <Footer />
</template>

<style scoped></style>