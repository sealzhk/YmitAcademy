export class Founders {
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }
}

export class Cards {
  image: string;
  url: string;

  constructor(image: string, url: string) {
    this.image = image;
    this.url = url;
  }
}

export class Courses {
  sub: string;
  image: string;
  header: string;
  descr: string;
  color: string;

  constructor(sub: string, image: string, header: string, descr: string, color: string) {
    this.sub = sub;
    this.image = image;
    this.header = header;
    this.descr = descr;
    this.color = color;
  }
}

export class Images {
  image: string;

  constructor(image: string) {
    this.image = image;
  }
}

export class Review {
  name: string;
  review: string;

  constructor(name: string, review: string) {
    this.name = name;
    this.review = review;
  }
}
