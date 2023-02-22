<script setup lang="ts">
import { ref } from 'vue';

const schema = [
  {
    $el: 'h2',
    children: 'Телефон',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $formkit: 'tel',
    name: 'phone',
    label: 'Мобильный телефон'
  },
  {
    $el: 'h2',
    children: 'Персональные данные заявителя',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'text',
        name: 'lastname',
        label: 'Фамилия',
      },
      {
        $formkit: 'text',
        name: 'name',
        label: 'Имя',
      },
    ]
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'text',
        name: 'middlename',
        label: 'Отчество',
      },
      {
        $formkit: 'select',
        name: 'citizenship',
        label: 'Граждаство',
        options: [
          'Армения',
          'Таджикистан',
          'Казахстан',
          'Кыргыстан'
        ],
      },
    ]
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'select',
        name: 'gender',
        label: 'Пол',
        options: [
          'Муж.',
          'Жен.',
        ],
      },
      {
        $formkit: 'date',
        name: 'birthday',
        label: 'Дата рождения'
      },
    ]
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'text',
        name: 'birthplace',
        label: 'Место рождения'
      },
    ]
  },
  {
    $el: 'h2',
    children: 'Основной документ',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'select',
        name: 'document',
        label: 'Тип документа',
        options: [
          'Паспорт',
          'Иное',
        ],
      },
      {
        $formkit: 'number',
        name: 'pass-series',
        label: 'Серия'
      },
    ]
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'number',
        name: 'pass_number',
        label: 'Номер'
      },
      {
        $formkit: 'date',
        name: 'pass_issue_date',
        label: 'Дата выдачи'
      },
    ]
  },
  {
    $el: 'div',
    attrs: {
      class: 'double'
    },
    children: [
      {
        $formkit: 'number',
        name: 'pass_division_code',
        label: 'Код подразделения'
      },
      {
        $formkit: 'text',
        name: 'pass_who_issued',
        label: 'Кем выдан'
      }
    ]
  }
]

const data = ref({});

</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
