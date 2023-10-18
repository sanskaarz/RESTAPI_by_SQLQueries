const getStudents = "SELECT * FROM students";
const getStudentsById = `SELECT * FROM students WHERE id= $1`;
const checkEmailExists = "SELECT y FROM students y WHERE y.email = $1";
const addStudent = "INSERT INTO students (name,email,age,dob)  VALUES ($1 ,$2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id = $1"
const upadteStudent ="UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    upadteStudent
};  