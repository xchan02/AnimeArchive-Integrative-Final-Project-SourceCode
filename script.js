/* ========================================
   JAVASCRIPT OOP
   ======================================== */

/* ========================================
   BASE CLASS: ANIME
   ======================================== */

class Anime {

    #title;
    #rating;
    #episodes;
    #genres;
    #status;
    #poster;

    constructor(title, rating, episodes, genres, status, poster) {

        this.#title = title;
        this.#rating = rating;
        this.#episodes = episodes;
        this.#genres = genres;
        this.#status = status;
        this.#poster = poster;

    }

    getInfo() {

        return `${this.#title} - ${this.#rating}/10 - ${this.#status}`;

    }

    getTitle() {

        return this.#title;

    }

    getRating() {

        return this.#rating;

    }

    getEpisodes() {

        return this.#episodes;

    }

}


/* ========================================
   INHERITANCE: COMPLETED ANIME
   ======================================== */

class CompletedAnime extends Anime {

    constructor(
        title,
        rating,
        episodes,
        genres,
        poster,
        completedDate
    ) {

        super(
            title,
            rating,
            episodes,
            genres,
            "Completed",
            poster
        );

        this.completedDate = completedDate;

    }

    getInfo() {

        return `${this.getTitle()} - Completed on ${this.completedDate}`;

    }

}


/* ========================================
   INHERITANCE: WATCHING ANIME
   ======================================== */

class WatchingAnime extends Anime {

    constructor(
        title,
        rating,
        episodes,
        genres,
        poster,
        currentEpisode
    ) {

        super(
            title,
            rating,
            episodes,
            genres,
            "Currently Watching",
            poster
        );

        this.currentEpisode = currentEpisode;

    }

    getInfo() {

        return `${this.getTitle()} - Currently watching Episode ${this.currentEpisode}`;

    }

}


/* ========================================
   ANIME OBJECTS
   ======================================== */

const frierenAnime = new Anime(
    "Frieren: Beyond Journey's End",
    9.8,
    28,
    ["Adventure", "Drama", "Fantasy"],
    "Completed",
    "./images/frieren-poster.png"
);


const soloLevelingAnime = new Anime(
    "Solo Leveling",
    10,
    25,
    ["Action", "Adventure", "Fantasy"],
    "Completed",
    "./images/sololeveling-poster.png"
);


/* ========================================
   COMPLETED ANIME OBJECT
   ======================================== */

const completedFrieren = new CompletedAnime(
    "Frieren: Beyond Journey's End",
    9.8,
    28,
    ["Adventure", "Drama", "Fantasy"],
    "./images/frieren-poster.png",
    "August 10"
);


/* ========================================
   WATCHING ANIME OBJECT
   ======================================== */

const watchingAnime = new WatchingAnime(
    "The Apothecary Diaries",
    0,
    48,
    ["Drama", "Mystery", "Historical"],
    "./images/apodiaries-poster.png",
    1
);


/* ========================================
   OOP TEST
   ======================================== */

console.log(
    frierenAnime.getInfo()
);

console.log(
    soloLevelingAnime.getInfo()
);

console.log(
    completedFrieren.getInfo()
);

console.log(
    watchingAnime.getInfo()
);


/* ========================================
   POLYMORPHISM
   ======================================== */

const animeCollection = [
    frierenAnime,
    completedFrieren,
    watchingAnime
];

animeCollection.forEach(
    function(anime) {

        console.log(
            anime.getInfo()
        );

    }
);


/* ========================================
   ANIME DATA
   ======================================== */

