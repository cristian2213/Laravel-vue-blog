<template>
  <button :type="typeBtn" :class="classStyles">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButtonLogin",
  props: {
    typeBtn: {
      type: String,
      required: true,
    },

    classStyles: {
      type: String,
      required: true,
    },
  },
};
</script>

