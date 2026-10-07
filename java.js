/* =====================================
   NEURAL OS
   VERSION 1.0
===================================== */


/* =====================================
   BOOT SYSTEM
===================================== */

const bootScreen =
    document.getElementById("bootScreen");

const system =
    document.getElementById("system");

const bootTerminal =
    document.getElementById("bootTerminal");

const bootProgress =
    document.getElementById("bootProgress");


const bootMessages = [

    "Loading NEURAL KERNEL...",
    "Initializing synaptic interface...",
    "Connecting neural pathways...",
    "Scanning cognitive modules...",
    "Activating memory matrix...",
    "Loading artificial intelligence...",
    "Synchronizing brain waves...",
    "Neural link established.",
    "SYSTEM READY."

];


let bootIndex = 0;
let progress = 0;


const bootInterval =
    setInterval(() => {

        if (
            bootIndex <
            bootMessages.length
        ) {

            const line =
                document.createElement("div");

            line.textContent =
                "> " +
                bootMessages[bootIndex];

            bootTerminal.appendChild(line);

            bootIndex++;

        }


        progress +=
            Math.random() * 14 + 5;


        if (progress > 100) {
            progress = 100;
        }


        bootProgress.style.width =
            progress + "%";


        if (progress >= 100) {

            clearInterval(
                bootInterval
            );


            setTimeout(
                launchSystem,
                600
            );

        }

    }, 350);


function launchSystem() {

    bootScreen.style.opacity = "0";


    setTimeout(() => {

        bootScreen.style.display =
            "none";

        system.style.display =
            "block";

        showNotification(
            "NEURAL OS",
            "Neural Core successfully initialized."
        );

    }, 700);

}


/* =====================================
   CLOCK
===================================== */

function updateClock() {

    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            "en-US",
            {
                hour12: false
            }
        );


    document.getElementById(
        "clock"
    ).textContent =
        time;

}


setInterval(
    updateClock,
    1000
);

updateClock();


/* =====================================
   PAGE NAVIGATION
===================================== */

function openPage(
    pageId,
    button
) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );

        });


    const page =
        document.getElementById(
            pageId
        );


    if (page) {

        page.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(".nav")
        .forEach(nav => {

            nav.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }

}


/* =====================================
   LIVE BRAIN STATS
===================================== */

const activity =
    document.getElementById(
        "brainActivity"
    );

const focus =
    document.getElementById(
        "focus"
    );

const load =
    document.getElementById(
        "neuralLoad"
    );

const activityBar =
    document.getElementById(
        "activityBar"
    );

const focusBar =
    document.getElementById(
        "focusBar"
    );

const loadBar =
    document.getElementById(
        "loadBar"
    );


function randomBetween(
    min,
    max
) {

    return (
        Math.random() *
        (max - min) +
        min
    );

}


setInterval(() => {

    const a =
        randomBetween(
            78,
            96
        );

    const f =
        randomBetween(
            62,
            88
        );

    const l =
        randomBetween(
            35,
            59
        );


    activity.textContent =
        a.toFixed(1) + "%";


    focus.textContent =
        Math.round(f) + "%";


    load.textContent =
        l.toFixed(1) + "%";


    activityBar.style.width =
        a + "%";


    focusBar.style.width =
        f + "%";


    loadBar.style.width =
        l + "%";

}, 1500);


/* =====================================
   SYNAPSES
===================================== */

const synapses =
    document.getElementById(
        "synapses"
    );


let synapseValue =
    14.8;


setInterval(() => {

    synapseValue +=
        randomBetween(
            .001,
            .008
        );


    synapses.textContent =
        synapseValue.toFixed(3) +
        "B";

}, 1000);


/* =====================================
   EEG CANVAS
===================================== */

const canvas =
    document.getElementById(
        "waveCanvas"
    );

const ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    canvas.width =
        canvas.clientWidth *
        window.devicePixelRatio;

    canvas.height =
        canvas.clientHeight *
        window.devicePixelRatio;

    ctx.scale(
        window.devicePixelRatio,
        window.devicePixelRatio
    );

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


let waveOffset = 0;


function drawWave() {

    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* GRID */

    ctx.strokeStyle =
        "rgba(0,246,255,.05)";

    ctx.lineWidth = 1;


    for (
        let x = 0;
        x < width;
        x += 40
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x,
            0
        );

        ctx.lineTo(
            x,
            height
        );

        ctx.stroke();

    }


    for (
        let y = 0;
        y < height;
        y += 35
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            y
        );

        ctx.lineTo(
            width,
            y
        );

        ctx.stroke();

    }


    /* WAVE */

    ctx.beginPath();

    ctx.strokeStyle =
        "#00f6ff";

    ctx.shadowBlur = 12;

    ctx.shadowColor =
        "#00f6ff";

    ctx.lineWidth = 2;


    for (
        let x = 0;
        x < width;
        x++
    ) {

        const y =
            height / 2 +

            Math.sin(
                x * .025 +
                waveOffset
            ) * 22 +

            Math.sin(
                x * .08 +
                waveOffset * 1.7
            ) * 10 +

            Math.sin(
                x * .17 +
                waveOffset * 2
            ) * 4;


        if (x === 0) {

            ctx.moveTo(
                x,
                y
            );

        } else {

            ctx.lineTo(
                x,
                y
            );

        }

    }


    ctx.stroke();

    ctx.shadowBlur = 0;


    waveOffset += .035;


    requestAnimationFrame(
        drawWave
    );

}