const animeData = {

    "frieren": {

        title:
            "Frieren: Beyond Journey's End",

        poster:
            "./images/frieren-poster.png",

        status:
            "Completed",

        rating:
            9.8,

        episodes:
            "28 Episodes",

        genres:
            "Adventure • Drama • Fantasy",

        date:
            "📅 July 30 – August 10",

        synopsis:
            "Frieren: Beyond Journey's End follows an elven mage who begins a new journey after the defeat of the Demon King. Unlike her human companions, Frieren ages very slowly, causing her to experience the passage of time differently. Years after the original adventure, she sets out on a new journey to understand the people and memories she left behind.",

        thoughts:
            "Your personal thoughts about Frieren: Beyond Journey's End will appear here...",

        characters: [

            {
                name:
                    "Frieren",

                image:
                    "./images/frieren-headshot.png",

                thoughts:
                    "Your thoughts about Frieren will appear here..."
            },

            {
                name:
                    "Himmel",

                image:
                    "./images/himmel-headshot.png",

                thoughts:
                    "Your thoughts about Himmel will appear here..."
            },

            {
                name:
                    "Stark",

                image:
                    "./images/stark-headshot.png",

                thoughts:
                    "Your thoughts about Stark will appear here..."
            }

        ]

    },


    "solo-leveling": {

        title:
            "Solo Leveling",

        poster:
            "./images/sololeveling-poster.png",

        status:
            "Completed",

        rating:
            10,

        episodes:
            "25 Episodes",

        genres:
            "Action • Adventure • Fantasy",

        date:
            "📅 July 9 – July 10",

        synopsis:
            "Solo Leveling follows Sung Jinwoo, the weakest hunter in a world filled with dangerous monsters and dungeons. After a mysterious system chooses him as its player, he gains the ability to level up and grow stronger, changing his life completely.",

        thoughts:
            "Your personal thoughts about Solo Leveling will appear here...",

        characters: [

            {
                name:
                    "Sung Jinwoo",

                image:
                    "./images/jinwoo-headshot.png",

                thoughts:
                    "Your thoughts about Sung Jinwoo will appear here..."
            }

        ]

    },


    /* ========================================
       WATCHLIST ANIME
       ======================================== */

    "apothecary-diaries": {

        title:
            "The Apothecary Diaries",

        poster:
            "./images/apodiaries-poster.png",

        status:
            "Planned",

        rating:
            0,

        episodes:
            "48 Episodes",

        genres:
            "Drama • Mystery • Historical",

        date:
            "📅 Not Started",

        synopsis:
            "Maomao, a young woman with a strong knowledge of medicine and poisons, is taken to the imperial palace where her skills and curiosity lead her to uncover mysterious incidents.",

        thoughts:
            "Your personal thoughts about The Apothecary Diaries will appear here...",

        characters: []

    },


    "attack-on-titan": {

        title:
            "Attack on Titan",

        poster:
            "./images/attackontitan-poster.png",

        status:
            "Planned",

        rating:
            0,

        episodes:
            "89 Episodes",

        genres:
            "Action • Drama • Fantasy",

        date:
            "📅 Not Started",

        synopsis:
            "Humanity lives behind enormous walls to protect itself from terrifying Titans, but Eren Yeager's life changes forever when his hometown is attacked and he becomes determined to fight back.",

        thoughts:
            "Your personal thoughts about Attack on Titan will appear here...",

        characters: []

    }

};


/* ========================================
   OOP OBJECT REFERENCES
   ======================================== */

animeData["frieren"].animeObject =
    frierenAnime;

animeData["solo-leveling"].animeObject =
    soloLevelingAnime;


/* ========================================
   HERO CAROUSEL
   ======================================== */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".dot");

const heroLeft =
    document.querySelector(".hero-arrow-left");

const heroRight =
    document.querySelector(".hero-arrow-right");

let currentSlide =
    0;

let heroInterval;


