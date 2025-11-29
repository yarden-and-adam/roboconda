const stepsData = [
    {
        id: 0,
        title: "0. Parts List",
        ikeaImage: "parts_list.png",
        legoImage: "lego_step_0_parts.png",
        text: "Gather all 3-D printed muscles, robotic snake skeleton, heat-seeking cameras, solar panels, dislocating robot jaws, steel sheets, drill, screws, nails, hammer, and folded satellite antenna."
    },
    {
        id: 1,
        title: "1. Take out equipment",
        ikeaImage: "step_1_equipment.png",
        legoImage: "lego_step_1_equipment.png",
        text: "First, take out all equipment."
    },
    {
        id: 2,
        title: "2. Place Skeleton",
        ikeaImage: "step_2_skeleton.png",
        legoImage: "lego_step_2_skeleton.png",
        text: "Secondly, place the Robotic Snake Skeleton before you and make sure the spine is up."
    },
    {
        id: 3,
        title: "3. Attach Skull",
        ikeaImage: "step_3_skull.png",
        legoImage: "lego_step_3_skull.png",
        text: "At the end of spine (not the tail!) attach the Skull."
    },
    {
        id: 4,
        title: "4. Attach Muscles",
        ikeaImage: "step_4_muscles.png",
        legoImage: "lego_step_4_muscles.png",
        text: "Attach the 3-printed muscles using lots of wires."
    },
    {
        id: 5,
        title: "5. Attach Antenna",
        ikeaImage: "step_5_antenna.png",
        legoImage: "lego_step_5_antenna.png",
        text: "Attach the folding satellite antenna to the end of the tail."
    },
    {
        id: 6,
        title: "6. Attach Jaws",
        ikeaImage: "step_6_jaws.png",
        legoImage: "lego_step_6_jaws.png",
        text: "Attach the dislocating jaws at the bottom of the skull."
    },
    {
        id: 7,
        title: "7. Secure Plates",
        ikeaImage: "step_7_screws.png",
        legoImage: "lego_step_7_screws.png",
        text: "Secure Screw at all metal plates on Skeleton."
    },
    {
        id: 8,
        title: "8. Solar Panels",
        ikeaImage: "step_8_solar.png",
        legoImage: "lego_step_8_solar.png",
        text: "Hammer all solar panels and make sure cable is attached."
    },
    {
        id: 9,
        title: "9. Heat-Seeking Cameras",
        ikeaImage: "step_9_cameras.png",
        legoImage: "lego_step_9_cameras.png",
        text: "Attach heat-seeking cameras into eye sockets and don't let go until you hear the click."
    },
    {
        id: 10,
        title: "10. Finished!",
        ikeaImage: "step_10_finished.png",
        legoImage: "lego_step_10_finished.png",
        text: "Good Job, you've made a Roboconda!"
    }
];

let currentStep = 0;
let currentTheme = 'ikea'; // Track current theme

// DOM Elements
const stepTitle = document.getElementById('step-title');
const stepImage = document.getElementById('step-image');
const stepText = document.getElementById('step-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');
const bananaToggle = document.getElementById('banana-toggle');
const themeSelector = document.getElementById('theme-selector');

// Update the display for the current step
function updateStep() {
    const data = stepsData[currentStep];

    stepTitle.textContent = data.title;

    // Select image based on current theme
    stepImage.src = currentTheme === 'lego' ? data.legoImage : data.ikeaImage;
    stepImage.alt = data.title;

    stepText.textContent = data.text;

    stepIndicator.textContent = `Step ${currentStep + 1} / ${stepsData.length}`;

    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === stepsData.length - 1;
}

// Navigation
prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) {
        currentStep++;
        updateStep();
    }
});

// Theme Selector Logic
themeSelector.addEventListener('change', (e) => {
    const mode = e.target.value;
    currentTheme = mode; // Update current theme

    if (mode === 'lego') {
        document.body.classList.add('lego-mode');
    } else {
        document.body.classList.remove('lego-mode');
    }

    // Update the current step's image to match new theme
    updateStep();
});

// Nano Banana Mode (placeholder for future implementation)
bananaToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        console.log('Nano Banana Mode: ON');
        // Could add banana overlays to images here
    } else {
        console.log('Nano Banana Mode: OFF');
    }
});

// Initial render
updateStep();
