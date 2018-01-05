<template>
<div class="games-container">
    <div class="games-title">
        <h1>Próximos Jogos</h1>
    </div>
    <div class="games-list">
        <div class="row">
            <div class="col-10 col-sm-12 offset-1 offset-sm-0" v-for="el in 5">
                <div class="games-element">
                    <div class="game-date">
                        <span class="game-date-icon">
                            <img src="/static/icons/calendar.svg" class="img-fluid" alt="" srcset="">
                        </span>
                        <span class="game-date-box">{{ game.day }} {{ game.date }} - {{ game.hour }}</span>
                    </div>
                    <div class="game-box">
                        <div class="game-team game-team1">
                            <div class="game-team-badge">
                                <img :src="team1Badge" alt="" class="img-fluid" srcset="">
                            </div>
                            <div class="game-crowd progress" :style="returnBackground(game.team1)">
                                <div 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    :style="returnStyle(game.team1)" 
                                    :aria-valuenow="game.team1.crowd" 
                                    aria-valuemin="0" aria-valuemax="100"><span :style="returnColor(game.team1.color)">{{ game.team1.crowd }}%</span></div>
                            </div>
                        </div>
                        <div class="game-team game-draw">
                            <div class="game-draw-score">
                                <span class="game-team-score">
                                    {{ game.draw.team1 }}
                                </span>
                                <span class="game-draw-vs">
                                    X
                                </span>
                                <span class="game-team-score">
                                    {{ game.draw.team2 }}
                                </span>
                            </div>
                            <div class="game-crowd progress" :style="returnBackground(game.draw)">
                                <div 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    :style="returnStyle(game.draw)" 
                                    :aria-valuenow="game.draw.crowd" 
                                    aria-valuemin="0" aria-valuemax="100"><span :style="returnColor(game.draw.color)">{{ game.draw.crowd }}%</span></div>
                            </div>                            
                        </div>
                        <div class="game-team game-team2">
                            <div class="game-team-badge">
                                <img :src="team2Badge" alt="" class="img-fluid" srcset="">
                            </div>
                            <div class="game-crowd progress" :style="returnBackground(game.team2)">
                                <div 
                                    class="progress-bar" 
                                    role="progressbar" 
                                    :style="returnStyle(game.team2)"
                                    :aria-valuenow="game.team2.crowd" 
                                    aria-valuemin="0" aria-valuemax="100"><span :style="returnColor(game.team2.color)">{{ game.team2.crowd }}%</span></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="game-more">
                        <button class="game-more-btn">Ver Mais</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        team2Badge: function() {
            return `/static/teams/${this.game.team2.badge}`
        },

        team1Badge: function() {
            return `/static/teams/${this.game.team1.badge}`
        }
    },

    methods: {
        returnStyle(team) {
            return { 
                'width': `${team.crowd}%`,
                'background-color': team.foreground
            }
        },

        returnBackground(team) {
            return {
                'background-color': team.background
            }
        },

        returnColor(team) {
            return {
                'color': team.color
            }
        }
    },

    data() {
        return {
            game: {
                day: 'Sábado',
                date:'18/11/2017',
                hour:'13h30',
                team1: {
                    badge: 'arsenal-badge.png',
                    crowd: 8,
                    background: '#B50208',
                    foreground: '#EF0107',
                    color: '#FFFFFF'
                },
                team2: {
                    badge: 'tottenham-badge.png',
                    crowd: 74,
                    background: '#001851',
                    foreground: '#2249A3',
                    color: '#FFFFFF'
                },
                draw: {
                    team1: 0,
                    team2: 0,
                    crowd: 8,
                    background: '#707070',
                    foreground: '#313131',
                    color: '#FFFFFF'
                }
            }
        }
    }
}
</script>

<style src="../../assets/css/nextGames.css">

</style>
