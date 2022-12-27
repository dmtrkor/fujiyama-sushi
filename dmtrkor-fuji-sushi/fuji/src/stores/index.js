import { defineStore } from 'pinia'
import axios from "axios";
import Swal from 'sweetalert2'
const url = "https://639b47bf31877e43d6883cb2.mockapi.io/"
export const useCartStore = defineStore("cart", {
        state: () => {
            return {
                products: [],
                cartItems: []
            }
        },
        getters: {

            countCartItems() {
                return this.cartItems.length;
            },
            getCartItems() {
                return this.cartItems;
            }
        },
        actions: {
             async getProducts() {
                const res = await  axios.get(url + 'pizza')
                 this.products = res.data
                 console.log(this.products)
            },
            async getGrille() {
                const res = await  axios.get(url + 'grille')
                 this.products = res.data
                 console.log(this.products)
            },
            async getSushi() {
                const res = await  axios.get(url + 'sushi')
                 this.products = res.data
                 console.log(this.products)
            },
            addToCart(item) {
                let index = this.cartItems.findIndex(product => product.id === item.id);
                if(index !== -1) {
                    this.products[index].quantity += 1;
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Додано до кошика',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }else {
                    item.quantity = 1;
                    this.cartItems.push(item);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Додано до кошика',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            },
            removeFromCart(cartItem) {
                this.cartItems = this.cartItems.filter(product => product.id !== cartItem.id);

            }


        },
    }
)