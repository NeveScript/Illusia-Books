
function loadHeader(){

    fetch('../fragments/header.html')
        .then(response => response.text())
        .then(content => {

            var h = document.querySelector('header.__headerWithNav__');
            h.innerHTML = content;
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

loadHeader();