drawWave();


/* =====================================
   THOUGHT STREAM
===================================== */

const thoughtStream =
    document.getElementById(
        "thoughtStream"
    );


const thoughts = [

    "Pattern recognition active",
    "Visual cortex synchronized",
    "Memory pathway optimized",
    "Creative processing detected",
    "Neural cluster connected",
    "Cognitive load stabilized",
    "Long-term memory accessed",
    "Predictive model updated"

];


setInterval(() => {

    const now =
        new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour12: false
                }
            );


    const thought =
        thoughts[
            Math.floor(
                Math.random() *
                thoughts.length
            )
        ];


    const item =
        document.createElement(
            "div"
        );


    item.innerHTML = `
        <span>${now}</span>
        ${thought}
    `;


    thoughtStream.prepend(
        item
    );


    while (
        thoughtStream.children.length >
        5
    ) {

        thoughtStream.lastElementChild
            .remove();

    }

}, 2200);


/* =====================================
   AI ASSISTANT
===================================== */

const aiInput =
    document.getElementById(
        "aiInput"
    );

const messages =
    document.getElementById(
        "messages"
    );


function aiEnter(event) {

    if (
        event.key === "Enter"
    ) {

        sendAI();

    }

}


function sendAI() {

    const text =
        aiInput.value.trim();


    if (!text) {
        return;
    }


    const userMessage =
        document.createElement(
            "div"
        );


    userMessage.className =
        "user-message";


    userMessage.textContent =
        text;


    messages.appendChild(
        userMessage
    );


    aiInput.value = "";


    setTimeout(() => {

        const aiMessage =
            document.createElement(
                "div"
            );


        aiMessage.className =
            "ai-message";


        aiMessage.innerHTML = `

            <span>AI</span>

            ${generateAIResponse(text)}

        `;


        messages.appendChild(
            aiMessage
        );


        messages.scrollTop =
            messages.scrollHeight;

    }, 500);

}


