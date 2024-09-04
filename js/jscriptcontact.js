document.addEventListener('DOMContentLoaded', () => {
    const btnSend = document.getElementById('btnSend');

    btnSend.addEventListener('click', () => {
        let errores = '';

        // Validado Nombre
        const names = document.getElementById('names');
        if (names.value.trim() === '') {
            errores += '<p>Escriba un nombre</p>';
            names.style.borderBottomColor = '#F14B4B';
        } else {
            names.style.borderBottomColor = '#d1d1d1';
        }

        // Validado Correo
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            errores += '<p>Ingrese un correo</p>';
            email.style.borderBottomColor = '#F14B4B';
        } else {
            email.style.borderBottomColor = '#d1d1d1';
        }

        // Validado Mensaje
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim() === '') {
            errores += '<p>Escriba un mensaje</p>';
            mensaje.style.borderBottomColor = '#F14B4B';
        } else {
            mensaje.style.borderBottomColor = '#d1d1d1';
        }

        // Mostrar Mensajes de Error
        if (errores !== '') {
            const mensajeModal = `
                <div class="modal_wrap">
                    <div class="mensaje_modal">
                        <h3>Errores encontrados</h3>
                        ${errores}
                        <span id="btnClose">Cerrar</span>
                    </div>
                </div>`;

            document.body.insertAdjacentHTML('beforeend', mensajeModal);

            // Cerrar Modal
            document.getElementById('btnClose').addEventListener('click', () => {
                document.querySelector('.modal_wrap').remove();
            });
        }
    });
});


function initMap() {
    initMap1();
    initMap2();
    initMap3();
}

function initMap1() {
    var location = { lat: -11.87636, lng: -77.0225 };
    var map = new google.maps.Map(document.getElementById('map-container-1'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initMap2() {
    var location = { lat: -11.87636, lng: -77.0225 };
    var map = new google.maps.Map(document.getElementById('map-container-2'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#202c3e"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"gamma": 0.01}, {"lightness": 20}, {"weight": "1.39"}, {"color": "#ffffff"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"weight": "0.96"}, {"saturation": "9"}, {"visibility": "on"}, {"color": "#000000"}]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initMap3() {
    var location = { lat: -11.87636, lng: -77.0225 };
    var map = new google.maps.Map(document.getElementById('map-container-3'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>Grupo FraVa</h3><p>Aquí estamos ubicados.</p>'
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>



