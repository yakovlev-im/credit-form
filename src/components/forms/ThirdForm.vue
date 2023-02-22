<script setup lang="ts">
import { ref } from 'vue';

const schema = [
  {
    $el: 'h2',
    children: 'Дополнительные документы, удостоверяющие личность (предоставляются в случае, когда предоставление второго документа по данной категории кредитов предусмотрено Банком)  ',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $formkit: 'number',
    name: 'am_social_card-number',
    label: 'Номер социальной карты Армении'
  },
  {
    $el: 'h2',
    children: 'Почта',
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
        $formkit: 'email',
        name: 'email',
        label: 'Email',
      },
    ]
  },
  {
    $el: 'h2',
    children: 'Сведения о запрашиваемом кредите',
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
        $formkit: 'number',
        name: 'amount',
        label: 'Сумма'
      },
      {
        $formkit: 'text',
        name: 'currency',
        label: 'Валюта',
        disabled: true,
        value: 'RUB'
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
        name: 'get_method',
        label: 'Способ получения кредита',
        options: ['На счет электронных денежных средств', 'Наличными через кассу']
      },
      {
        $formkit: 'number',
        name: 'deadline',
        label: 'Срок (месяцы)',
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
        name: 'target',
        label: 'Цель кредитования',
        options: ['Покупка авто', 'Иное']
      },
      {
        $formkit: 'text',
        name: 'target-other',
        label: 'Другая причина',
        if: '$target == Иное'
      },
    ]
  },
  {
    $el: 'h2',
    children: 'Сведения о кредитной истории',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $formkit: 'checkbox',
    name: 'credit_history',
    label: 'Имеете ли Вы кредитную историю',
  },
  {
    $formkit: 'checkbox',
    name: 'credit_overdue_debts',
    label: 'Имеете ли Вы действующую просроченную задолженность',
  },
  {
    $formkit: 'checkbox',
    name: 'balance_more3',
    label: 'Остаток действующих беззалоговых кредитов превышает 3 млн. драм',
  },
  {
    $formkit: 'checkbox',
    name: 'unibank_history',
    label: 'Имеете ли Вы кредитную историю в Юнибанке',
  },
  {
    $formkit: 'checkbox',
    name: 'balance_more1.5',
    label: 'Остаток беззалоговых кредитов в Юнибанке превышает 1.5 млн. драм',
  },
  {
    $el: 'h2',
    children: 'Согласие на  обработку данных',
    attrs: {
      class: 'text-xl font-medium mb-5 text-primary'
    }
  },
  {
    $formkit: 'checkbox',
    name: 'agreement',
    label: 'Я подтверждаю своё согласие на обработку моих персональных данных',
    sectionsSchema: {
      label: {
        children: [
          'Я подтверждаю своё согласие ',
          {
            $el: 'a',
            attrs: {
              href: 'https://unistream.ru',
              class: 'text-primary',
              target: '_blank'
            },
            children: 'на обработку моих персональных данных'
          }
        ]
      },
    }
  },
]

const data = ref({});

</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
