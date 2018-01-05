<template>
<div class="awards-container">
    <div class="awards-title">
        <h1>Premiação</h1>
    </div>
    <div class="awards-podium">
        <div class="award" v-for="pod in podium" :key="pod.thumb">
            <div class="row">
                <div class="col-2">
                    <div class="podium">
                        <div class="podium-icon">
                            <img :src="returnSrc(pod.thumb)" alt="" srcset="">
                        </div>
                        <div class="podium-label" :class="{ 'multirow' : pod.label.length > 1}">
                            <p v-for="label in pod.label" :key="label">{{ label }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-2" v-for="(award, index) in pod.awards" :key="award.thumb">
                    <div class="award-element">
                        <span class="award-sum" v-if="index + 1 < pod.awards.length">+</span>
                        <div class="award-icon">
                            <span><img :src="returnSrc(award.thumb)" class="img-fluid" alt=""></span>
                        </div>
                        <div class="award-label">
                            <p>{{ award.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        returnSrc(thumb) {
            return `/static/awards/${thumb}`
        }
    },
    data() {
        return {
            podium: [
                { 
                    label: ['1º lugar'],
                    thumb: 'gold.png',
                    awards: [
                        { label: 'Playstation 4', thumb: 'ps4.png' },
                        { label: 'Fifa 17', thumb: 'fifa.png' },
                        { label: 'Curso avançado Clube da Aposta', thumb: 'course.png' },
                        { label: '6 meses Stake Toys', thumb: 'stakeToys.png' },
                        { label: 'Freebet de $200 na Betfair', thumb: 'freebet.png' }
                    ]
                },
                { 
                    label: ['2º lugar'],
                    thumb: 'silver.png',
                    awards: [
                        { label: 'Smart TV 32"', thumb: 'smarttv.png' },
                        { label: 'Curso avançado Clube da Aposta', thumb: 'course.png' },
                        { label: '6 meses Stake Toys', thumb: 'stakeToys.png' },
                        { label: 'Freebet de $100 na Betfair', thumb: 'freebet.png' }
                    ]
                },
                { 
                    label: ['3º ao', '5º lugar'],
                    thumb: 'bronze.png',
                    awards: [
                        { label: 'Camisa do seu time', thumb: 'team.png' },
                        { label: 'Cooler', thumb: 'cooler.png' },
                        { label: 'Curso avançado Clube da Aposta', thumb: 'course.png' },
                        { label: '6 meses Stake Toys', thumb: 'stakeToys.png' },
                        { label: 'Freebet de $50 na Betfair', thumb: 'freebet.png' }
                    ]
                },
                { 
                    label: ['6º ao', '10º lugar'],
                    thumb: 'metal.png',
                    awards: [
                        { label: 'Camisa do seu time', thumb: 'team.png' },
                        { label: 'Curso avançado Clube da Aposta', thumb: 'course.png' },
                        { label: '6 meses Stake Toys', thumb: 'stakeToys.png' },
                        { label: 'Freebet de $25 na Betfair', thumb: 'freebet.png' }
                    ]
                }
            ]
        }
    }
}
</script>

<style src="../../assets/css/awards.css">

</style>


