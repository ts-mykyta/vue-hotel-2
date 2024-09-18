<script setup>
import Header from '../../components/HeaderLayout.vue';
import Footer from '../../components/FooterLayout.vue';
import Promo from '../../components/blocks/PromoLayout.vue';
import CatalogLayout from '../../components/blocks/CatalogLayout.vue';
import ScrollToTop from '../../components/ScrollToTop.vue';


const hotelsData = [
    {
        "imgUrl": "/countries/australia/sea-change-beachfront-apartments.jpg",
        "hotelName": "Sea Change Beachfront Apartments",
        "starsCount": 4,
        "hotelDescr": "Award winning 5 star apartments at Trinity Beach. Discover. Unwind. Indulge. On the doorstep of one of Australia's most beautiful beaches are twenty three expansive apartments, all overlooking the magnificent Coral Sea. Generous indoor spaces, thoughtful decor, well equipped kitchens, marble bathrooms and a gleaming pool with views for days. Come and discover your Sea Change.",
        "hotelLink": "https://www.seachangecairns.com/"
    },
    {
        "imgUrl": "/countries/australia/coast-motel.jpg",
        "hotelName": "Coast Motel and Apartments",
        "starsCount": 4,
        "hotelDescr": "Stay on the beachfront & visit the McLaren Vale wineries just 10 minutes from the door of COAST Motel and Apartments. Set upon the picturesque coast of Adelaide beach town Port Noarlunga South adjacent to the Onkaparinga River mouth, COAST Motel and Apartments offers 15 spacious self-contained beachfront studio apartments showcasing the best of what the Fleurieu Peninsula offers. Snorkel the Port Noarlunga reef, kayak in the Onkaparinga River, enjoy stunning sunsets and an abundance of local food and wine in nearby McLaren Vale.",
        "hotelLink": "https://www.coastmotelandapartments.com.au"
    },
    {
        "imgUrl": "/countries/australia/eagle-view-escape.jpg",
        "hotelName": "Eagle View Escape",
        "starsCount": 4,
        "hotelDescr": "Eagle View Escape is set high above Lake Lyell and our retreat is strictly couples only creating an ambiance of romance, relaxation and absolute privacy that you'll be hard pressed to find anywhere else. In keeping with the relaxed atmosphere, we have a scrumptious array of self prepare hampers. A unique place where time stands still to appreciate a sense of escapism. A promise of romance, unrivaled quality and most importantly, memories to last a lifetime.",
        "hotelLink": "https://www.eagleview.com.au"
    },
    {
        "imgUrl": "/countries/australia/quest-south-perth-foreshore.jpg",
        "hotelName": "Quest South Perth Foreshore",
        "starsCount": 4,
        "hotelDescr": "Quest South Perth Foreshore brings a stunning new accommodation experience for both the business traveller and leisure traveller to South Perth. Located in the prime position of South Perth, with easy and fast access to the South Perth Esplanade, Quest South Perth Foreshore boasts unparalleled views over the Swan River and on looking to the Perth City Centre.",
        "hotelLink": "https://www.questapartments.com.au/"
    },
    {
        "imgUrl": "/countries/australia/glenayr-farm.jpg",
        "hotelName": "Glenayr Farm",
        "starsCount": 4,
        "hotelDescr": "Glenayr Farm is the perfect place to disconnect to reconnect. Set on a 320 acre working sheep property of secluded quintessential Australian landscape that makes you feel like you’re the only people on earth, yet has close proximity to Mudgee where you can enjoy world renowned wineries and food, outdoor adventure, a great Australian town with stunning heritage streetscapes and museums. Fall in love with the unrivalled views of the sunsets and incredible vistas over one of the most beautiful areas in the region.",
        "hotelLink": "https://www.glenayrfarm.com.au/"
    },
    {
        "imgUrl": "/countries/australia/berrara-beach-chalets.jpg",
        "hotelName": "Berrara Beach Chalets",
        "starsCount": 4,
        "hotelDescr": "With family and friends, stressed, looking for a weekend escape? Summer or winter Berrara is the place to be. Pamper your partner with a romantic dinner before retiring to the two person spa with the glass roof. Sip your champagne in the warm spa while gazing at the stars through the glass ceiling. After the spa curl up in front of the gas log fire and enjoy the outlook, the only noise, the rumbling of a breaking surf. Alternatively sit on the balcony in front of the magnificent ocean and national park views and read a book or take a walk and meet the kangaroos. Leave the phone and computer at home and just enjoy luxury and nature.",
        "hotelLink": "https://www.berrarachalets.com.au/"
    },
]

</script>

<template>
    <ScrollToTop />
    <Header />

    <Promo
        imgUrl="/countries/usa.jpg"
        title="Australia HOTELS"
        text="Home > Australia"
    />

    <CatalogLayout 
        title="Australia's Best Hotels"
        subtitle="Experience Unmatched Comfort and Luxury at the Most Popular Destinations."
        :elementsData="hotelsData"
    />

    <Footer />

</template>

<style scoped></style>