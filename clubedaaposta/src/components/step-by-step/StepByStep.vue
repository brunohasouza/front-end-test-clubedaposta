<template>
<div class="step-container">
    <div class="row">
        <div class="col-4 col-sm-3">
            <div class="step-flip">
                <img src="/static/flip.png" alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-8 col-sm-9">
            <div class="row">
                <div class="col-12">
                    <div class="step-text">
                        <p>{{ stepText }}</p>
                    </div>
                    <div class="step-text-box">
                        <div class="row">
                            <div class="col-4">
                                <div class="step-title">
                                    <p>Passo a Passo</p>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="step-subtext">
                                    <p>Pronto <strong>{{ firstname }}</strong>! Você está participando do Desafio, veja abaixo a classificação.'</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="step-box">
                <div class="step-title">
                    <p>Passo a Passo</p>
                </div>
                <div class="step-subtext">
                    <p>Pronto <strong>{{ firstname }}</strong>! Você está participando do Desafio, veja abaixo a classificação.'</p>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="step-button">
                <router-link :to="{ name: 'regulation' }" class="step-rules-btn">Leia o Regulamento</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        firstname: function() {
            return this.$store.state.user.firstname
        }
    },
    
    data() {
        return {
            stepText: 'O Brasileirão 2017 chegou e se você acompanha o maior campeonato do Brasil, não deixe de dar os seus palpites e concorrer a diversos prêmios!',
            stepSubtext: 'Pronto <strong>Edegar</strong>! Você está participando do Desafio, veja abaixo a classificação.'
        }
    }
}
</script>

<style src="../../assets/css/step.css">

</style>


