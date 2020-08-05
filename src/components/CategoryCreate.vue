<template>
  <div>
    <div class="page-subtitle">
      <h4>Создать</h4>
    </div>

    <form @submit.prevent="submitHandler">
      <div class="input-field">
        <input
          v-model.trim="title"
          id="title"
          type="text"
          :class="{
            invalid: $v.title.$dirty && !$v.title.required
          }"
        />
        <label for="title">Название</label>
        <span
          v-if="$v.title.$dirty && !$v.title.required"
          class="helper-text invalid"
          >Введите название категории</span
        >
      </div>

      <div class="input-field">
        <input
          v-model.number="limit"
          id="limit"
          type="number"
          :class="{
            invalid: $v.limit.$dirty && !$v.limit.required
          }"
        />
        <label for="limit">Лимит</label>
        <span
          v-if="$v.limit.$dirty && !$v.limit.minValue"
          class="helper-text invalid"
          >Минимальный лимит на затраты равен
          {{ $v.limit.$params.minValue.min | currency }}</span
        >
        <span
          v-if="$v.limit.$dirty && !$v.limit.required"
          class="helper-text invalid"
          >Введите лимит на затраты</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import M from "materialize-css";
import { required, minValue } from "vuelidate/lib/validators";

export default {
  name: "categoryCreate",
  data: () => ({
    title: "",
    limit: 100
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(100), required }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        const category = await this.$store.dispatch("createCategory", {
          title: this.title,
          limit: this.limit
        });

        this.title = "";
        this.limit = 100;
        this.$v.$reset();

        this.$message("Категория была создана");
        this.$emit("created", category);
      } catch (error) {}
    }
  },
  mounted() {
    M.updateTextFields();
  }
};
</script>
