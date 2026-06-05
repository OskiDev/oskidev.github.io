const TagToTagLabelMap = new Map();
TagToTagLabelMap.set("ue5", "Unreal Engine 5")
TagToTagLabelMap.set("cpp", "C++")
TagToTagLabelMap.set("bps", "Blueprints")
TagToTagLabelMap.set("network", "Networking")

const projects = [
    {
        title: "Engine Eternal",
        link: "https://store.steampowered.com/app/3492760/Engine_Eternal/",
        image: "assets/ee.jpg",
        tags: ["ue5", "bps", "network"],
        description: `An online co-op horror game for up to 4 players. I acted as the lead gameplay, AI, and network programmer for this project across a period of 10 months. <br> <br> There are 9 distinct enemies in EE, all with very different AIs that required different solutions. <br> <br> Other features include random dungeon generation, a variety of maps that leverage level instances, and proximity voice chat.`,
        year: "2025"
    },
    {
        title: "UE5 Systems and Extensions Showcase",
        link: "https://github.com/OskiDev/ue5-systems-and-extensions",
        image: "assets/codeshowcase.png",
        tags: ["ue5", "cpp", "bps"],
        description: `A showcase of systems and UE5 engine extensions that I developed for a larger project. The repository is populated with the relevant code files, all clearly commented. <br> <br> The main system listed is an AI Manager component with an architecture based in data driven design. <br> <br> The engine extensions listed include a custom editor mode, as well as a complete retrofit of engine source code for the EQS Trace Test.`,
        year: "2026"
    },
    {
        title: "Pacman",
        link: "https://github.com/OskiDev/playbuffer-pacman",
        image: "assets/pacman.jpg",
        tags: ["cpp"],
        description: `An implementation of Pacman using raw C++ through the Playbuffer framework. Full development time was roughly 2 weeks. <br> <br> Implementations for 4 distinctly different AI behaviours for the 4 different ghosts, mirroring the mechanics of the original game. <br> <br> Features use of the Singleton, State, and Double Buffer patterns, as well as use of C++ techniques such as function pointers.`,
        year: "2025"
    },
    {
        title: "Bump in the Night",
        link: "https://store.steampowered.com/app/2999720/Bump_in_the_Night/",
        image: "assets/bitn.jpg",
        tags: ["ue5", "bps"],
        description: `A simple single-player horror game built entirely using Blueprints. I acted as the lead programmer on this project for a period of about 2 months. <br> <br> Features a very simple and incremental gameplay loop, leveraging features such as the Level Sequencer and Unreal's Audio tools. <br> <br> This was the first project that I worked on, and it essentially taught me how to use Unreal Engine 5 and make games as a whole.`,
        year: "2024"
    }
]

document.getElementById("grid").innerHTML = projects.map(project => `<div class="cell" data-tags="${project.tags}">
            <div class="cell-thumb parallaxed">
                <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt=""/>
                </a>
                <div class="cell-thumb-overlay"></div>
                <span class="cell-thumb-text" style="text-transform: none">${project.description}</span>
            </div>
            <div class="cell-foot">
                <div class="cell-meta">
                    <span class="cell-year">${project.year}</span>
                    ${project.tags.map(t => `<span class="tag">${TagToTagLabelMap.get(t)}</span>`).join("")}
                </div>
                <h3 class="cell-title">${project.title}</h3>
            </div>
        </div>`).join("")

const filters = document.querySelectorAll('.filter');
const cells = document.querySelectorAll('.cell');

filters.forEach(f => {
    f.addEventListener('click', () => {
        filters.forEach(x => x.classList.remove('active'));
        f.classList.add('active');

        const ActiveFilter = f.dataset.filter
        
        cells.forEach(c => {
            const tags = c.dataset.tags || '';
            const show = ActiveFilter === 'all' || tags.includes(ActiveFilter);
            c.style.visibility = show ? 'visible' : 'hidden';
            c.style.display = show ? 'flex' : 'none';
            c.style.opacity = show ? '1' : '0';
        });
    });
});

const images = document.querySelectorAll('.cell-thumb')

images.forEach(image => {
    image.addEventListener("mousemove", function(event) {
        ParallaxHover(event, image);
    });
})

images.forEach(image => {
    image.addEventListener("mouseleave", () => {
        image.style.transform = 'translate(0, 0)'
    })
})

function ParallaxHover(e, image) {
    const ImageRect = image.getBoundingClientRect();
    const ImageCenterX = ImageRect.left + ImageRect.width / 2;
    const ImageCenterY = ImageRect.top + ImageRect.height / 2;
    const amountMovedX = (e.clientX - ImageCenterX) * -0.05
    const amountMovedY = (e.clientY - ImageCenterY) * -0.05
    image.style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
}