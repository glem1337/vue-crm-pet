<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          v-model.trim="email"
          id="email"
          type="text"
          :class="{
            invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email)
          }"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid"
          >Поле Email не должно быть пустым</small
        >
        <small
          v-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid"
          >Введите корректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          v-model.trim="password"
          id="password"
          type="password"
          :class="{
            invalid:
              $v.password.$dirty &&
              (!$v.password.required || !$v.password.minLength)
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Введите пароль</small
        >
        <small
          v-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
        >
          Пароль должен быть не меньше
          {{ $v.password.$params.minLength.min }} символов. Сейчас он
          {{ password.length }}
        </small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="name"
          id="name"
          type="text"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required
          }"
        />
        <label for="name">Имя</label>
        <small
          v-if="$v.name.$dirty && !$v.name.required"
          class="helper-text invalid"
          >Введите ваше имя</small
        >
      </div>
      <p>
        <label>
          <input v-model="agree" type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
      <small
        v-if="$v.agree.$dirty && !$v.agree.checked"
        class="helper-text invalid"
        >Нужно согласиться с правилами</small
      >
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { minLength: minLength(6), required },
    name: { required },
    agree: { checked: val => val }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (error) {}
    }
  }
};
</script>
