class Person {
	constructor(name,age){
       this._name=name;
		this._age=age;
		}
	get getName(){
		return this._name;
	}
	set setAge(age){
		return this._age=age;
	}
}

class Student extends Person {
    
	study(){

		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
// 		
		console.log(`${this._name} is teaching`)
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
