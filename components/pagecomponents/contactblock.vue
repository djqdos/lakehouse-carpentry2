<template>
        <div class="contactus page-max">
            <div class="formSection">
                <div class="formContainer" ref="formContainer">
                <ValidationObserver ref="form">
                    <form name="contact" netlify @submit.prevent="validateSubmit" ref="theform">                
                        <fieldset class="name">                    
                            <ValidationProvider name="name" rules="required" v-slot="{ errors }"  class="provider-container">
                                <input type="text" v-model="name" id="name" name="name" placeholder="Name" />
                                <div class="error">{{ errors[0] }}</div>
                            </ValidationProvider>
                        </fieldset>

                        <fieldset class="email">                    
                            
                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }"  class="provider-container">
                                    <input type="text" v-model="email" name="email" placeholder="Email" />
                                    <div class="error">{{ errors[0] }}</div>
                                </ValidationProvider>
                            
                        </fieldset>

                        <fieldset class="tel">  
                            
                                <ValidationProvider name="tel" rules="numeric" v-slot="{ errors }" class="provider-container">
                                    <input type="tel" v-model="telephone" id="telephone" name="telephone" placeholder="Telephone Number" />
                                    <div class="error">{{ errors[0] }}</div>
                                </ValidationProvider>
                            
                        </fieldset>

                        <fieldset class="message">                    

                                <ValidationProvider name="message" rules="required" v-slot="{ errors }" class="provider-container">
                                    <textarea id="message" v-model="message" name="message" placeholder="Message"></textarea>
                                    <div class="error">{{ errors[0] }}</div>
                                </ValidationProvider>

                        </fieldset>

                        <fieldset class="submit">
                            <input type="submit" class="submit" value="Submit" />
                        </fieldset>                
                    </form>
                </ValidationObserver>
                </div>
                <div class="thankyou" ref="thankyou" v-html="$md.render(block.thankyoutext)">
                </div>
            </div>
            <div class="other">
                <div class="extra-info" v-for="(info, index) in block.extrainfo" :key="index">
                    <h4>{{ info.title }}</h4>
                    <p>
                        {{ info.text}}
                    </p>
                </div>
            </div>
        </div>    
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    name: "contactblock",
    props: {
        block: Object
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
            telephone: ''
        }
    },
    methods: {
        animateThankyou() {
                    const formContainer = this.$refs.formContainer;
                    const thankyou = this.$refs.thankyou;
                    const formSection = document.querySelector(".formSection");
                    const height = this.$refs.formContainer.clientHeight;
                    formSection.style.height = height + "px";                                        
                    thankyou.style.height = height + "px";
                    const tl = this.$anime.timeline({
                        loop: false
                    });

                    // remove form
                    tl.add({
                        targets: '.formContainer',
                        opacity: [1,0],
                        easing: "easeInOutQuad",
                        duration: 1000,
                        complete: function() {
                            document.querySelector(".formContainer").style.display = "none";
                        }
                    });

                    tl.add({
                        targets: '.thankyou',
                        opacity: [0,1],
                        easing: "easeInOutQuad",
                        duration: 1000,
                        begin: function() {
                            document.querySelector(".thankyou").style.display = "grid";
                        }                        
                    })
        },
        validateSubmit(e) {
            e.preventDefault();           

            this.$refs.form.validate().then(success => {
                if(!success) {
                    return;
                }

                let myForm = this.$refs.theform;                
                let formData = new FormData(myForm);
                const urlData = new URLSearchParams(formData).toString();
                fetch('/', {
                    method: "POST",
                    headers: { "Content-Type" : "application/x-www-form-urlencoded"},
                    body: urlData
                }).then(() => {
                    this.animateThankyou();
                }) 
            })
        }
    },
    components: {
        ValidationProvider,
        ValidationObserver
    }
}
</script>

<style scoped lang="scss">
    .contactus {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1em;
        margin-top: 1em;
        form {
            display: grid;            
            gap: .5em;
            grid-template-areas: "name message"
                                 "email message"
                                 "tel message"
                                 "submit submit"
        }

        input, textarea {
            padding: 1em;
            width: 100%;
            height: 100%;
            position: relative;

            border: 0;
            border-bottom: 1px solid black;
            
        }

        textarea {
            height: 100%;
        }

        fieldset.name { grid-area: name; }
        fieldset.email { grid-area: email; }
        fieldset.tel { grid-area: tel; }
        fieldset.message { grid-area: message; }
        fieldset.submit { grid-area: submit; place-items: center; }

        fieldset {
            border: 0;
        }

        input[type="submit"] {
            display: block;
            width: auto;
        }


        .provider-container {
            position: relative;
        }

        .error {
            color: red;
            font-size: .7em;

        }

        .thankyou {
            display: none;
            opacity: 0;
            place-items: center;
        }
    }

    @media screen and (max-width: 768px) { 
        .contactus {
            grid-template-columns: 1fr;            

            form {
                display: block;                
            }

            input, label {
                display: block;
                width: 100%;
            }

            input {
                padding: 1em;
                margin-bottom: 1em;
            }

            textarea {
                width: 100%;
                padding: 1em;
            }
        }
    }
</style>