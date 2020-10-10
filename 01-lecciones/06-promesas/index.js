function _userApi() {
    let users = [
        { id: 1, name: 'Eduardo' },
        { id: 2, name: 'Mariela' },
        { id: 3, name: 'Alfredo' }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                items: users,
                status: 'ok'
            });
        }, 1000);
    });
}

function getUsers() {
    return new Promise((resolve, reject) => {
        _userApi().then(data => {
            if (data.status === 'ok') {
                resolve(data.items);
            } else {
                reject('Ocurrió un error inesperado');
            }
        });
    });
}

async function getUsersAsync() {
    const result = await _userApi();

    if (result.status !== 'ok') {
        throw new Error('Ocurrió un error inesperado');
    }

    return result.items;
}

(async () => {
    try {
        const result = await getUsersAsync();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();