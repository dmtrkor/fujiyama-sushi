
import { createRouter, createWebHistory } from 'vue-router'

import Grille from '../components/Products/Grille.vue'
import Sushi from '../components/Products/Sushi.vue'
import Pizza from '../components/Products/Pizza.vue'
import Drinks from '../components/Products/Drinks.vue'
import Card from '../components/Products/Card.vue'
import Sets from '../components/Products/Sets.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/card',
            component: Card,
            name: Card
        },
        {
            path: '/grille',
            component: Grille,
            name: Grille
        },
        {
            path: '/sushi',
            component: Sushi,
            name: Sushi
        },
        {
            path: '/pizza',
            component: Pizza,
            name: Pizza
        },
        {
            path: '/drinks',
            component: Drinks,
            name: Drinks
        },
        {
            path: '/sets',
            component: Sets,
            name: Sets
        },


    ]
})
export default router