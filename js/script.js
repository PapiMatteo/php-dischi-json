const { createApp } = Vue;

createApp({
    data() {
        return {
            discList : [],
            apiUrl   : 'server.php'
        }
    },
    created() {
        axios.get(this.urlApi).then((resp) => {
            this.discList = resp.data;
        })
    }

}).mount('#app')