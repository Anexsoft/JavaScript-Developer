class UserForm {
    constructor() {
        this.name;
        this.username;
        this.country;
        this.message;
        this.terms;
        this.bulletin;
        this.preferences;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#user-form'),
        elements = form.elements,
        user = new UserForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        user.name = elements.name.value;
        user.username = elements.username.value;

        if (elements.country.selectedIndex > 0) {
            user.country = elements.country.options[elements.country.selectedIndex].value;
        }

        user.message = elements.message.value;
        user.terms = elements.terms.checked;
        user.bulletin = elements.bulletin.value;

        user.preferences = [];

        for(let index = 0; index < elements.preferences.length; index++) {
            if(elements.preferences[index].checked) {
                user.preferences.push(elements.preferences[index].value);
            }
        }

        console.log(user);
    })
});