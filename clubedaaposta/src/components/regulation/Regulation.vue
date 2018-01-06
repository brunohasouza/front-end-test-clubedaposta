<template>
<div class="regulation-container">
    <div class="regulation-shadow" @click="$router.push({ name: 'home' })"></div>
    <div class="regulation-box">
        <div class="regulation-head">
            <router-link :to="{name: 'home'}" class="float-right">
                <img src="/static/close-modal.svg" class="pull-right" alt="" srcset="">
            </router-link>
            <p>Regulamento</p>
        </div>
        <div class="regulation">
            <p class="regulation-subtitle">Termos e Condições</p>
            <p class="regulation-text">Esperamos que você e todos os nossos fellas (nome carinhoso para os nossos usuários) tenham gostado das premiações que selecionamos por aqui. Entretanto, imaginamos também que você tenha algumas dúvidas, então vamos a elas:</p>
            <p class="regulation-text">Para quem serão dadas as premiações?</p>
            <p class="regulation-text">As premiações que você vê acima serão dadas para os 10 melhores classificados no ranking da Betfellows, considerando-se os jogos a partir da segunda rodada do Campeonato Brasileiro de 2017.<br>- Os clientes premiados só poderão receber o bônus caso já tenham efetuado pelo menos 1 depósito nas suas contas.</p>
            <p class="regulation-text">E como vocês calculam esse ranking?</p>
            <p class="regulation-text">Para calcular o ranking utilizamos alguns fatores que vão além da performance como palpiteiro de cada fella. Dê uma olhada nos critérios que consideramos na hora de definir o ranking de cada um.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style src="../../assets/css/regulation.css">

</style>


