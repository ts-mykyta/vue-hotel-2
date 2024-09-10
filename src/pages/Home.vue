<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';

const dataObj = [
    {
        "imgUrl": "/home/elements-of-byron.jpg",
        "elemTitle": "Elements of Byron",
        "elemText": "Elements of Byron Resort & Spa features 193 private villas dotted amidst 50 acres of absolute beachfront paradise. The modern Australian beach architecture and interiors are inspired by Mother Nature and this exceptional Byron Bay beachside location, where every luxury awaits. There are four different accommodation types, each with unique and defining features and décor. Colour schemes and textures have been chosen to reflect the varying native ecologies outside your villa: Dunal, Rainforest, Eucalypt and Wetlands.",
        "elemLink": "https://elementsofbyron.com.au",
    },
    {
        "imgUrl": "/home/the-langham-gold-coast.jpg",
        "elemTitle": "The Langham, Gold Coast",
        "elemText": "Bringing serene sophistication and coastal charm to the Gold Coast, The Langham is the newest, absolute beachfront luxury hotel to arrive in Australia’s holiday capital in more than 30 years. Three breathtaking, statuesque towers located between Surfer's Paradise and Broadbeach, are home to the first Langham hotel in Queensland, The Langham Gold Coast and Jewel Residences, managed by Langham. With over 330 rooms available, each present a stunning panorama view of the Pacific Ocean or the Gold Coast Hinterland. Enjoy some of Australia's finest seafood, meats and poultry in a buffet dining experience you won't forget at Akoya.",
        "elemLink": "https://www.langhamhotels.com/en/the-langham/gold-coast/",
    },
    {
        "imgUrl": "/home/mayfair-hotel-exterior.jpg",
        "elemTitle": "Mayfair Hotel",
        "elemText": "Since 2015, the Mayfair Hotel has set a new standard for luxury accommodation in Adelaide, offering a five-star bespoke experience like no other. The Mayfair boasts an unmatched location in the heart of the city, breathing new life into the iconic heritage-listed Colonial Mutual Life (CML) Building. The Mayfair’s 170 elegant rooms feature hand-crafted South Australian furnishings, custom-made beds and premium hotel facilities. The Mayfair has quickly become Adelaide’s favourite place to meet, stay, entertain and be entertained.",
        "elemLink": "https://www.mayfairhotel.com.au/",
    },
]
</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Discover Australia!" 
            text="Welcome to Australia! This incredible country is full of breathtaking natural wonders, vibrant cities, and exciting experiences just waiting to be discovered. At Auhotelsbest, we’re here to help you make the most of your Australian adventure. From the best hotels to must-see attractions and hidden gems, we provide all the information you need for an unforgettable holiday. Let us be your guide to exploring the beauty and excitement of Australia!"
            imgUrl="/promo/home_promo.jpg"
            specialClasses="promo--home"
        />

        <Catalog
            :elementsData="dataObj"
            title="Top Hotels in Australia"
        />
    </main>
    <Footer />
</template>

<style scoped></style>