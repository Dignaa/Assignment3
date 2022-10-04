Vue.createApp({
    data() {
        return {
            inputMessage: null,
            message: "",
            times:null
        }
    },
    methods: {
        getMessage(inputMessage, howMany){
            this.message=""

            if(howMany <0){
                this.message = "Must be a positive number, " + howMany + " is not valid."
            }

            for (let i = 0; i < howMany; i++) {
                this.message += inputMessage 
              }
        }
        
    }
}).mount("#app")