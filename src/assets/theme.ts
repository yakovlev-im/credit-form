// src: https://formkit.com/guides/create-a-tailwind-theme

// TODO: add dark theme

const textClassification = {
    label: 'block mb-1 font-medium formkit-invalid:text-red-500',
    inner: 'mb-1 focus-within:border-blue-500 formkit-invalid:border-red-500',
    input: 'w-full border-gray-300 border-2 rounded-lg placeholder-gray-400'
}
const boxClassification = {
    wrapper: 'flex items-center cursor-pointer',
    legend: 'formkit-invalid:text-red-500',
    help: 'mb-1',
    input: 'border-gray-400 mr-2 focus:ring-1 transition duration-200',
    label: 'mt-1'
}
const buttonClassification = {
    wrapper: 'mt-7 mb-1',
    input: 'bg-primary text-white py-2 px-5 rounded-lg'
}

// the global key will apply to all inputs
export default {
    global: {
        outer: 'mb-5 formkit-disabled:opacity-50',
        help: 'text-sm text-gray-500',
        messages: 'mt-1',
        message: 'text-red-500 mb-1 text-sm'
    },
    button: buttonClassification,
    color: {
        ...textClassification,
        input: 'w-16 h-8 cursor-pointer border-2 border-gray-300 rounded-lg p-1'
    },
    date: textClassification,
    'datetime-local': textClassification,
    checkbox: boxClassification,
    email: textClassification,
    file: {
        label: textClassification.label,
        inner: 'cursor-pointer',
        noFiles: 'hidden',
        fileItem: 'block flex text-gray-700 text-sm mb-1',
        fileRemove: 'ml-auto text-blue-500',
        input:
            'text-gray-500 text-sm mb-1 file:mr-2 file:rounded-lg file:border-solid file:border-gray-300 file:border-2 file:bg-white'
    },
    month: textClassification,
    number: textClassification,
    password: textClassification,
    radio: boxClassification,
    range: {
        label: textClassification.label,
        input: 'w-full'
    },
    search: textClassification,
    select: textClassification,
    submit: buttonClassification,
    tel: textClassification,
    text: textClassification,
    textarea: {
        ...textClassification,
        input:
            'block w-full h-24 border-gray-300 border-2 rounded-lg placeholder-gray-400'
    },
    time: textClassification,
    url: textClassification,
    week: textClassification
}
