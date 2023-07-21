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
    }
};