<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
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
                  @input="loadValueEmail"
                  :value="login.email"
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
                  @input="loadValuePass"
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
        },
        password: {
          error: null,
          message: "",
        },
      },
    };
  },

  async created() {
    // const response = await this.axios({
    //   method: "post",
    //   url: "http://localhost:4000/api/auth",
    //   headers: { "Content-Type": "application/json" },
    //   data: {
    //     email: "admin@admin.com",
    //     password: "admin1",
    //   },
    // });
    // console.log(response.data);
  },

  methods: {
    loadValueEmail(valueEmail) {
      this.login.email = valueEmail;
    },

    loadValuePass(valuePass) {
      this.login.password = valuePass;
    },

    handlerSubmit() {
      this.validateFields();
      // go past data to the store
    },

    validateFields() {
      //* validate each field with regex
      /* 
        Contraseña incorrecta: debe tener entre 6 y 16 caracteres, al menos un digito, una minúscula, una mayuscula. 
      */
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const passRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;

      if (!emailRegex.test(this.login.email)) {
        // show error
        this.loginInvalid.email.error = false;
        this.loginInvalid.email.message = "Please write a valid email";
      } else {
        // clean bug
        this.loginInvalid.email.error = true;
        this.loginInvalid.email.message = "";
      }

      if (!passRegex.test(this.login.password)) {
        // show error
        this.loginInvalid.password.error = false;
        this.loginInvalid.password.message =
          "Incorrect password: it must have between 6 and 16 characters, at least one digit, one lower case, one upper case";
      } else {
        // clean bug
        this.loginInvalid.password.error = true;
        this.loginInvalid.password.message = "";
      }
    },
  },
};
</script>
<style scoped>
.section {
  height: 100vh;
}

.login-title {
  color: #8898aa;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