function generateAIResponse(
    input
) {

    const text =
        input.toLowerCase();


    if (
        text.includes("hello") ||
        text.includes("salom") ||
        text.includes("hi")
    ) {

        return `
            Neural Core recognizes you.
            Connection stable. How may I assist?
        `;

    }


    if (
        text.includes("brain") ||
        text.includes("miya")
    ) {

        return `
            Neural activity is currently
            operating at optimal levels.
            Cognitive pathways are synchronized.
        `;

    }


    if (
        text.includes("status") ||
        text.includes("system")
    ) {

        return `
            SYSTEM STATUS: ONLINE.<br>
            NEURAL LINK: 98.7%.<br>
            CORE TEMPERATURE: NOMINAL.<br>
            MEMORY: STABLE.
        `;

    }


    if (
        text.includes("focus")
    ) {

        return `
            Focus level detected at
            approximately 74%. Recommendation:
            minimize external cognitive noise.
        `;

    }


    const responses = [

        "Interesting cognitive pattern. I am processing it.",
        "Neural pathways are analyzing your request.",
        "Processing complete. The system remains stable.",
        "Your query has been added to the cognitive stream.",
        "Neural Core suggests exploring the Brain module.",
        "Analysis indicates multiple possible interpretations."

    ];


    return responses[
        Math.floor(
            Math.random() *
            responses.length
        )
    ];

}


/* =====================================
   TERMINAL
===================================== */

const terminalInput =
    document.getElementById(
        "terminalInput"
    );

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );


function terminalCommand(event) {

    if (
        event.key !== "Enter"
    ) {

        return;

    }


    const command =
        terminalInput.value
            .trim()
            .toLowerCase();


    if (!command) {
        return;
    }


    const inputLine =
        document.createElement(
            "div"
        );


    inputLine.innerHTML =
        `
        <span style="color:#00f6ff">
            neural@core:~$
        </span>
        ${escapeHTML(command)}
        `;


    terminalOutput.appendChild(
        inputLine
    );


    let response = "";


    switch (command) {

        case "help":

            response = `
                AVAILABLE COMMANDS:<br>
                status — system status<br>
                brain — neural statistics<br>
                memory — memory information<br>
                clear — clear terminal<br>
                time — system time<br>
                scan — neural network scan
            `;

            break;


        case "status":

            response = `
                SYSTEM: ONLINE<br>
                NEURAL LINK: 98.7%<br>
                CORE: STABLE<br>
                AI: ONLINE
            `;

            break;


        case "brain":

            response = `
                BRAIN ACTIVITY: 87.4%<br>
                FOCUS: 74%<br>
                NEURAL LOAD: 42.8%
            `;

            break;


        case "memory":

            response = `
                MEMORY CAPACITY: 12.8 TB<br>
                ACTIVE MEMORY: 7.4 TB<br>
                MEMORY NODES: 2.8M
            `;

            break;


        case "time":

            response =
                new Date()
                    .toLocaleTimeString();

            break;


        case "scan":

            response = `
                Scanning neural network...<br>
                [████████████████] 100%<br>
                2,841,920 nodes detected.<br>
                No anomalies found.
            `;

            break;


        case "clear":

            terminalOutput.innerHTML =
                "";

            terminalInput.value =
                "";

            return;


        default:

            response =
                `Command not recognized.
                Type "help" for available commands.`;

    }


    const responseLine =
        document.createElement(
            "div"
        );


    responseLine.innerHTML =
        response;


    responseLine.style.marginBottom =
        "10px";


    terminalOutput.appendChild(
        responseLine
    );


    terminalInput.value =
        "";


    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

}


/* =====================================
   SYSTEM TOGGLE
===================================== */

function toggleSystem() {

    showNotification(
        "SYSTEM",
        "Neural Core diagnostics completed. All systems operational."
    );

}


/* =====================================
   NOTIFICATION
===================================== */

let notificationTimer;


function showNotification(
    title,
    message
) {

    const notification =
        document.getElementById(
            "notification"
        );


    notification.querySelector(
        "strong"
    ).textContent =
        title;


    notification.querySelector(
        "p"
    ).textContent =
        message;


    notification.classList.add(
        "show"
    );


    clearTimeout(
        notificationTimer
    );


    notificationTimer =
        setTimeout(() => {

            notification.classList.remove(
                "show"
            );

        }, 3500);

}


/* =====================================
   SECURITY
===================================== */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}
