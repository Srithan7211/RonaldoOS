/* =========================
   CLOCK
========================= */

function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

}

updateClock();

setInterval(
    updateClock,
    1000
);



/* =========================
   WINDOWS
========================= */

const welcomeScreen =
    document.querySelector("#welcome");

const journalScreen =
    document.querySelector("#journal");

const projectScreen =
    document.querySelector("#projects");


const welcomeClose =
    document.querySelector("#welcomeclose");

const journalClose =
    document.querySelector("#journalclose");

const projectClose =
    document.querySelector("#projectsclose");


const welcomeOpen =
    document.querySelector("#welcomeopen");

const openJournal =
    document.querySelector("#openJournal");

const journalIcon =
    document.querySelector("#journalIcon");

const projectIcon =
    document.querySelector("#projectIcon");

const topBar =
    document.querySelector("#top");


let biggestIndex = 5;



/* =========================
   OPEN WINDOW
========================= */

function openWindow(element) {

    element.style.display = "flex";

    biggestIndex++;

    element.style.zIndex =
        biggestIndex;

}



/* =========================
   CLOSE WINDOW
========================= */

function closeWindow(element) {

    element.style.display = "none";

}



/* =========================
   WELCOME
========================= */

welcomeClose.addEventListener(
    "click",
    function() {

        closeWindow(
            welcomeScreen
        );

    }
);


welcomeOpen.addEventListener(
    "click",
    function() {

        openWindow(
            welcomeScreen
        );

    }
);



/* =========================
   JOURNAL
========================= */

journalClose.addEventListener(
    "click",
    function() {

        closeWindow(
            journalScreen
        );

    }
);


openJournal.addEventListener(
    "click",
    function() {

        openWindow(
            journalScreen
        );

    }
);


journalIcon.addEventListener(
    "click",
    function() {

        openWindow(
            journalScreen
        );

    }
);



/* =========================
   CR7 TIMELINE
========================= */

projectIcon.addEventListener(
    "click",
    function() {

        openWindow(
            projectScreen
        );

        renderTimeline();

    }
);


projectClose.addEventListener(
    "click",
    function() {

        closeWindow(
            projectScreen
        );

    }
);



/* =========================
   WINDOW FOCUS
========================= */

function handleWindowTap(element) {

    biggestIndex++;

    element.style.zIndex =
        biggestIndex;

}


welcomeScreen.addEventListener(
    "mousedown",
    function() {

        handleWindowTap(
            welcomeScreen
        );

    }
);


journalScreen.addEventListener(
    "mousedown",
    function() {

        handleWindowTap(
            journalScreen
        );

    }
);


projectScreen.addEventListener(
    "mousedown",
    function() {

        handleWindowTap(
            projectScreen
        );

    }
);



/* =========================
   DRAGGING
========================= */

function dragElement(element) {

    let initialX = 0;

    let initialY = 0;


    const header =
        document.getElementById(
            element.id + "header"
        );


    if (header) {

        header.onmousedown =
            startDragging;

    }


    function startDragging(e) {

        e.preventDefault();

        initialX =
            e.clientX;

        initialY =
            e.clientY;

        document.onmouseup =
            stopDragging;

        document.onmousemove =
            drag;

    }


    function drag(e) {

        e.preventDefault();


        const currentX =
            initialX - e.clientX;

        const currentY =
            initialY - e.clientY;


        initialX =
            e.clientX;

        initialY =
            e.clientY;


        element.style.top =
            (
                element.offsetTop -
                currentY
            ) + "px";


        element.style.left =
            (
                element.offsetLeft -
                currentX
            ) + "px";


        element.style.transform =
            "none";

    }


    function stopDragging() {

        document.onmouseup =
            null;

        document.onmousemove =
            null;

    }

}


dragElement(
    welcomeScreen
);

dragElement(
    journalScreen
);

dragElement(
    projectScreen
);



/* =========================
   CR7 JOURNAL
========================= */

