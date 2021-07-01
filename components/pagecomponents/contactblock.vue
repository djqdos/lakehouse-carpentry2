<template>
    <div class="contact-container bg-gray-100">    
        <div class="page-max">
        <h2 v-if="block.heading" class="main-heading">{{ block.heading }}</h2>
        <client-only>
        <div class="contactusGrid">
            <div class="formSection">                                
                <div class="formContainer" ref="formContainer">
                <ValidationObserver ref="form">
                    <form name="contact" 
                          data-netlify="true" 
                          method="post"
                          data-netlify-honeypot="bot-field"
                          @submit.prevent="validateSubmit" 
                          ref="theform"                                                    
                          >
                            <div class="formGrid">
                                <div class="formInnerGrid">
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

                                </div>
                                <div class="grid grid-cols-1 gap-4">
                                    <fieldset class="message">                    
                                            <ValidationProvider name="message" rules="required" v-slot="{ errors }" class="provider-container">
                                                <textarea id="message" v-model="message" name="message" placeholder="Message"></textarea>
                                                <div class="error">{{ errors[0] }}</div>
                                            </ValidationProvider>
                                    </fieldset>
                                </div>
                                
                                
                            </div>

                            <fieldset class="submit">
                                    <input type="submit" class="submit" value="Submit" />
                            </fieldset>            
                    </form>
                </ValidationObserver>
                </div>                
                <div class="thankyou hidden" ref="thankyou" v-html="$md.render(block.thankyoutext)">
                </div>
            </div>
            <div class="other">
                <div class="extra-info cms-header" v-for="(info, index) in block.extrainfo" :key="index">
                    <h4>{{ info.title }}</h4>
                    <p>
                        {{ info.text}}
                    </p>
                </div>
            </div>
        </div>   
    </client-only>
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
    .contactusGrid {
        @apply grid grid-cols-1 md:grid-cols-12 gap-4
    }

    .formSection {
         @apply md:col-span-9;
    }

    .other {
        @apply md:col-span-3;
    }

    input, textarea {
        @apply p-4 w-full border-b-2 border-accent;
    }

    input[type="submit"] {
        @apply w-auto;
    }

    textarea {
        @apply h-full;
    }

    .formGrid {
        @apply grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-row;
    }

    .formInnerGrid {
        @apply grid grid-cols-1 gap-4;
    }

    fieldset {
        @apply pb-4;
    }

</style>