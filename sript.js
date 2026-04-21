// DATA
const DATA = {
    audiovisual: [
        {
            id: 1,
            title: "Night City",
            category: "Music Video",
            image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
            description: "Un viatge visual a través de la nit urbana. Aquest projecte explora la solitud i la connexió en les grans metròpolis mitjançant una il·luminació neo-noir.",
            link: "#"
        },
        {
            id: 2,
            title: "The North Face",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
            description: "Campanya publicitària rodada als Pirineus. L'objectiu era transmetre la resistència dels materials en condicions extremes de fred i vent.",
            link: "#"
        },
        {
            id: 3,
            title: "Urban Pulse",
            category: "Short Film",
            image: "https://images.unsplash.com/photo-1514525253361-903e1150c95a?auto=format&fit=crop&q=80&w=800",
            description: "Curtmetratge documental sobre les subcultures de ball a la Barcelona post-industrial. Guanyador del premi a millor muntatge.",
            link: "#"
        },
        {
            id: 4,
            title: "Void Space",
            category: "Visual Art",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
            description: "Instal·lació audiovisual immersiva realitzada per al festival Sonar. Una exploració sobre el buit i la ressonància digital.",
            link: "#"
        }
    ],
    articles: [
        {
            id: 1,
            title: "La importància del silenci en el cinema",
            date: "Març 2024",
            readTime: "5 min",
            content: "El silenci no és absència de so, és una eina narrativa. En aquest article analitzo com directors com Tarkovsky o Villeneuve fan servir el buit sonor per crear tensió i introspecció.",
            pdfUrl: "#"
        },
        {
            id: 2,
            title: "Color Grading: Més enllà del Look",
            date: "Gener 2024",
            readTime: "8 min",
            content: "El color ens parla abans que els actors. Analitzem la psicologia del color en la cinematografia moderna i com afecta la percepció emocional de l'espectador.",
            pdfUrl: "#"
        },
        {
            id: 3,
            title: "Narrativa No Lineal en el 2024",
            date: "Novembre 2023",
            readTime: "4 min",
            content: "Estem perdent la paciència? Com les xarxes socials i el consum ràpid estan canviant la manera en què entenem les estructures clàssiques de plantejament, nus i desenllaç.",
            pdfUrl: "#"
        }
    ]
};

// SMOOTH SCROLL
function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// PROJECTS
function openProject(index) {
    const project = DATA.audiovisual[index];
    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectCategory').textContent = project.category;
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectDesc').textContent = project.description;
    document.getElementById('modalProjectLink').href = project.link;
    document.getElementById('projectModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = 'unset';
}

// ARTICLES
function openArticle(index) {
    const article = DATA.articles[index];
    document.getElementById('modalArticleDate').textContent = `${article.date} — ${article.readTime} lectura`;
    document.getElementById('modalArticleTitle').textContent = article.title;
    document.getElementById('modalArticleContent').textContent = article.content;
    document.getElementById('modalArticlePDF').href = article.pdfUrl;
    document.getElementById('articleModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    document.getElementById('articleModal').classList.remove('open');
    document.body.style.overflow = 'unset';
}

// CV TOGGLE
function toggleCV(index) {
    const content = document.getElementById(`cv-${index}`);
    const header = content.previousElementSibling;
    content.classList.toggle('open');
    header.classList.toggle('open');
}

// CLOSE MODALS ON ESCAPE
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProject();
        closeArticle();
    }
});

// CLOSE MODALS ON CLICK OUTSIDE
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') closeProject();
});

document.getElementById('articleModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'articleModal') closeArticle();
});
