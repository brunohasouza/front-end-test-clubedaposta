<template>
    <div class="container">
        <div class="classification-container">
            <div class="row">
                <div class="col-12">
                    <div class="classification-title">
                        <h1>Classificação</h1>
                        <h2>veja o ranking do desafio</h2>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="classification-position">
                        <div class="position-text">
                            <p>Sua Posição</p>
                        </div>
                        <div class="position-ribbon">
                            <img src="/static/ribbon.png" alt="">
                        </div>
                        <div class="position-number">
                            <p>{{ `0${yourRank}`.slice(-2) }}º</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="classification-ranking">
                        <div class="row">
                            <div class="col-12">
                                <div class="ranking-text">
                                    <p>Ranking Geral</p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="ranking" v-for="(n, index) in 5">
                                    <div class="ranking-box ranking-photo">
                                        <img :src="photo" alt="" srcset="">
                                        <span class="ranking-position">{{ index + 1 }}</span>
                                    </div>
                                    <div class="ranking-box ranking-name">
                                        <p>{{ firstname }} {{ lastname }}</p>
                                    </div>
                                    <div class="ranking-box ranking-infos">
                                        <div class="ranking-money">
                                            <p>$ {{ money.toFixed(2) }}</p>
                                        </div>
                                        <div class="ranking-check">
                                            <img src="/static/check.png" alt="" srcset="">
                                            <span>{{ check }}</span>
                                        </div>
                                        <div class="ranking-like">
                                            <img src="/static/like.png" alt="" srcset="">
                                            <span>{{ like }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="ranking" v-for="(n, index) in 5">
                                    <div class="ranking-box ranking-photo">
                                        <img :src="photo" alt="" srcset="">
                                        <span class="ranking-position">{{ index + 6 }}</span>
                                    </div>
                                    <div class="ranking-box ranking-name">
                                        <p>{{ firstname }} {{ lastname }}</p>
                                    </div>
                                    <div class="ranking-box ranking-infos">
                                        <div class="ranking-money">
                                            <p>$ {{ money.toFixed(2) }}</p>
                                        </div>
                                        <div class="ranking-check">
                                            <img src="/static/check.png" alt="" srcset="">
                                            <span>{{ check }}</span>
                                        </div>
                                        <div class="ranking-like">
                                            <img src="/static/like.png" alt="" srcset="">
                                            <span>{{ like }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([ 'photo', 'money', 'check', 'firstname', 'lastname', 'like', 'yourRank' ]),
    },

    data() {
        return {
            rank:{
                photo: 'user-default.png',
                name: 'Edegar Junior',
                money: 10000,
                check: 500,
                like: 54
            }
        }
    }
}
</script>

<style src="../../assets/css/classification.css">

</style>


