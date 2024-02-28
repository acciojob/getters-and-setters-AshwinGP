class Person {
	constructor(name,age){
       this.name=name;
		this.age=age;
		}
	get getName(){
		return this.name;
	}
	set setAge(age){
		return this.age=age;
	}
}

class Student extends Person {
    
	study(){
// 		super(name)
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
// 		super(name)
		console.log(`${this.name} is teaching`)
	}}
// 	const person=new Person("John");
// 	console.log(person.getName);
// 	const student = new Student("Alice", 22);
// 	const tech=new Teacher("Bob",40);
// console.log(student.study());
// 	console.log(tech.teach());

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