function showSlide(index) {

    if (!heroSlides.length) {
        return;
    }

    if (index >= heroSlides.length) {

        currentSlide =
            0;

    }

    else if (index < 0) {

        currentSlide =
            heroSlides.length - 1;

    }

    else {

        currentSlide =
            index;

    }

    heroSlides.forEach(
        function(slide, i) {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );

    heroDots.forEach(
        function(dot, i) {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );

}


function startHeroCarousel() {

    if (!heroSlides.length) {
        return;
    }

    clearInterval(heroInterval);

    heroInterval =
        setInterval(
            function() {

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );

}


function resetHeroCarousel() {

    clearInterval(
        heroInterval
    );

    startHeroCarousel();

}


if (heroRight) {

    heroRight.addEventListener(
        "click",
        function() {

            showSlide(
                currentSlide + 1
            );

            resetHeroCarousel();

        }
    );

}


if (heroLeft) {

    heroLeft.addEventListener(
        "click",
        function() {

            showSlide(
                currentSlide - 1
            );

            resetHeroCarousel();

        }
    );

}


heroDots.forEach(
    function(dot, index) {

        dot.addEventListener(
            "click",
            function() {

                showSlide(index);

                resetHeroCarousel();

            }
        );

    }
);


showSlide(0);

startHeroCarousel();


/* ========================================
   HOME VIEW ANIME BUTTONS
   ======================================== */

const heroButtons =
    document.querySelectorAll(
        ".hero-button"
    );


heroButtons.forEach(
    function(button, index) {

        button.addEventListener(
            "click",
            function() {

                if (index === 0) {

                    window.location.href =
                        "anime.html";

                }

                else {

                    window.location.href =
                        "anime.html";

                }

            }
        );

    }
);


/* ========================================
   STATS
   ======================================== */

function getAnimeStats() {

    const watchedAnime =
        Object.values(animeData).filter(
            function(anime) {

                return anime.status !== "Planned";

            }
        );


    const animeCount =
        watchedAnime.length;


    let episodeCount =
        0;


    watchedAnime.forEach(
        function(anime) {

            const episodeNumber =
                parseInt(
                    anime.episodes
                );


            if (!isNaN(episodeNumber)) {

                episodeCount +=
                    episodeNumber;

            }

        }
    );


    let totalRating =
        0;


    watchedAnime.forEach(
        function(anime) {

            totalRating +=
                anime.rating;

        }
    );


    const averageRating =
        animeCount > 0
            ? (
                totalRating /
                animeCount
            ).toFixed(1)
            : "0";


    const completedCount =
        watchedAnime.filter(
            function(anime) {

                return anime.status ===
                    "Completed";

            }
        ).length;


    return {

        animeCount:
            animeCount,

        episodeCount:
            episodeCount,

        averageRating:
            averageRating,

        completedCount:
            completedCount

    };

}


function updateStats() {

    const stats =
        getAnimeStats();


    const statCards =
        document.querySelectorAll(
            ".stat-card h3"
        );


    if (statCards.length >= 4) {

        statCards[0].textContent =
            stats.animeCount;

        statCards[1].textContent =
            stats.episodeCount;

        statCards[2].textContent =
            stats.averageRating;

        statCards[3].textContent =
            stats.completedCount;

    }


    const profileAnimeCount =
        document.getElementById(
            "profile-anime-count"
        );


    const profileEpisodeCount =
        document.getElementById(
            "profile-episode-count"
        );


    const profileAverageRating =
        document.getElementById(
            "profile-average-rating"
        );


    const profileCompletedCount =
        document.getElementById(
            "profile-completed-count"
        );


    if (profileAnimeCount) {

        profileAnimeCount.textContent =
            stats.animeCount;

    }


    if (profileEpisodeCount) {

        profileEpisodeCount.textContent =
            stats.episodeCount;

    }


    if (profileAverageRating) {

        profileAverageRating.textContent =
            stats.averageRating;

    }


    if (profileCompletedCount) {

        profileCompletedCount.textContent =
            stats.completedCount;

    }

}


updateStats();


/* ========================================
   ANIME MODAL
   ======================================== */

const modal =
    document.getElementById(
        "anime-modal"
    );

const modalClose =
    document.getElementById(
        "modal-close"
    );

const modalPoster =
    document.getElementById(
        "modal-poster"
    );

const modalTitle =
    document.getElementById(
        "modal-title"
    );

const modalLabel =
    document.getElementById(
        "modal-label"
    );

const modalMeta =
    document.getElementById(
        "modal-meta"
    );

const modalDate =
    document.getElementById(
        "modal-date"
    );

const modalSynopsis =
    document.getElementById(
        "modal-synopsis"
    );

const modalThoughts =
    document.getElementById(
        "modal-thoughts"
    );

const thoughtsInput =
    document.getElementById(
        "thoughts-input"
    );

const thoughtsActions =
    document.getElementById(
        "thoughts-actions"
    );

const editThoughtsButton =
    document.getElementById(
        "edit-thoughts"
    );

const saveThoughtsButton =
    document.getElementById(
        "save-thoughts"
    );

const cancelThoughtsButton =
    document.getElementById(
        "cancel-thoughts"
    );

const favoriteCharacters =
    document.getElementById(
        "favorite-characters"
    );


let currentAnime =
    null;


function openAnimeModal(animeId) {

    const anime =
        animeData[animeId];


    if (!anime || !modal) {
        return;
    }


    currentAnime =
        animeId;


    if (modalPoster) {

        modalPoster.src =
            anime.poster;

        modalPoster.alt =
            anime.title;

    }


    if (modalTitle) {

        modalTitle.textContent =
            anime.title;

    }


    if (modalLabel) {

        modalLabel.textContent =
            anime.status.toUpperCase();

    }


    if (modalMeta) {

        modalMeta.innerHTML =
            `
                <span>⭐ ${anime.rating || "—"} / 10</span>
                <span>${anime.episodes}</span>
                <span>${anime.genres}</span>
            `;

    }


    if (modalDate) {

        modalDate.textContent =
            anime.date;

    }


    if (modalSynopsis) {

        modalSynopsis.textContent =
            anime.synopsis;

    }


    if (modalThoughts) {

        modalThoughts.textContent =
            anime.thoughts;

        modalThoughts.style.display =
            "block";

    }


    if (thoughtsInput) {

        thoughtsInput.value =
            anime.thoughts;

        thoughtsInput.style.display =
            "none";

    }


    if (thoughtsActions) {

        thoughtsActions.style.display =
            "none";

    }


    if (editThoughtsButton) {

        editThoughtsButton.style.display =
            "inline-block";

    }


    renderFavoriteCharacters(
        anime
    );


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeAnimeModal() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeAnimeModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeAnimeModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeAnimeModal();

        }

    }
);


/* ========================================
   VIEW DETAILS BUTTONS
   ======================================== */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".details-button"
            );


        if (!button) {
            return;
        }


        const animeId =
            button.dataset.anime;


        openAnimeModal(
            animeId
        );

    }
);


/* ========================================
   THOUGHTS EDITING
   ======================================== */

if (editThoughtsButton) {

    editThoughtsButton.addEventListener(
        "click",
        function() {

            if (!currentAnime) {
                return;
            }


            thoughtsInput.value =
                animeData[currentAnime].thoughts;


            modalThoughts.style.display =
                "none";


            thoughtsInput.style.display =
                "block";


            thoughtsActions.style.display =
                "flex";


            editThoughtsButton.style.display =
                "none";

        }
    );

}


