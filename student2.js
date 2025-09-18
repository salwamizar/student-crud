const express = require('express');
const bodyParser= require('body-parser');

const app = express();
app.use(bodyParser.json());

var students = [
    {
        id: 1,
        name:"Dina",
        nis:12345,
        no_hp:"08912345678",
        email:"dinapunya@gmail.com",
        kelas:"12 MIPA A",
        nilai:[
            90,
            80
        ]
    },
    {
        id: 2,
        name:"Nabil",
        nis:12346,
        no_hp:"08923456789",
        email:"nabil@gmail.com",
        kelas:"12 MIPA A",
        nilai:86,
    }
]

console.log(students[0].email)
console.log(students[0].nilai[1])

// GET method, 
app.get('/', (req,res) => {
    res.send('Selamat datang! Berikut data siswa kelas 12 MIPA A')
});

// POST method
app.post('/students', (req, res) => {
    const { name, nis, no_hp, email, kelas, nilai } = req.body;
    // cek apakah kolomnya sudah terisi
    if (!name || !nis || !no_hp || !email || !kelas || !nilai ){
        return res.status(400).json({
            error: true,
            message: 'Pastikan semua kolom sudah terisi!'
        });
    }

    // cek nis udah ada atau belum
    const studentnis = students.find(i => i.nis === nis);
    if(studentnis) {
        return res.status(400).json({
            error: true,
            message: 'Maaf nis ' + nis + ' sudah ada, tidak dapat menambahkan data dengan nis yang sama'
        });
    }
    
    //cek email udah ada atau belum
    const studentemail = students.find(i => i.email === email);
    if(studentemail) {
        return res.status(400).json({
            error: true,
            message: 'Maaf email' + email + ' sudah ada, tidak dapat menambahkan data dengan email yang sama'
        });
    }

    //validasi nomor hp
    const phoneRegex = /^08\d{8,12}$/;
    if(!phoneRegex.test(no_hp)){
        return res.status(400).json({
            error:true,
            message: 'Nomor HP yang diinputkan tidak valid, harus dimulai dengan 08 dan panjang 10-14 digit',
            field: "no_hp"
        });
    }

    const newStudent = { 
        id: students.length + 1, 
        name,
        nis, //dikasih parseInt biar konsisten integer
        no_hp,
        email,
        kelas,
        nilai: parseInt(nilai)
    };

    //jika filtering selesai baru bisa push data
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const student = students.find(i => i.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Data not found');
    res.json(student);
});

// PUT method
app.put('/students/:id', (req, res) => {
    const student = students.find(i => i.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Data not found');

    /* student.name = req.body.name;
    student.nis = req.body.nis;
    student.email = req.body.email;
    student.no_hp = req.body.no_hp;
    student.kelas = req.body.kelas;
    student.nilai = req.body.nilai; */

    //daftar field yang boleh diupdate
    const allowedFields = ['name', 'nis', 'email', 'no_hp', 'kelas', 'nilai'];

    // loop field yang boleh diupdate pada req.body
    allowedFields.forEach(field => {
        if(req.body[field] !== undefined) {
            student[field] = req.body[field];
        }
    })
    
    res.json(student);
});

// DELETE method
app.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(i => i.id === parseInt(req.params.id));
    if(!studentIndex === -1) return res.status(404).send('Data not Found');

    const deletedStudent = students.splice(studentIndex, 1);
    res.json(deletedStudent);
});

// ini buat listen ke port 3000
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001')
    console.log(students)
})