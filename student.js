// Define the Student interface (not necessary in JS, just for reference)
console.log("Script started");

let students = [];

// Create - Add a new student
function addStudent(student) {
  students.push(student);
  console.log(`Student added:`, student);
}

// Read - Display all students
function getAllStudents() {
  console.log("All Students:");
  students.forEach((student) => console.log(student));
}

// Update - Update student by ID
function updateStudent(id, updatedStudent) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedStudent };
    console.log(`Student with ID ${id} updated.`);
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// Delete - Remove student by ID
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    const removed = students.splice(index, 1);
    console.log(`Deleted student:`, removed[0]);
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// Example usage
addStudent({ id: 1, name: "Alice", age: 20, course: "Mathematics" });
addStudent({ id: 2, name: "Bob", age: 22, course: "Physics" });

getAllStudents();

updateStudent(2, { name: "Robert", course: "Astronomy" });

deleteStudent(1);

getAllStudents();
