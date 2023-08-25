export const validatorConfig = {
    nick: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        },
        min: {
            message: "Nick должен состоять минимум из 2 символов",
            value: 2
        }
    },
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введен некорректно"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        isCapitalSymbol: {
            message: "Пароль должен содержать хотя бы одну заглавную букву"
        },
        isContainDigit: {
            message: "Пароль должен содержать хотя бы одно число"
        },
        min: {
            message: "Пароль должен состоять минимум из 8 символов",
            value: 8
        }
    },
    category: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    brand: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    model: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    price: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    type: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
    access: {
        isRequired: {
            message: "Поле обязательно для заполнения"
        }
    },
};