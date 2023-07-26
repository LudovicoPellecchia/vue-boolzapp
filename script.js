const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contatti: [
                {
                    name: "Michele",
                    avatar: "./Immagini/avatar_1.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "./Immagini/avatar_2.jpg",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "./Immagini/avatar_3.jpg",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "./Immagini/avatar_4.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },

            ],

            filterConv:"",

            newTextMsg: "",

            currentItem: null,

            contactNames :[]

        }
    },

    methods: {
        onItemClick(singleItem) {
            this.currentItem = singleItem
        },

        newMessage() {     /* funzione che pusha dentro l'array del contatto selezionato i valori dell'input scritti dall'utente */
            this.currentItem.messages.push({
                date:"",
                message: this.newTextMsg,
                status: "sent"
            }
            );
        },

        emptyInput() {     /* funzione che svuota la barra input dopo aver inviato il messaggio  */
            this.newTextMsg = ""
        },

        answerMsg(){    /* funzione che imposta un timer di 1 secondo per avere una risposta automatica ai messaggi dell'utente */
            setTimeout(() => {
                this.currentItem.messages.push({
                    date: "",
                    message: "Sono d'accordo",
                    status: "received"
                })
            }, 1000)
        },

        filterContacts() { /* funzione che filtra la lista dei contatti */
            const filterText = this.filterConv.trim().toLowerCase(); 

            if (this.filterConv.trim().length > 0){
                return this.contatti.filter((item) => item.name.toLowerCase().includes(this.filterConv.trim()) && item.name.toLowerCase().startsWith(filterText))
            }
            return this.contatti
        }

    }


}).mount("#app")


