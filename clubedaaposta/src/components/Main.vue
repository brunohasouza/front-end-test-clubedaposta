<template>
    <div id="clubedaaposta">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-10 col-lg-8 col-xl-6 offset-md-1 offset-lg-2 offset-xl-3">
                        <div class="betfair-container">
                            <div class="betfair-badge">
                                <img src="/static/betfair-badge.png" alt="" class="img-circle img-fluid">
                            </div>
                            <div class="betfair-text">
                                <p>Desafio Betfair Palpites Brasileirão 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="content-left">
                            <step-by-step></step-by-step>
                            <awards></awards>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3 offset-xl-1">
                        <div class="content-right">
                            <next-games></next-games>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <classification></classification>
        </footer>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import StepByStep from './step-by-step/StepByStep.vue'
import Awards from './awards/Awards.vue'
import NextGames from './next-games/NextGames.vue'
import Classification from './classification/Classification.vue'

export default {
    components: {
        StepByStep,
        Awards,
        NextGames,
        Classification
    }
  
}
</script>

<style src='../assets/css/main.css'></style>


