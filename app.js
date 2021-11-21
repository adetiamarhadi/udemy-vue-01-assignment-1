const app = Vue.createApp({
    data() {
        return {
            name: 'Adetia Marhadi',
            age: 22,
            randomNumber: Math.floor(Math.random() * 2),
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
        }
    },
    methods: {
        getRandomNumber() {
            return Math.floor(Math.random() * 2);
        }
    }
});

app.mount('#assignment');