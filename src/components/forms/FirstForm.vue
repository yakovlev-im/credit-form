<script setup lang="ts">

const schema = [
  {
    $formkit: 'number',
    name: 'amount',
    label: 'Сумма',
    validation: 'required'
  },
  {
    $formkit: 'range',
    name: 'amount',
    min: '1',
  },
  {
    $formkit: 'number',
    name: 'deadline',
    label: 'Срок',
    validation: 'required'
  },
  {
    $formkit: 'range',
    name: 'deadline',
    min: '1',
    max: '7'
  },
  {
    $formkit: 'number',
    name: 'income',
    label: 'Среднемесячный доход',
    validation: 'required'
  },
]

</script>

<template>
  <FormKitSchema :schema="schema" />
</template>
