export function validateEmail(email) {
    const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!validationRegex.test(email)) {
        return {
            type: "error",
            field: "email",
            message: "E-mail is niet geldig",
        };
    } else {
        return {
            type: "valid",
        };
    }
}

export function validateName(name) {
    const validationRegex = /^[a-zA-ZàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚäöüßÄÖÜąćęłńóśźżĄĆĘŁŃÓŚŹŻZáéíñóúüÁÉÍÑÓÚÜĂÂÎȘȚăâîșțäöåÄÖÅZæøåÆØÅ-\s]*$/;

    if (!validationRegex.test(name)) {
        return {
            type: "error",
            field: "name",
            message: "Naam kan alleen uit letters bestaan",
        };
    } else if (name.length > 50) {
        return {
            type: "error",
            field: "name",
            message: "Naam kan niet langer zijn dan 50 tekens",
        };
    } else {
        return {
            type: "valid",
        };
    }
}

export function validatePhone(phone) {
    const validationRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!validationRegex.test(phone)) {
        return {
            type: "error",
            field: "phone",
            message: "Alleen geldig telefoon nummer aub",
        };
    } else if (phone.length > 30) {
        return {
            type: "error",
            field: "phone",
            message: "Telefoon kan niet langer zijn dan 30 tekens",
        };
    } else {
        return {
            type: "valid",
        };
    }
}
