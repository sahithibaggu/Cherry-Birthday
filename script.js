/* =====================================================
   PAGE NAVIGATION
===================================================== */

const pages = [
    "landingPage",
    "subjectPage",
    "evidencePage",
    "universePage",
    "memoriesPage",
    "familyPage",
    "letterPage",
    "finalPage"
];


function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);


    if (!page) return;


    page.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const bgMusic =
    document.getElementById("bgMusic");


const musicControl =
    document.getElementById("musicControl");


let musicPlaying = false;


function startMusic() {

    if (!bgMusic) return;


    bgMusic.volume = 0.25;


    bgMusic
        .play()
        .then(() => {

            musicPlaying = true;

            if (musicControl) {

                musicControl.textContent = "🔊";

            }

        })
        .catch(() => {

            musicPlaying = false;

        });

}


if (musicControl && bgMusic) {

    musicControl.addEventListener(
        "click",
        () => {

            if (musicPlaying) {

                bgMusic.pause();

                musicPlaying = false;

                musicControl.textContent = "🔇";

            }

            else {

                bgMusic
                    .play()
                    .then(() => {

                        musicPlaying = true;

                        musicControl.textContent = "🔊";

                    })
                    .catch(() => {

                        musicPlaying = false;

                    });

            }

        }
    );

}



/* =====================================================
   PAGE BUTTON HELPER
===================================================== */

function addPageButton(
    buttonId,
    targetPage
) {

    const button =
        document.getElementById(buttonId);


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            showPage(targetPage);

        }
    );

}



/* =====================================================
   PAGE BUTTONS
===================================================== */

const enterButton =
    document.getElementById("enterButton");


if (enterButton) {

    enterButton.addEventListener(
        "click",
        () => {

            startMusic();

            showPage("subjectPage");

        }
    );

}


addPageButton(
    "subjectContinue",
    "evidencePage"
);


addPageButton(
    "evidenceContinue",
    "universePage"
);


addPageButton(
    "universeContinue",
    "memoriesPage"
);


addPageButton(
    "memoriesContinue",
    "familyPage"
);


addPageButton(
    "familyContinue",
    "letterPage"
);


addPageButton(
    "finalButton",
    "finalPage"
);



/* =====================================================
   FILE 002
   EVIDENCE CASES
===================================================== */

const caseData = {

    1: {

        title:
            "THE ARGUMENT DEPARTMENT",

        text:

            `I genuinely love arguing with you for absolutely no reason.

            <br><br>

            I don't even know how these arguments start half the time.

            <br><br>

            But once they start, I am apparently committed to winning.

            <br><br>

            The problem?

            <br><br>

            You always know how to counterattack.

            <br><br>

            I hate how you always somehow make sense.

            <br><br>

            I come prepared with ten points.

            <br>

            You come prepared with eleven.

            <br><br>

            You never let me win an argument.

            <br><br>

            Which is deeply unfair.

            <br><br>

            But honestly?

            <br><br>

            I wouldn't want to argue with anyone else.`

    },


    2: {

        title:
            "THE \"I DIDN'T STUDY\" SCANDAL",

        text:

            `Every time you say you didn't study, I have learned to distrust the statement completely.

            <br><br>

            Because somehow you will go from:

            <br><br>

            <strong>
            "I literally didn't study."
            </strong>

            <br><br>

            to getting amazing marks.

            <br><br>

            At this point, I don't know whether to believe you or report you.`

    },


    3: {

        title:
            "THE ANNOYANCE PROJECT",

        text:

            `I genuinely love annoying you.

            <br><br>

            And honestly, watching you get annoyed because of something I did is one of my favourite hobbies.

            <br><br>

            You bear me anyway.

            <br><br>

            Which is honestly impressive.`

    },


    4: {

        title:
            "THE UNOFFICIAL CARE DEPARTMENT",

        text:

            `You seem cold sometimes.

            <br><br>

            But I know you're actually one of the most pure-hearted people I know.

            <br><br>

            You care.

            <br><br>

            You just have absolutely no intention of admitting it.

            <br><br>

            You never backstab anyone.

            <br><br>

            If something bothers you, you'll confront the person face to face.

            <br><br>

            Sometimes it may seem rude.

            <br><br>

            But honestly, I admire that about you.

            <br><br>

            At least with you, I always know where I stand.`

    },


    5: {

        title:
            "THE NEVER-TEXTS-FIRST INCIDENT",

        text:

            `You almost never text first.

            <br><br>

            Almost.

            <br><br>

            Yet somehow, whenever something happens in my life, you're one of the first people I think about.

            <br><br>

            So I guess I'll continue texting first.

            <br><br>

            This friendship clearly has a very unfair system.`

    },


    6: {

        title:
            "THE FIRST PERSON TO CALL",

        text:

            `There are some moments that make you realise who the important people in your life really are.

            <br><br>

            When my sister called me and said Nanna wasn't waking up...

            <br><br>

            you were the first person who came to my mind.

            <br><br>

            The first person I remembered.

            <br><br>

            The first person I wanted to call.

            <br><br>

            I don't think I ever told you what that meant to me.

            <br><br>

            You were just there in my mind.

            <br><br>

            Instantly.

            <br><br>

            And maybe that's when I realised that no matter how much I annoy you, argue with you, or complain that you never text first...

            <br><br>

            you're still one of the first people I think of when something really matters.`

    }

};



const caseCards =
    document.querySelectorAll(
        ".evidence-card"
    );


const caseModal =
    document.getElementById(
        "caseModal"
    );


const caseTitle =
    document.getElementById(
        "caseTitle"
    );


const caseStory =
    document.getElementById(
        "caseStory"
    );


const closeCase =
    document.getElementById(
        "closeCase"
    );



