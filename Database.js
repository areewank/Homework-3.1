const express = require('express');
const app = express();
const PORT = 3000;

// เราจำลองข้อมูลของนักเรียน
const students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 21 }
];

// GET endpoint /students สำหรับส่งข้อมูลนักเรียนกลับไปยังหน้า student.html
app.get('/students', (req, res) => {
    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.post("/students", async (req, res) => {
    // สงขอมูลผาน body-parser (Middleware)
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;
    const connection = await dbConn
    const rows = await connection.query("insert into students (name,age,phone,email) values('"+name+"','"+age+"',"+phone+",'"+email+"')")
    res.status(201).send(rows)
   })
   res.send("คุณได้ทำการเพิ่มข้อมูลเรียบร้อยแล้ว");