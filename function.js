document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
        everyitem.addEventListener('click', function(e){
            let el_link = this.querySelector('a[data-bs-toggle]');
            if(el_link != null){
                location.href = el_link.href;
            }

        });
    });