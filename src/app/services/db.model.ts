export class Reviews {
  id: number;
  name: string;
  rev: string;
}

export class Users {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export class Courses {
  id: number;
  sub: string;
  image: string;
  header: string;
  descr: string;
  color: string;
}

export class Student {
  id: number;
  firstname: string;
  lastname: string;
  telNum: string;
  course: string;
}
