document.addEventListener('DOMContentLoaded', () => {
    console.log("Script Loaded Successfully!");

    // 1. 資料定義
    const skillsData = {
        "Programming": ["Python", "C/C++", "MATLAB", "JavaScript"],
        "AI / ML": ["OpenCV", "Image Processing", "Data Analysis"],
        "Tools": ["Git", "LaTeX", "Simulation Tools", "Streamlit"]
    };

    const courseData = [
        {
            title: "半導體元件物理",
            semester: "112-1",
            skills: ["MOSFET 物理", "IV 特性"],
            description: "深入了解半導體物理基礎及微縮元件的量子效應。"
        },
        {
            title: "電子學",
            semester: "111-1",
            skills: ["類比電路分析", "回授系統"],
            description: "掌握主動元件之電路分析、頻率響應與回授系統設計。"
        }
    ];

    const projectData = [
        {
            title: "Impacts of Image Contrast on High-NA EUV Mask Optimization",
            status: "Published",
            tech: "Physics Modeling",
            desc: "發表於 EIPBN 2025 國際會議，優化 High-NA EUV 光罩結構以提升圖形預測精準度。"
        },
        {
            title: "100-Yuan Banknote Recognition System",
            status: "Completed",
            tech: "OpenCV / Python",
            desc: "開發自動化系統，透過影像處理技術識別百元鈔票特徵並進行分類。"
        }
    ];

    // 2. 渲染邏輯
    const sCont = document.getElementById('skills-container');
    const cCont = document.getElementById('courses-container');
    const pCont = document.getElementById('projects-container');

    if (sCont) {
        Object.entries(skillsData).forEach(([cat, list]) => {
            sCont.innerHTML += `
                <div class="skill-category">
                    <h3>${cat}</h3>
                    <div class="skill-tags">${list.map(s => `<span class="tag">${s}</span>`).join('')}</div>
                </div>`;
        });
    }

    if (cCont) {
        courseData.forEach(c => {
            cCont.innerHTML += `
                <div class="card">
                    <small>${c.semester}</small>
                    <h3>${c.title}</h3>
                    <p>${c.description}</p>
                    <div class="skill-tags" style="margin-top:10px">${c.skills.map(s => `<span class="tag" style="background:#f4f4f4; color:#666;">${s}</span>`).join('')}</div>
                </div>`;
        });
    }

    if (pCont) {
        projectData.forEach(p => {
            pCont.innerHTML += `
                <div class="card">
                    <span class="status-badge">${p.status}</span>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <small style="color:var(--primary-color); font-weight:600;">🛠️ ${p.tech}</small>
                </div>`;
        });
    }

    // 3. 滾動陰影效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.3)' : 'none';
    });
});