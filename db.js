const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./Casa-Criativa.db')

db.serialize(function() {

    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );
    `)
    
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
`
    const values = [
        "https://cdn-icons-png.flaticon.com/128/2729/2729007.png",
        "Cursos de Programação",
        "Estudo",
        "O mundo está se transformando, então transforme a sua forma de programar o mundo.",
        "https://www.rocketseat.com.br"
    ]

    db.run(query, values, function(err) {
        if (err) return console.log(err)

        console.log(this)
    })

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    })
})
