export default class Student {
  constructor(data) {
    Object.assign(this, data);
  }

  static async  load(id){
    let res = await fetch(`/api/students/${id}`);//return promise
    let data = await res.json();

    return new Student(data);

  }

  async listCourses(){
    let res = await fetch("/api/students/mchang/courses");
    let json = await res.json();
    return json.courses;
  }
}