caseCards.forEach(
    card => {

        const button =
            card.querySelector(
                ".open-case"
            );


        if (!button) return;


        button.addEventListener(
            "click",
            () => {

                const caseNumber =
                    card.dataset.case;


                const data =
                    caseData[caseNumber];


                if (
                    !data ||
                    !caseModal ||
                    !caseTitle ||
                    !caseStory
                ) {

                    return;

                }


                caseTitle.textContent =
                    data.title;


                caseStory.innerHTML =
                    data.text;


                caseModal.classList.add(
                    "show"
                );

            }
        );

    }
);



if (closeCase && caseModal) {

    closeCase.addEventListener(
        "click",
        () => {

            caseModal.classList.remove(
                "show"
            );

        }
    );


    caseModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                caseModal
            ) {

                caseModal.classList.remove(
                    "show"
                );

            }

        }
    );

}



/* =====================================================
   FILE 004
   MEMORY WALL
===================================================== */

const memories = [

    {
        title:
            "The Pic I Took",

        text:
            "Well I tried taking a better pic, but it's absolutely your fault for not looking good enough."
    },


    {
        title:
            "Candid?",

        text:
            "Well I don't know if we call this a candid, you just don't know how to pose, again not my fault."
    },


    {
        title:
            "Fest",

        text:
            "Do you remember? We were not talking that day, but I still spoke indirectly, I can't stay long without speaking to you, I don't know why."
    },


    {
        title:
            "Childhood Pic",

        text:
            "I found this pic in Tej's gallery."
    },


    {
        title:
            "Homeless",

        text:
            "You look exactly homeless, well I hope none of your friends sees you like this except me ofc."
    },


    {
        title:
            "I Love This Pic",

        text:
            "I think this is the one and only genuine pic, where you are comfortable with me."
    },


    {
        title:
            "Wanted?",

        text:
            "This pic is your Fampay profile, I definitely question your choices at this moment."
    },


    {
        title:
            "CEO Vibes",

        text:
            "I really love this pic, it's soo cool and natural."
    },


    {
        title:
            "Aesthetic",

        text:
            "It suits you, a one pic where you finally knew how to pose."
    },


    {
        title:
            "Software Vibes?",

        text:
            "This pic too, I took it, so you look good."
    },


    {
        title:
            "Besties?",

        text:
            "We fought then, but still I needed a pic."
    },


    {
        title:
            "True Fan",

        text:
            "Tried a really great pose, wowww, you really don't know any other poses right?"
    }

];



const memoryPhotos =
    document.querySelectorAll(
        ".memory-photo"
    );


const photoModal =
    document.getElementById(
        "photoModal"
    );


const modalPhoto =
    document.getElementById(
        "modalPhoto"
    );


const memoryTitle =
    document.getElementById(
        "memoryTitle"
    );


const memoryText =
    document.getElementById(
        "memoryText"
    );


const photoCounter =
    document.getElementById(
        "photoCounter"
    );


const closePhoto =
    document.getElementById(
        "closePhoto"
    );


const prevPhoto =
    document.getElementById(
        "prevPhoto"
    );


const nextPhoto =
    document.getElementById(
        "nextPhoto"
    );


let currentPhoto = 0;



function openMemory(index) {

    if (
        index < 0 ||
        index >= memories.length
    ) {

        return;

    }


    currentPhoto = index;


    const memory =
        memories[currentPhoto];


    const clickedCard =
        document.querySelector(
            `.memory-photo[data-photo="${currentPhoto}"]`
        );


    if (!clickedCard) return;


    const image =
        clickedCard.querySelector("img");


    if (
        !image ||
        !photoModal ||
        !modalPhoto ||
        !memoryTitle ||
        !memoryText ||
        !photoCounter
    ) {

        return;

    }


    modalPhoto.src =
        image.src;


    modalPhoto.alt =
        memory.title;


    memoryTitle.textContent =
        memory.title;


    memoryText.textContent =
        memory.text;


    photoCounter.textContent =
        `${currentPhoto + 1} / ${memories.length}`;


    photoModal.classList.add(
        "show"
    );

}



memoryPhotos.forEach(
    photo => {

        photo.addEventListener(
            "click",
            () => {

                openMemory(
                    Number(
                        photo.dataset.photo
                    )
                );

            }
        );

    }
);



if (prevPhoto) {

    prevPhoto.addEventListener(
        "click",
        () => {

            currentPhoto--;

            if (
                currentPhoto < 0
            ) {

                currentPhoto =
                    memories.length - 1;

            }


            openMemory(
                currentPhoto
            );

        }
    );

}



if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        () => {

            currentPhoto++;


            if (
                currentPhoto >=
                memories.length
            ) {

                currentPhoto = 0;

            }


            openMemory(
                currentPhoto
            );

        }
    );

}



if (closePhoto && photoModal) {

    closePhoto.addEventListener(
        "click",
        () => {

            photoModal.classList.remove(
                "show"
            );

        }
    );


    photoModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                photoModal
            ) {

                photoModal.classList.remove(
                    "show"
                );

            }

        }
    );

}



/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            if (
                caseModal &&
                caseModal.classList.contains(
                    "show"
                )
            ) {

                caseModal.classList.remove(
                    "show"
                );

            }


            if (
                photoModal &&
                photoModal.classList.contains(
                    "show"
                )
            ) {

                photoModal.classList.remove(
                    "show"
                );

            }

        }


        if (
            photoModal &&
            photoModal.classList.contains(
                "show"
            )
        ) {

            if (
                event.key ===
                "ArrowLeft"
            ) {

                if (prevPhoto) {
                    prevPhoto.click();
                }

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                if (nextPhoto) {
                    nextPhoto.click();
                }

            }

        }

    }
);