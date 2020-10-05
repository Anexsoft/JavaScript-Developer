class PostService {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts/';
    }

    getPosts() {
        debugger;
        return fetch(this.baseUrl)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }

                throw 'Ocurrio un error: ' + r.status;
            }).then(r => {
                return r;
            }).catch(err => {
                console.error(err)
            });
    }

    getPost(id) {
        return fetch(this.baseUrl + id)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }

                throw 'Ocurrio un error: ' + r.status;
            }).then(r => {
                return r;
            }).catch(err => {
                console.error(err)
            });
    }

    create(obj) {
        let config = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        return fetch(this.baseUrl, config)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }

                throw 'Ocurrio un error: ' + r.status;
            }).then(r => {
                return r;
            }).catch(err => {
                console.error(err)
            });
    }

    update(obj) {
        let config = {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        return fetch(this.baseUrl + obj.id, config)
            .then(r => {
                if (r.ok) {
                    return r.json();
                }

                throw 'Ocurrio un error: ' + r.status;
            }).then(r => {
                return r;
            }).catch(err => {
                console.error(err)
            });
    }

    delete(id) {
        let config = {
            method: 'DELETE'
        };

        return fetch(this.baseUrl + id, config)
            .then(r => {
                if (!r.ok) {
                    throw 'Ocurrio un error: ' + r.status;
                }
            }).then(r => {
                return r;
            }).catch(err => {
                console.error(err)
            });
    }
}

(function () {
    let post = new PostService();
    let list = document.querySelector('#posts');

    list.innerText = 'Cargando ..';

    post.getPosts().then(r => {
        let template = [];

        r.forEach(item => {
            template.push(`
                <div class="box">
                    <b>${item.title.toUpperCase()}</b><br>
                    <p>${item.body}</p>
                </div>
            `)
        })

        list.innerHTML = template.join('');
    });
})();



