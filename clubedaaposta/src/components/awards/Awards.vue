<template>
<div class="awards-container">
    <div class="awards-title">
        <h1>Premiação</h1>
    </div>
    <div class="awards-list">

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
                    label: '1º lugar',
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
                    label: '2º lugar',
                    thumb: 'silver.png',
                    awards: [
                        { label: 'Smart TV 32"', thumb: 'smarttv.png' },
                        { label: 'Curso avançado Clube da Aposta', thumb: 'course.png' },
                        { label: '6 meses Stake Toys', thumb: 'stakeToys.png' },
                        { label: 'Freebet de $100 na Betfair', thumb: 'freebet.png' }
                    ]
                },
                { 
                    label: '3º ao 5º lugar',
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
                    label: '6º ao 10º lugar',
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


