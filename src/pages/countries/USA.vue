<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/home/hotel.webp",
        "hotelName": "Nemacolin",
        "starsCount": 4,
        "hotelLink": "some-link",
        "hotelDescr": "Nestled amidst the rolling hills of Pennsylvania, Nemacolin offers a charming escape where luxury meets nature. As a premier hotel and casino, Nemacolin invites guests to unwind in opulent accommodations while enjoying a range of thrilling gaming experiences. Discover a perfect harmony of relaxation and excitement in this picturesque countryside casino retreat."
    },
    {
        "imgUrl": "/home/hotel.webp",
        "hotelName": "Nemacolin",
        "starsCount": 4,
        "hotelLink": "some-link",
        "hotelDescr": "Nestled amidst the rolling hills of Pennsylvania, Nemacolin offers a charming escape where luxury meets nature. As a premier hotel and casino, Nemacolin invites guests to unwind in opulent accommodations while enjoying a range of thrilling gaming experiences. Discover a perfect harmony of relaxation and excitement in this picturesque countryside casino retreat."
    },
    {
        "imgUrl": "/home/hotel.webp",
        "hotelName": "Nemacolin",
        "starsCount": 4,
        "hotelLink": "some-link",
        "hotelDescr": "Nestled amidst the rolling hills of Pennsylvania, Nemacolin offers a charming escape where luxury meets nature. As a premier hotel and casino, Nemacolin invites guests to unwind in opulent accommodations while enjoying a range of thrilling gaming experiences. Discover a perfect harmony of relaxation and excitement in this picturesque countryside casino retreat."
    },
    {
        "imgUrl": "/home/hotel.webp",
        "hotelName": "Nemacolin",
        "starsCount": 4,
        "hotelLink": "some-link",
        "hotelDescr": "Nestled amidst the rolling hills of Pennsylvania, Nemacolin offers a charming escape where luxury meets nature. As a premier hotel and casino, Nemacolin invites guests to unwind in opulent accommodations while enjoying a range of thrilling gaming experiences. Discover a perfect harmony of relaxation and excitement in this picturesque countryside casino retreat."
    },
]

</script>

<template>
    <ScrollToTop />
    <Header />

    <Promo
        imgUrl="/countries/usa.jpg"
        title="USA HOTELS"
        text="Home > USA"
    />

    <CatalogLayout 
        title="Popular USA hotels"
        subtitle="Experience Unparalleled Comfort and Luxury: Discover the Most Popular Hotels Across the USA."
        :elementsData="hotelsData"
    />

    <Footer />

</template>

<style scoped></style>