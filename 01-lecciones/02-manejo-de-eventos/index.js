function example1() {
    let div = document.querySelector('#div-1');
    div.addEventListener('click', (e) => {
        e.target.innerText = 'Me hicieron click';
    })
}

function example2() {
    let div = document.querySelector('#div-2');
    div.addEventListener('mouseenter', (e) => {
        e.target.innerText = 'Ingrese por aquí';
    })
}

function example3() {
    let div = document.querySelector('#div-3');
    div.addEventListener('mouseleave', (e) => {
        let element = e.target;
        element.style.background = 'red';
    })
}

function example4() {
    let div = document.querySelector('#div-4'),
        span = div.querySelector('span'),
        p = div.querySelector('p'),
        input = div.querySelector('input');

    input.addEventListener('keyup', (e) => {
        let n = e.target.value.length;
        span.innerText = n;

        if (n < 3) {
            p.classList.add('has-text-danger');
        } else {
            p.classList.remove('has-text-danger');
            p.classList.add('has-text-success');
        }
    })
}

function example5() {
    let div = document.querySelector('#div-5'),
        span = div.querySelector('span'),
        select = div.querySelector('select');

    select.addEventListener('change', (e) => {
        let selectedIndex = select.selectedIndex;
        span.innerText = select.options[selectedIndex].value;
    })
}

example5();