if (saveThoughtsButton) {

    saveThoughtsButton.addEventListener(
        "click",
        function() {

            if (!currentAnime) {
                return;
            }


            animeData[currentAnime].thoughts =
                thoughtsInput.value;


            modalThoughts.textContent =
                animeData[currentAnime].thoughts;


            modalThoughts.style.display =
                "block";


            thoughtsInput.style.display =
                "none";


            thoughtsActions.style.display =
                "none";


            editThoughtsButton.style.display =
                "inline-block";

        }
    );

}


if (cancelThoughtsButton) {

    cancelThoughtsButton.addEventListener(
        "click",
        function() {

            if (!currentAnime) {
                return;
            }


            thoughtsInput.value =
                animeData[currentAnime].thoughts;


            modalThoughts.style.display =
                "block";


            thoughtsInput.style.display =
                "none";


            thoughtsActions.style.display =
                "none";


            editThoughtsButton.style.display =
                "inline-block";

        }
    );

}


/* ========================================
   FAVORITE CHARACTERS
   ======================================== */

function renderFavoriteCharacters(anime) {

    if (!favoriteCharacters) {
        return;
    }


    favoriteCharacters.innerHTML =
        "";


    if (
        !anime.characters ||
        anime.characters.length === 0
    ) {

        favoriteCharacters.innerHTML =
            `
                <p class="no-characters">
                    No favorite characters added yet.
                </p>
            `;

        return;

    }


    anime.characters.forEach(
        function(character, index) {

            const characterCard =
                document.createElement(
                    "div"
                );


            characterCard.className =
                "favorite-character";


            characterCard.innerHTML =
                `
                    <img
                        src="${character.image}"
                        alt="${character.name}"
                    >

                    <div class="character-info">

                        <h3>
                            ${character.name}
                        </h3>

                        <p>
                            ${character.thoughts}
                        </p>

                    </div>

                    <button
                        class="edit-character-button"
                        data-character-index="${index}"
                    >
                        ✏
                    </button>
                `;


            favoriteCharacters.appendChild(
                characterCard
            );

        }
    );

}


const characterThoughtsModal =
    document.getElementById(
        "character-thoughts-modal"
    );

const characterModalClose =
    document.getElementById(
        "character-modal-close"
    );

const characterEditImage =
    document.getElementById(
        "character-edit-image"
    );

const characterEditName =
    document.getElementById(
        "character-edit-name"
    );

const characterThoughtsInput =
    document.getElementById(
        "character-thoughts-input"
    );

const saveCharacterThoughts =
    document.getElementById(
        "save-character-thoughts"
    );

const cancelCharacterThoughts =
    document.getElementById(
        "cancel-character-thoughts"
    );


let currentCharacterIndex =
    null;


document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".edit-character-button"
            );


        if (
            !button ||
            !currentAnime
        ) {

            return;

        }


        currentCharacterIndex =
            Number(
                button.dataset.characterIndex
            );


        const character =
            animeData[currentAnime]
                .characters[
                    currentCharacterIndex
                ];


        if (!character) {
            return;
        }


        characterEditImage.src =
            character.image;


        characterEditImage.alt =
            character.name;


        characterEditName.textContent =
            character.name;


        characterThoughtsInput.value =
            character.thoughts;


        characterThoughtsModal.classList.add(
            "active"
        );

    }
);


if (characterModalClose) {

    characterModalClose.addEventListener(
        "click",
        function() {

            characterThoughtsModal.classList.remove(
                "active"
            );

        }
    );

}


if (cancelCharacterThoughts) {

    cancelCharacterThoughts.addEventListener(
        "click",
        function() {

            characterThoughtsModal.classList.remove(
                "active"
            );

        }
    );

}


