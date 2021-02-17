<template>
  <section class="section section-shaped section-lg my-0">
    <!-- main background -->
    <main-background></main-background>

    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <base-alert
            v-if="error.show"
            type="warning"
            icon="ni ni-support-16"
            dismissible
          >
            <span slot="text"
              ><strong>¡Warning! </strong>{{ error.message }}</span
            >
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
                <h1 class="login-title">Register</h1>
              </div>
            </template>

            <template>
              <form @submit.prevent="handlerSubmit" role="form">
                <base-input
                  :valid="registerInvalid.name.error"
                  :error="registerInvalid.name.message"
                  @keyup="loadName"
                  :value="register.name"
                  name="name"
                  alternative
                  class="mb-3"
                  placeholder="Name"
                  addon-left-icon="ni ni-hat-3"
                >
                </base-input>
                <base-input
                  :valid="registerInvalid.email.error"
                  :error="registerInvalid.email.message"
                  @keyup="loadEmail"
                  :value="register.email"
                  name="email"
                  alternative
                  class="mb-3"
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                >
                </base-input>
                <base-input
                  :valid="registerInvalid.password.error"
                  :error="registerInvalid.password.message"
                  @keyup="loadPassword"
                  :value="register.password"
                  name="password"
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                >
                </base-input>
                <div class="text-muted font-italic">
                  <small
                    >password strength:
                    <span class="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <base-checkbox>
                  <span
                    >I agree with the
                    <a href="#">Privacy Policy</a>
                  </span>
                </base-checkbox>
                <div class="text-center">
                  <base-button-login
                    type-btn="submit"
                    class-styles="btn my-4 btn-primary"
                    >Create account</base-button-login
                  >
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
      },

      registerInvalid: {
        name: {
          error: null,
          message: "",
          validated: null,
        },
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
    loadName(event) {
      this.register.name = event.target.value.trim();
      this.validateFields(event);
    },

    loadEmail(event) {
      this.register.email = event.target.value.trim();
      this.validateFields(event);
    },

    loadPassword(event) {
      this.register.password = event.target.value.trim();
      this.validateFields(event);
    },

    validateFields(valueEmail) {
      //* validate each field with regex
      /* 
        Contraseña incorrecta: debe tener entre 6 y 16 caracteres, al menos un digito, una minúscula, una mayuscula. 
      */

      switch (valueEmail.target.name) {
        case "name":
          if (this.register.name === "" || this.register.name.length <= 3) {
            // show error
            this.registerInvalid.name.error = false;
            this.registerInvalid.name.message = "Please write a real name";
            this.registerInvalid.name.validated = false;
          } else {
            // clean bug
            this.registerInvalid.name.error = true;
            this.registerInvalid.name.message = "";
            this.registerInvalid.name.validated = true;
          }
          break;

        case "email":
          if (!this.emailRegex.test(this.register.email)) {
            // show error
            this.registerInvalid.email.error = false;
            this.registerInvalid.email.message = "Please write a valid email";
            this.registerInvalid.email.validated = false;
          } else {
            // clean bug
            this.registerInvalid.email.error = true;
            this.registerInvalid.email.message = "";
            this.registerInvalid.email.validated = true;
          }
          break;

        default:
          if (!this.passRegex.test(this.register.password)) {
            // show error
            this.registerInvalid.password.error = false;
            this.registerInvalid.password.message =
              "Incorrect password: it must have between 6 and 16 characters, at least one digit, one lower case, one upper case";
            this.registerInvalid.password.validated = false;
          } else {
            // clean bug
            this.registerInvalid.password.error = true;
            this.registerInvalid.password.message = "";
            this.registerInvalid.password.validated = true;
          }
          break;
      }
    },

    validateAll() {
      if (
        !this.registerInvalid.name.validated &&
        !this.registerInvalid.password.validated &&
        !this.registerInvalid.email.validated
      ) {
        this.error.show = true;
        this.error.message = "All fields are required";
        setTimeout(() => {
          this.error.show = false;
        }, 3000);
        return true;
      }

      if (!this.registerInvalid.name.validated) {
        return true;
      }

      if (!this.registerInvalid.password.validated) {
        return true;
      }

      if (!this.registerInvalid.email.validated) {
        return true;
      }

      return false;
    },

    async handlerSubmit() {
      const error = this.validateAll();
      if (!error) {
        try {
          await this.$store.dispatch("auth/registerUser", this.register);

          this.$router.push({ name: "login" });
        } catch (error) {
          console.log(error);
        }
      }
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
