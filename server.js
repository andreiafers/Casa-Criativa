const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729007.png",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "O mundo está se transformando, então transforme a sua forma de programar o mundo.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729005.png",
        title: "Exercícios",
        category: "Saúde",
        description: "A vida é um movimento. Movimente seu corpo para melhorar a sua mente.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729027.png",
        title: "Meditação",
        category: "Mentalidade",
        description: "Assim como o corpo a mente busca descanso, meditar ajuda a elevar o seu autoconhecimento.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729032.png",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "A música transforma a nossa vida, nos faz sonhar, como se estivessemos vivendo uma aventura. Cante!",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729038.png",
        title: "Pintura",
        category: "Criatividade",
        description: "A arte de colorir a vida do seu jeito.",
        url: "https://www.rocketseat.com.br"
    },
    {
        img: "https://cdn-icons-png.flaticon.com/128/2729/2729048.png",
        title: "Recortes",
        category: "Criatividade",
        description: "Sempre busque ideias que liberem a sua criatividade.",
        url: "https://www.rocketseat.com.br"
    },
]

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

server.get("/", function(req, res) {
    
    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {
    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", { ideas: reversedIdeas})
})

server.listen(3000)
