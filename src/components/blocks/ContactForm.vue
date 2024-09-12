<script setup></script>

<template>
<form action="" class="form">
    <h2>Send Message Us</h2>
    <input type="text" name="" id="" placeholder="Your Name">
    <input type="email" name="" id="" placeholder="Your Email">
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message..."></textarea>
    <button type="submit">Submit</button>
</form>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.form
    background-color: #f7f9fb
    padding: 30px
    width: 50%

    @media (max-width: 768px)
        width: 100%
        margin-bottom: 30px

    h2
        font-size: 24px
        line-height: 28px
        margin-bottom: 15px
        font-weight: 600
    
    input, textarea
        width: 100%
        padding: 10px 20px
        font-family: sans-serif
        height: 50px
        margin-bottom: 20px
        outline: none
        border: 1px solid #e1e6eb
        font-size: 14px
        height: 40px
        line-height: 20px
        transition: transition

        &:hover
            border-color: silver

    textarea
        height: 100px
        resize: none

    button
        height: 50px
        width: 100%
        cursor: pointer
        background-color: #21ab64
        position: relative
        z-index: 1
        overflow: hidden
        vertical-align: middle
        color: #fff
        padding: 10px 20px
        display: inline-block
        outline: 0
        cursor: pointer
        outline: 0
        border-width: 0
        border-style: solid
        border-color: transparent
        line-height: 1.42857
        border-radius: 3px
        font-weight: 600
        text-align: center
        white-space: pre
        font-size: 18px

        &:after
            background-color: #fff
            content: ""
            height: 100%
            left: -10%
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
        
</style>