if (characterThoughtsModal) {

    characterThoughtsModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                characterThoughtsModal
            ) {

                characterThoughtsModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


if (saveCharacterThoughts) {

    saveCharacterThoughts.addEventListener(
        "click",
        function() {

            if (
                !currentAnime ||
                currentCharacterIndex === null
            ) {

                return;

            }


            const character =
                animeData[currentAnime]
                    .characters[
                        currentCharacterIndex
                    ];


            if (!character) {
                return;
            }


            character.thoughts =
                characterThoughtsInput.value;


            renderFavoriteCharacters(
                animeData[currentAnime]
            );


            characterThoughtsModal.classList.remove(
                "active"
            );

        }
    );

}


/* ========================================
   MY ANIME SEARCH
   ======================================== */

const animeSearch =
    document.getElementById(
        "anime-search"
    );


if (animeSearch) {

    animeSearch.addEventListener(
        "input",
        function() {

            const searchValue =
                animeSearch.value
                    .toLowerCase()
                    .trim();


            const cards =
                document.querySelectorAll(
                    ".library-card"
                );


            cards.forEach(
                function(card) {

                    const title =
                        card
                            .querySelector("h2")
                            .textContent
                            .toLowerCase();


                    if (
                        title.includes(
                            searchValue
                        )
                    ) {

                        card.style.display =
                            "";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* ========================================
   MY ANIME FILTERS
   ======================================== */

const libraryFilters =
    document.querySelectorAll(
        ".library-filter"
    );


libraryFilters.forEach(
    function(filter) {

        filter.addEventListener(
            "click",
            function() {

                libraryFilters.forEach(
                    function(button) {

                        button.classList.remove(
                            "active"
                        );

                    }
                );


                filter.classList.add(
                    "active"
                );


                const selectedFilter =
                    filter.textContent.trim();


                const cards =
                    document.querySelectorAll(
                        ".library-card"
                    );


                cards.forEach(
                    function(card) {

                        const animeId =
                            card.dataset.anime;


                        const anime =
                            animeData[animeId];


                        if (
                            selectedFilter ===
                            "All"
                        ) {

                            card.style.display =
                                "";

                        }

                        else if (
                            anime &&
                            anime.status ===
                            selectedFilter
                        ) {

                            card.style.display =
                                "";

                        }

                        else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);


/* ========================================
   SORT MENU
   ======================================== */

const sortButton =
    document.getElementById(
        "sort-button"
    );

const sortMenu =
    document.getElementById(
        "sort-menu"
    );


if (
    sortButton &&
    sortMenu
) {

    sortButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            sortMenu.classList.toggle(
                "show"
            );

        }
    );

}


function sortAnimeCards(sortType) {

    const grid =
        document.querySelector(
            ".anime-grid"
        );


    if (!grid) {
        return;
    }


    const cards =
        Array.from(
            grid.querySelectorAll(
                ".library-card"
            )
        );


    cards.sort(
        function(a, b) {

            const animeA =
                animeData[
                    a.dataset.anime
                ];


            const animeB =
                animeData[
                    b.dataset.anime
                ];


            if (
                !animeA ||
                !animeB
            ) {

                return 0;

            }


            if (
                sortType === "az"
            ) {

                return animeA.title.localeCompare(
                    animeB.title
                );

            }


            if (
                sortType === "za"
            ) {

                return animeB.title.localeCompare(
                    animeA.title
                );

            }


            return 0;

        }
    );


    cards.forEach(
        function(card) {

            grid.appendChild(
                card
            );

        }
    );

}


document.querySelectorAll(
    "#sort-menu button"
).forEach(
    function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                sortAnimeCards(
                    button.dataset.sort
                );


                if (sortMenu) {

                    sortMenu.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);


document.addEventListener(
    "click",
    function(event) {

        if (
            sortMenu &&
            sortButton &&
            !sortMenu.contains(
                event.target
            ) &&
            !sortButton.contains(
                event.target
            )
        ) {

            sortMenu.classList.remove(
                "show"
            );

        }

    }
);


/* ========================================
   WATCHLIST
   ======================================== */

let watchlist =
    JSON.parse(
        localStorage.getItem(
            "animeArchiveWatchlist"
        )
    ) || [
        "apothecary-diaries",
        "attack-on-titan"
    ];


function saveWatchlist() {

    localStorage.setItem(
        "animeArchiveWatchlist",
        JSON.stringify(
            watchlist
        )
    );

}


/* ========================================
   ADD WATCHLIST BUTTONS
   ======================================== */

function addWatchlistButtons() {

    const cards =
        document.querySelectorAll(
            ".library-card"
        );


    cards.forEach(
        function(card) {

            const animeId =
                card.dataset.anime;


            if (
                !animeData[animeId]
            ) {

                return;

            }


            if (
                card.querySelector(
                    ".watchlist-toggle-button"
                )
            ) {

                return;

            }


            const detailsButton =
                card.querySelector(
                    ".details-button"
                );


            if (!detailsButton) {
                return;
            }


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "watchlist-toggle-button";


            button.dataset.anime =
                animeId;


            button.textContent =
                "+ Add to Watchlist";


            detailsButton.parentNode.insertBefore(
                button,
                detailsButton
            );

        }
    );


    updateWatchlistButtons();

}


/* ========================================
   UPDATE WATCHLIST BUTTONS
   ======================================== */

function updateWatchlistButtons() {

    const buttons =
        document.querySelectorAll(
            ".watchlist-toggle-button"
        );


    buttons.forEach(
        function(button) {

            const animeId =
                button.dataset.anime;


            if (
                watchlist.includes(
                    animeId
                )
            ) {

                button.textContent =
                    "✓ In Watchlist";

                button.classList.add(
                    "added"
                );

            }

            else {

                button.textContent =
                    "+ Add to Watchlist";

                button.classList.remove(
                    "added"
                );

            }

        }
    );

}


/* ========================================
   ADD TO WATCHLIST
   ======================================== */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".watchlist-toggle-button"
            );


        if (!button) {
            return;
        }


        const animeId =
            button.dataset.anime;


        if (
            !animeData[animeId]
        ) {

            return;

        }


        if (
            watchlist.includes(
                animeId
            )
        ) {

            return;

        }


        watchlist.push(
            animeId
        );


        saveWatchlist();

        updateWatchlistButtons();

        renderWatchlist();

    }
);


/* ========================================
   WATCHLIST PAGE
   ======================================== */

const watchlistGrid =
    document.getElementById(
        "watchlist-grid"
    );

const watchlistEmpty =
    document.getElementById(
        "watchlist-empty"
    );

const watchlistCount =
    document.getElementById(
        "watchlist-count"
    );


function renderWatchlist() {

    if (!watchlistGrid) {
        return;
    }


    watchlistGrid.innerHTML =
        "";


    if (
        watchlist.length === 0
    ) {

        if (watchlistEmpty) {

            watchlistEmpty.style.display =
                "block";

        }


        if (watchlistCount) {

            watchlistCount.textContent =
                "0 Anime";

        }


        return;

    }


    if (watchlistEmpty) {

        watchlistEmpty.style.display =
            "none";

    }


    if (watchlistCount) {

        watchlistCount.textContent =
            `${watchlist.length} Anime`;

    }


    watchlist.forEach(
        function(animeId) {

            const anime =
                animeData[animeId];


            if (!anime) {
                return;
            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "library-card";


            card.dataset.anime =
                animeId;


            card.innerHTML =
                `
                    <div class="poster-container">

                        <img
                            src="${anime.poster}"
                            alt="${anime.title}"
                        >

                        <div class="poster-overlay">

                            <span class="card-status">
                                Planned
                            </span>

                            <button
                                class="details-button"
                                data-anime="${animeId}"
                            >
                                View Details
                            </button>

                        </div>

                    </div>

                    <div class="library-card-info">

                        <h2>
                            ${anime.title}
                        </h2>

                        <div class="card-meta">

                            <span>
                                Not Started
                            </span>

                            <span>
                                ${anime.episodes}
                            </span>

                        </div>

                        <p>
                            ${anime.genres}
                        </p>

                        <button
                            class="watchlist-remove-button"
                            data-anime="${animeId}"
                        >
                            Remove from Watchlist
                        </button>

                    </div>
                `;


            watchlistGrid.appendChild(
                card
            );

        }
    );

}


/* ========================================
   REMOVE FROM WATCHLIST
   ======================================== */

document.addEventListener(
    "click",
    function(event) {

        const removeButton =
            event.target.closest(
                ".watchlist-remove-button"
            );


        if (!removeButton) {
            return;
        }


        const animeId =
            removeButton.dataset.anime;


        watchlist =
            watchlist.filter(
                function(id) {

                    return id !== animeId;

                }
            );


        saveWatchlist();

        renderWatchlist();

        updateWatchlistButtons();

    }
);


/* ========================================
   WATCHLIST SEARCH
   ======================================== */

const watchlistSearch =
    document.getElementById(
        "watchlist-search"
    );


if (watchlistSearch) {

    watchlistSearch.addEventListener(
        "input",
        function() {

            const searchValue =
                watchlistSearch.value
                    .toLowerCase()
                    .trim();


            if (!watchlistGrid) {
                return;
            }


            const cards =
                watchlistGrid.querySelectorAll(
                    ".library-card"
                );


            cards.forEach(
                function(card) {

                    const title =
                        card
                            .querySelector("h2")
                            .textContent
                            .toLowerCase();


                    if (
                        title.includes(
                            searchValue
                        )
                    ) {

                        card.style.display =
                            "";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* ========================================
   WATCHLIST SORT
   ======================================== */

const watchlistSortButton =
    document.getElementById(
        "watchlist-sort-button"
    );

const watchlistSortMenu =
    document.getElementById(
        "watchlist-sort-menu"
    );


if (
    watchlistSortButton &&
    watchlistSortMenu
) {

    watchlistSortButton.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            watchlistSortMenu.classList.toggle(
                "show"
            );

        }
    );

}


function sortWatchlist(sortType) {

    if (
        sortType === "az"
    ) {

        watchlist.sort(
            function(a, b) {

                return animeData[a].title.localeCompare(
                    animeData[b].title
                );

            }
        );

    }


    else if (
        sortType === "za"
    ) {

        watchlist.sort(
            function(a, b) {

                return animeData[b].title.localeCompare(
                    animeData[a].title
                );

            }
        );

    }


    saveWatchlist();

    renderWatchlist();

}


document.querySelectorAll(
    "#watchlist-sort-menu button"
).forEach(
    function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.stopPropagation();

                sortWatchlist(
                    button.dataset.sort
                );


                if (watchlistSortMenu) {

                    watchlistSortMenu.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);


document.addEventListener(
    "click",
    function(event) {

        if (
            watchlistSortMenu &&
            watchlistSortButton &&
            !watchlistSortMenu.contains(
                event.target
            ) &&
            !watchlistSortButton.contains(
                event.target
            )
        ) {

            watchlistSortMenu.classList.remove(
                "show"
            );

        }

    }
);


/* ========================================
   INITIALIZE
   ======================================== */

addWatchlistButtons();

renderWatchlist();

updateWatchlistButtons();

updateStats();


/* ========================================
   PROFILE PAGE FUNCTIONALITY
   ======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const editProfileButton =
            document.getElementById(
                "edit-profile-button"
            );


        if (!editProfileButton) {
            return;
        }


        /* ========================================
           PROFILE ELEMENTS
           ======================================== */

        const profileModal =
            document.getElementById(
                "profile-modal"
            );

        const closeProfileModal =
            document.getElementById(
                "profile-modal-close"
            );

        const cancelProfileButton =
            document.getElementById(
                "cancel-profile-button"
            );

        const saveProfileButton =
            document.getElementById(
                "save-profile-button"
            );


        const profilePicture =
            document.getElementById(
                "profile-picture"
            );

        const profileCoverImage =
            document.getElementById(
                "profile-cover-image"
            );


        const editProfilePreview =
            document.getElementById(
                "edit-profile-preview"
            );

        const editCoverPreview =
            document.getElementById(
                "edit-cover-preview"
            );


        const profileUpload =
            document.getElementById(
                "profile-upload"
            );

        const coverUpload =
            document.getElementById(
                "cover-upload"
            );


        const profileName =
            document.getElementById(
                "profile-name"
            );

        const profileUsername =
            document.getElementById(
                "profile-username"
            );

        const profileBio =
            document.getElementById(
                "profile-bio"
            );


        const profileNameInput =
            document.getElementById(
                "profile-name-input"
            );

        const profileUsernameInput =
            document.getElementById(
                "profile-username-input"
            );

        const profileBioInput =
            document.getElementById(
                "profile-bio-input"
            );


        /* ========================================
           CHECK REQUIRED PROFILE ELEMENTS
           ======================================== */

        if (
            !profileModal ||
            !closeProfileModal ||
            !cancelProfileButton ||
            !saveProfileButton ||
            !profilePicture ||
            !profileCoverImage ||
            !editProfilePreview ||
            !editCoverPreview ||
            !profileUpload ||
            !coverUpload ||
            !profileName ||
            !profileUsername ||
            !profileBio ||
            !profileNameInput ||
            !profileUsernameInput ||
            !profileBioInput
        ) {

            console.log(
                "Some profile elements could not be found."
            );

            return;

        }


        /* ========================================
           LOAD SAVED PROFILE
           ======================================== */

        let savedProfile =
            null;


        try {

            const savedProfileData =
                localStorage.getItem(
                    "animeArchiveProfile"
                );


            if (savedProfileData) {

                savedProfile =
                    JSON.parse(
                        savedProfileData
                    );

            }

        }

        catch (error) {

            console.log(
                "Saved profile data could not be loaded."
            );

            savedProfile =
                null;

        }


        if (savedProfile) {

            if (
                savedProfile.name
            ) {

                profileName.textContent =
                    savedProfile.name;

                profileNameInput.value =
                    savedProfile.name;

            }


            if (
                savedProfile.username
            ) {

                profileUsername.textContent =
                    "@" +
                    savedProfile.username;

                profileUsernameInput.value =
                    savedProfile.username;

            }


            if (
                savedProfile.bio
            ) {

                profileBio.textContent =
                    savedProfile.bio;

                profileBioInput.value =
                    savedProfile.bio;

            }


            if (
                savedProfile.profilePicture
            ) {

                profilePicture.src =
                    savedProfile.profilePicture;

                editProfilePreview.src =
                    savedProfile.profilePicture;

            }


            if (
                savedProfile.coverPhoto
            ) {

                profileCoverImage.src =
                    savedProfile.coverPhoto;

                editCoverPreview.src =
                    savedProfile.coverPhoto;

            }

        }


        /* ========================================
           OPEN EDIT PROFILE
           ======================================== */

        editProfileButton.addEventListener(
            "click",
            function() {

                profileModal.classList.add(
                    "active"
                );


                profileNameInput.value =
                    profileName.textContent;


                profileUsernameInput.value =
                    profileUsername.textContent.replace(
                        "@",
                        ""
                    );


                profileBioInput.value =
                    profileBio.textContent;


                editProfilePreview.src =
                    profilePicture.src;


                editCoverPreview.src =
                    profileCoverImage.src;

            }
        );


        /* ========================================
           CLOSE EDIT PROFILE
           ======================================== */

        function closeProfileEditor() {

            profileModal.classList.remove(
                "active"
            );

        }


        closeProfileModal.addEventListener(
            "click",
            closeProfileEditor
        );


        cancelProfileButton.addEventListener(
            "click",
            closeProfileEditor
        );


        /* ========================================
           PROFILE PHOTO UPLOAD
           ======================================== */

        profileUpload.addEventListener(
            "change",
            function() {

                const file =
                    profileUpload.files[0];


                if (!file) {
                    return;
                }


                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    return;

                }


                const reader =
                    new FileReader();


                reader.onload =
                    function(event) {

                        editProfilePreview.src =
                            event.target.result;

                    };


                reader.readAsDataURL(
                    file
                );

            }
        );


        /* ========================================
           COVER PHOTO UPLOAD
           ======================================== */

        coverUpload.addEventListener(
            "change",
            function() {

                const file =
                    coverUpload.files[0];


                if (!file) {
                    return;
                }


                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    return;

                }


                const reader =
                    new FileReader();


                reader.onload =
                    function(event) {

                        editCoverPreview.src =
                            event.target.result;

                    };


                reader.readAsDataURL(
                    file
                );

            }
        );


        /* ========================================
           SAVE PROFILE
           ======================================== */

        saveProfileButton.addEventListener(
            "click",
            function() {

                const name =
                    profileNameInput.value.trim();

                const username =
                    profileUsernameInput.value.trim();

                const bio =
                    profileBioInput.value.trim();


                if (
                    !name ||
                    !username
                ) {

                    alert(
                        "Please enter a display name and username."
                    );

                    return;

                }


                const updatedProfile = {

                    name:
                        name,

                    username:
                        username,

                    bio:
                        bio,

                    profilePicture:
                        editProfilePreview.src,

                    coverPhoto:
                        editCoverPreview.src

                };


                try {

                    localStorage.setItem(
                        "animeArchiveProfile",
                        JSON.stringify(
                            updatedProfile
                        )
                    );

                }

                catch (error) {

                    alert(
                        "The profile could not be saved. The selected image may be too large."
                    );

                    return;

                }


                profileName.textContent =
                    name;


                profileUsername.textContent =
                    "@" +
                    username;


                profileBio.textContent =
                    bio;


                profilePicture.src =
                    editProfilePreview.src;


                profileCoverImage.src =
                    editCoverPreview.src;


                profileUpload.value =
                    "";

                coverUpload.value =
                    "";


                closeProfileEditor();

            }
        );


        /* ========================================
           CLOSE MODAL WHEN CLICKING OUTSIDE
           ======================================== */

        profileModal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target ===
                    profileModal
                ) {

                    closeProfileEditor();

                }

            }
        );

    }
);

/* ========================================
   MESSAGE ME FORM VALIDATION
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }


    const messageName =
        document.getElementById(
            "message-name"
        );

    const messageEmail =
        document.getElementById(
            "message-email"
        );

    const messageSubject =
        document.getElementById(
            "message-subject"
        );

    const messageText =
        document.getElementById(
            "message-text"
        );


    const nameError =
        document.getElementById(
            "nameError"
        );

    const emailError =
        document.getElementById(
            "emailError"
        );

    const subjectError =
        document.getElementById(
            "subjectError"
        );

    const messageError =
        document.getElementById(
            "messageError"
        );

    const successMessage =
        document.getElementById(
            "successMessage"
        );


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let isValid = true;


            nameError.textContent = "";

            emailError.textContent = "";

            subjectError.textContent = "";

            messageError.textContent = "";

            successMessage.textContent = "";


            /* ========================================
               NAME VALIDATION
               ======================================== */

            if (
                messageName.value.trim() === ""
            ) {

                nameError.textContent =
                    "Please enter your name.";

                isValid = false;

            }


            /* ========================================
               EMAIL VALIDATION
               ======================================== */

            if (
                messageEmail.value.trim() === ""
            ) {

                emailError.textContent =
                    "Please enter your email.";

                isValid = false;

            }

            else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                    messageEmail.value.trim()
                )
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                isValid = false;

            }


            /* ========================================
               SUBJECT VALIDATION
               ======================================== */

            if (
                messageSubject.value.trim() === ""
            ) {

                subjectError.textContent =
                    "Please enter a subject.";

                isValid = false;

            }


            /* ========================================
               MESSAGE VALIDATION
               ======================================== */

            if (
                messageText.value.trim() === ""
            ) {

                messageError.textContent =
                    "Please enter a message.";

                isValid = false;

            }


            /* ========================================
               STOP IF INVALID
               ======================================== */

            if (!isValid) {

                return;

            }


            /* ========================================
               SUCCESS
               ======================================== */

            successMessage.textContent =
                "Your message has been sent successfully!";


            contactForm.reset();

        }

    );

});


/* ========================================
   PROFILE TABS
   ======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const profileTabs =
            document.querySelectorAll(
                ".profile-tab"
            );


        if (!profileTabs.length) {
            return;
        }


        profileTabs.forEach(
            function(tab) {

                tab.addEventListener(
                    "click",
                    function() {

                        const target =
                            tab.dataset.tabTarget;


                        /* external page tabs */

                        if (
                            target === "anime.html" ||
                            target === "watchlist.html"
                        ) {

                            window.location.href =
                                target;

                            return;

                        }


                        /* in-page tabs */

                        profileTabs.forEach(
                            function(otherTab) {

                                otherTab.classList.remove(
                                    "active"
                                );

                            }
                        );


                        tab.classList.add(
                            "active"
                        );


                        if (target) {

                            const section =
                                document.getElementById(
                                    target
                                );


                            if (section) {

                                section.scrollIntoView(
                                    {
                                        behavior: "smooth",
                                        block: "start"
                                    }
                                );

                            }

                        }

                        else {

                            window.scrollTo(
                                {
                                    top: 0,
                                    behavior: "smooth"
                                }
                            );

                        }

                    }
                );

            }
        );

    }
);