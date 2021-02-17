<template>
  <section class="section section-shaped section-lg my-0">
    <!-- main background -->
    <main-background></main-background>

    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <base-alert
            v-if="error.show"
            type="danger"
            icon="ni ni-support-16"
            dismissible
          >
            <span slot="text"><strong>Danger!</strong>{{ error.message }}</span>
          </base-alert>

          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <h1 class="login-title">Login</h1>
              </div>
            </template>

            <template>
              <form @submit.prevent="handlerSubmit" role="form">
                <base-input
                  :valid="loginInvalid.email.error"
                  :error="loginInvalid.email.message"
                  @keyup="loadValueEmail"
                  :value="login.email"
                  name="email"
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>

                <base-input
                  :valid="loginInvalid.password.error"
                  :error="loginInvalid.password.message"
                  :value="login.password"
                  @keyup="loadValuePass"
                  name="password"
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>

                <base-checkbox> Remember me </base-checkbox>

                <div class="text-center">
                  <base-button-login
                    type-btn="submit"
                    class-styles="btn my-4 btn-primary"
                    >Send</base-button-login
                  >
                </div>
              </form>
            </template>
          </card>

          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },

      loginInvalid: {
        email: {
          error: null,
          message: "",
          validated: null,
        },
        password: {
          error: null,
          message: "",
          validated: null,
        },
      },

      error: {
        show: false,
        message: "",
      },

      emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      passRegex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/,
    };
  },

  methods: {
    loadValueEmail(valueEmail) {
      this.login.email = valueEmail.target.value.trim();
      this.validateFields(valueEmail);
    },

    loadValuePass(valuePass) {
      this.login.password = valuePass.target.value.trim();
      this.validateFields(valuePass);
    },

    validateFields(valueEmail) {
      //* validate each field with regex
      /* 
        Contraseña incorrecta: debe tener entre 6 y 16 caracteres, al menos un digito, una minúscula, una mayuscula. 
      */

      switch (valueEmail.target.name) {
        case "email":
          if (!this.emailRegex.test(this.login.email)) {
            // show error
            this.loginInvalid.email.error = false;
            this.loginInvalid.email.message = "Please write a valid email";
            this.loginInvalid.email.validated = false;
          } else {
            // clean bug
            this.loginInvalid.email.error = true;
            this.loginInvalid.email.message = "";
            this.loginInvalid.email.validated = true;
          }
          break;

        default:
          if (!this.passRegex.test(this.login.password)) {
            // show error
            this.loginInvalid.password.error = false;
            this.loginInvalid.password.message =
              "Incorrect password: it must have between 6 and 16 characters, at least one digit, one lower case, one upper case";
            this.loginInvalid.password.validated = false;
          } else {
            // clean bug
            this.loginInvalid.password.error = true;
            this.loginInvalid.password.message = "";
            this.loginInvalid.password.validated = true;
          }
          break;
      }
    },

    validateAll() {
      if (
        !this.loginInvalid.password.validated &&
        !this.loginInvalid.email.validated
      ) {
        this.error.show = true;
        this.error.message = "All fields are required";
        setTimeout(() => {
          this.error.show = false;
        }, 3000);
        return;
      }
    },

    handlerSubmit() {
      this.validateAll();
      // go past data to the store
      this.$store.dispatch("setToken", this.login);
    },
  },
};
</script>

<style scoped>
.section {
  height: auto;
  min-height: 100vh;
}

.login-title {
  color: #8898aa;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
