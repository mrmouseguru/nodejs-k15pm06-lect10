import Student from "./student.js";

export default class App {
  constructor() {
   // this._onClick = this._onClick.bind(this);
    this._onClickBetter = this._onClickBetter.bind(this);


    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
  }

  async _onClickBetter(event) {
    // let res = await fetch("myfile.txt");
    // let text = await res.text();
    // let res2 = await fetch("person.json");
    // let obj = await res2.json();
    // let s = `${text}\n${obj.givenName} ${obj.surname}`;
    let res = await fetch("/api/text");//return promise + response
    let text = await res.text();//return promise + text

    let res2 = await fetch("/api/students/nkishnani");//return promise + response
    let obj = await res2.json();//return promise + json 

    console.log(obj);

    let s = `${text}\n${obj.givenName} ${obj.surname}`;

    document.querySelector("#results").textContent = s;

    let res3 = await fetch("/api/students/mchang");
    let obj3 = await res3.json();
    console.log(obj3);

    let student = new Student(obj3);
    console.log(student);

    let student2 = await Student.load("knazir");
    console.log(student2);

    let courses = await student2.listCourses();
    console.log(courses);
  }
}
