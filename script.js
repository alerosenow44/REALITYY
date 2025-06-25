document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
    
    // Chiudi menu quando si clicca su un link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('show');
        });
    });
    
    // Countdown per la prossima puntata
    function updateCountdown() {
        const now = new Date();
        // Prossima puntata è ogni sabato alle 21:00
        let nextEpisode = new Date();
        nextEpisode.setDate(now.getDate() + (6 - now.getDay() + 1) % 7);
        nextEpisode.setHours(21, 0, 0, 0);
        
        // Se oggi è sabato e sono già passate le 21:00, passa al sabato successivo
        if (now.getDay() === 6 && now.getHours() >= 21) {
            nextEpisode.setDate(nextEpisode.getDate() + 7);
        }
        
        const diff = nextEpisode - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Dati degli artisti
    const artists = [
        {
            id: 1,
            name: "Giulia Moretti",
            category: "Pittura",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
            bio: "Giulia è una pittrice autodidatta con uno stile unico che combina elementi astratti con ritratti realistici. Ha esposto in diverse gallerie locali prima di partecipare al reality.",
            age: 28,
            city: "Milano",
            wins: 2,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 2,
            name: "Marco Bianchi",
            category: "Scultura",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio: "Marco lavora principalmente con metallo e legno, creando sculture che esplorano il rapporto tra uomo e natura. Ha vinto diversi premi nazionali per le sue opere.",
            age: 35,
            city: "Roma",
            wins: 1,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 3,
            name: "Sofia Russo",
            category: "Fotografia",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            bio: "Sofia è una fotografa specializzata in ritratti e street photography. Il suo lavoro è stato pubblicato su diverse riviste internazionali.",
            age: 31,
            city: "Firenze",
            wins: 3,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 4,
            name: "Luca Ferrari",
            category: "Digital Art",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            bio: "Luca crea opere d'arte digitale che sfidano la percezione della realtà. Le sue animazioni sono state esposte in festival d'arte digitale in tutta Europa.",
            age: 26,
            city: "Torino",
            wins: 1,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 5,
            name: "Elena Conti",
            category: "Graffiti",
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            bio: "Elena è una street artist i cui murales colorati abbelliscono le città italiane. Il suo stile combina elementi tradizionali con un tocco moderno.",
            age: 29,
            city: "Napoli",
            wins: 0,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        },
        {
            id: 6,
            name: "Andrea Marini",
            category: "Illustrazione",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            bio: "Andrea è un illustratore specializzato in libri per bambini. Il suo stile unico e giocoso lo ha reso uno degli illustratori più richiesti nel settore.",
            age: 32,
            city: "Bologna",
            wins: 2,
            social: {
                instagram: "#",
                facebook: "#",
                twitter: "#"
            }
        }
    ];
    
    // Dati delle puntate
    const episodes = [
        {
            date: "15/10/2023",
            title: "Episodio 1: Il Primo Colpo di Pennello",
            description: "Gli artisti si presentano e affrontano la prima sfida: creare un'opera che rappresenti la loro identità artistica."
        },
        {
            date: "22/10/2023",
            title: "Episodio 2: Fuori dalla Comfort Zone",
            description: "Gli artisti devono lavorare con un medium a loro sconosciuto, mettendo alla prova la loro versatilità."
        },
        {
            date: "29/10/2023",
            title: "Episodio 3: Collaborazione Creativa",
            description: "Gli artisti lavorano in coppia per creare un'opera congiunta, imparando a fondere i loro stili distinti."
        },
        {
            date: "05/11/2023",
            title: "Episodio 4: Arte in Movimento",
            description: "La sfida di questa settimana è creare un'opera che incorpori il movimento, sia esso fisico o illusorio."
        },
        {
            date: "12/11/2023",
            title: "Episodio 5: Omaggio ai Maestri",
            description: "Gli artisti devono reinterpretare un'opera di un maestro del passato, aggiungendo il loro tocco personale."
        },
        {
            date: "19/11/2023",
            title: "Episodio 6: Arte con Materiali Riciclati",
            description: "La sostenibilità è al centro di questa sfida, dove gli artisti devono creare usando solo materiali riciclati."
        },
        {
            date: "26/11/2023",
            title: "Episodio 7: Sfida a Tempo",
            description: "Gli artisti hanno solo 3 ore per completare la loro opera, mettendo alla prova la loro capacità di lavorare sotto pressione."
        },
        {
            date: "03/12/2023",
            title: "Episodio 8: Il Tema della Giuria",
            description: "La giuria assegna un tema personale a ogni artista, basato sulle loro performance nelle settimane precedenti."
        },
        {
            date: "10/12/2023",
            title: "Episodio 9: Semifinale",
            description: "I quattro artisti rimasti affrontano una doppia sfida che determinerà chi accederà alla finale."
        },
        {
            date: "17/12/2023",
            title: "Episodio 10: La Finale",
            description: "I due finalisti hanno una settimana per creare la loro opera più ambiziosa, che verrà giudicata per decretare il vincitore."
        }
    ];
    
    // Popola la galleria degli artisti
    const artistGallery = document.getElementById('artistGallery');
    
    artists.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        artistCard.innerHTML = `
            <div class="artist-img">
                <img src="${artist.image}" alt="${artist.name}">
            </div>
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <p>${artist.category}</p>
                <div class="artist-social">
                    <a href="${artist.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="${artist.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="${artist.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
        
        artistCard.addEventListener('click', () => openArtistModal(artist));
        artistGallery.appendChild(artistCard);
    });
    
    // Popola il calendario delle puntate
    const episodeItems = document.getElementById('episodeItems');
    
    episodes.forEach((episode, index) => {
        const episodeItem = document.createElement('div');
        episodeItem.className = 'episode-item';
        episodeItem.innerHTML = `
            <div class="episode-dot"></div>
            <div class="episode-content">
                <p class="episode-date">${episode.date}</p>
                <h3 class="episode-title">${episode.title}</h3>
                <p>${episode.description}</p>
            </div>
        `;
        
        episodeItems.appendChild(episodeItem);
    });
    
    // Modal degli artisti
    const modal = document.getElementById('artistModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    
    function openArtistModal(artist) {
        modalBody.innerHTML = `
            <div class="modal-artist">
                <div class="modal-artist-header">
                    <div class="modal-artist-img">
                        <img src="${artist.image}" alt="${artist.name}">
                    </div>
                    <div class="modal-artist-info">
                        <h2>${artist.name}</h2>
                        <p>${artist.category}</p>
                        <div class="modal-artist-stats">
                            <div class="modal-artist-stat">
                                <h4>${artist.age}</h4>
                                <p>Età</p>
                            </div>
                            <div class="modal-artist-stat">
                                <h4>${artist.city}</h4>
                                <p>Città</p>
                            </div>
                            <div class="modal-artist-stat">
                                <h4>${artist.wins}</h4>
                                <p>Vittorie</p>
                            </div>
                        </div>
                        <div class="modal-artist-social">
                            <a href="${artist.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="${artist.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="${artist.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="modal-artist-bio">
                    <h3>Biografia</h3>
                    <p>${artist.bio}</p>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form di contatto
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Qui potresti aggiungere la logica per inviare il form (AJAX, ecc.)
        // Per ora mostriamo solo un alert
        alert(`Grazie ${name}! Il tuo messaggio è stato inviato. Ti risponderemo al più presto all'indirizzo ${email}.`);
        
        contactForm.reset();
    });
    
    // Animazione al scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.artist-card, .episode-item, .jury-member, .stat-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Imposta le proprietà iniziali per l'animazione
    window.addEventListener('load', function() {
        const elements = document.querySelectorAll('.artist-card, .episode-item, .jury-member, .stat-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);
});