const content = [

    {

        title:
            "Welcome",

        date:
            "16/08/2026",

        content: `

            <h2>
                Welcome to CR7 Journal ⚽
            </h2>

            <p>
                This is the football journal
                inside Ronaldo OS.
            </p>

            <p>
                Browse the entries on the
                left to explore different
                football topics.
            </p>

            <blockquote>
                Keep improving. Keep learning.
                Keep moving forward.
            </blockquote>

        `

    },


    {

        title:
            "The Football Mindset",

        date:
            "16/08/2026",

        content: `

            <h2>
                The Football Mindset
            </h2>

            <p>
                Great football is about more
                than physical ability.
                Preparation, discipline and
                consistency also matter.
            </p>

            <p>
                This note explores the mindset
                behind becoming better at a
                skill over time.
            </p>

        `

    },


    {

        title:
            "Football & Technology",

        date:
            "16/08/2026",

        content: `

            <h2>
                Football & Technology
            </h2>

            <p>
                Modern football increasingly
                uses technology to analyse
                matches, training and player
                performance.
            </p>

            <p>
                Data, video analysis and
                wearable technology can help
                teams make better decisions.
            </p>

        `

    }

];



/* =========================
   JOURNAL SIDEBAR
========================= */

function addToSideBar(index) {

    const sidebar =
        document.querySelector(
            "#sidebar"
        );


    const note =
        content[index];


    const newDiv =
        document.createElement(
            "div"
        );


    newDiv.className =
        "note-item";


    newDiv.innerHTML = `

        <p class="note-item-title">
            ${note.title}
        </p>

        <p class="note-item-date">
            ${note.date}
        </p>

    `;


    newDiv.addEventListener(
        "click",
        function() {

            setNotesContent(
                index
            );

        }
    );


    sidebar.appendChild(
        newDiv
    );

}



function setNotesContent(index) {

    const note =
        content[index];


    const noteContent =
        document.querySelector(
            "#noteContent"
        );


    noteContent.innerHTML =
        note.content;


    const items =
        document.querySelectorAll(
            ".note-item"
        );


    items.forEach(
        function(item) {

            item.classList.remove(
                "active"
            );

        }
    );


    if (items[index]) {

        items[index].classList.add(
            "active"
        );

    }

}


for (
    let i = 0;
    i < content.length;
    i++
) {

    addToSideBar(i);

}


setNotesContent(0);



/* =========================
   CR7 CAREER TIMELINE
========================= */

const timelineElement =
    document.querySelector(
        "#timeline"
    );


const timeline = [

    {

        year: "2002",

        title:
            "Sporting CP",

        club:
            "SPORTING CP",

        description:
            "A young footballer from Madeira makes his first-team breakthrough at Sporting CP."

    },


    {

        year: "2003",

        title:
            "Manchester United",

        club:
            "MANCHESTER UNITED",

        description:
            "A move to England begins a major new chapter and the rise of a global football star."

    },


    {

        year: "2009",

        title:
            "Real Madrid",

        club:
            "REAL MADRID",

        description:
            "A world-record transfer begins an extraordinary era in Madrid."

    },


    {

        year: "2018",

        title:
            "Juventus",

        club:
            "JUVENTUS",

        description:
            "A new challenge begins in Italy as the career continues at one of Europe's historic clubs."

    },


    {

        year: "2021",

        title:
            "Manchester United — Return",

        club:
            "MANCHESTER UNITED",

        description:
            "A return to Old Trafford begins another chapter with Manchester United."

    },


    {

        year: "2023",

        title:
            "Al Nassr",

        club:
            "AL NASSR",

        description:
            "A new chapter begins in Saudi Arabia with Al Nassr."

    },


    {

        year: "NOW",

        title:
            "The Legacy",

        club:
            "CR7",

        description:
            "A career spanning multiple countries, clubs and generations leaves a lasting mark on football.",

        final:
            true

    }

];



/* =========================
   RENDER TIMELINE
========================= */

function renderTimeline() {

    timelineElement.innerHTML =
        "";


    timeline.forEach(
        function(item) {

            const timelineItem =
                document.createElement(
                    "div"
                );


            timelineItem.className =
                "timeline-item";


            const finalClass =
                item.final
                    ? "timeline-final"
                    : "";


            timelineItem.innerHTML = `

                <div class="timeline-dot">
                </div>


                <div class="timeline-year">
                    ${item.year}
                </div>


                <div class="
                    timeline-card
                    ${finalClass}
                ">

                    <h2>
                        ${item.title}
                    </h2>


                    <p>
                        ${item.description}
                    </p>


                    <span class="timeline-tag">
                        ${item.club}
                    </span>

                </div>

            `;


            timelineElement.appendChild(
                timelineItem
            );

        }
    );

}


renderTimeline();