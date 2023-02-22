<script setup lang="ts">
import { ref, markRaw } from 'vue';

import FirstForm from '@/components/forms/FirstForm.vue';
import SecondForm from '@/components/forms/SecondForm.vue';
import ThirdForm from '@/components/forms/ThirdForm.vue';

const data = ref({});

</script>

<template>
  <FormKit type="form" :actions="false" v-model="data">

    <FormKit type="multi-step" tab-style="progress" name="CreditForm" :hide-progress-labels="true" :actions="true">

      <FormKit type="step" name="FirstForm" next-label="Продолжить">
        <FirstForm />
      </FormKit>

      <FormKit type="step" name="SecondForm" prev-label="Назад" next-label="Продолжить">
        <SecondForm />
      </FormKit>

      <FormKit type="step" valid-step-icon="submit" name="ThirdForm" prev-label="Назад">
        <ThirdForm />

        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>

    </FormKit>

  </FormKit>

  <details open>
    <summary>Form data</summary>
    <pre class="p-5 rounded-lg bg-gray-200">{{ data }}</pre>
  </details>
</template>
