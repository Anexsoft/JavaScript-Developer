document.addEventListener('DOMContentLoaded', () => {
    let control = document.querySelector('#control'),
        button = document.querySelector('#button'),
        tasks = document.querySelector('#tasks');

    button.addEventListener('click', () => {
        if (control.value.length < 3)
            return;

        addTask(tasks, control.value);

        control.value = '';
    });
});

function addTask(tasks, task) {
    let li = document.createElement('li'),
        span = document.createElement('span'),
        a = document.createElement('a');

    a.addEventListener('click', () => {
        if (confirm('Esta seguro?')) {
            li.remove();
            setTotal(tasks.children.length);
        }
    })

    span.innerText = task;
    a.innerText = '[x]';

    li.append(a);
    li.append(' - ');
    li.append(span);

    tasks.append(li);

    setTotal(tasks.children.length);
}

function setTotal(n) {
    let total = document.querySelector('#total');
    total.innerText = n;
}