'use strict';

(function () {
    let config = {
        sort: null,
        culture: {
            currency: 'USD',
            code: 'en-US',
            exchangeRate: 1
        }
    };

    let shoppingCart = new KodotiShoppingCart({
        total: '#total',
        amount: '#amount',
        culture: config.culture
    });

    let catalog = new KodotiCatalog({
        url: 'catalog.json',
        el: '#catalog',
        config,
        cart: shoppingCart
    });

    catalog.render();

    document.querySelector('#filter').addEventListener('change', filterEvent);
    document.querySelector('#exchangeRate').addEventListener('change', exchangeRateEvent);

    function filterEvent() {
        switch (this.options[this.selectedIndex].value) {
            case 'price-asc':
                config.sort = ((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                config.sort = ((a, b) => b.price - a.price);
                break;
        }

        catalog.render();
    }

    function exchangeRateEvent() {
        let value = this.options[this.selectedIndex].value;
        switch (value) {
            case 'en-US':
                config.culture.code = value;
                config.culture.currency = 'USD';
                config.culture.exchangeRate = 1;
                break;
            case 'es-PE':
                config.culture.code = value;
                config.culture.currency = 'PEN';
                config.culture.exchangeRate = 3.47;
                break;
        }

        catalog.render();
        shoppingCart.render();
    }
})()
