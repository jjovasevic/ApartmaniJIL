import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private images: { img: string; id: number; }[];

  constructor() {
    this.images = [
      { img: "../../assets/images/0/1.jpg", id: 0 },
      { img: "../../assets/images/0/2.jpg", id: 0 },
      { img: "../../assets/images/0/3.jpg", id: 0 },
      { img: "../../assets/images/0/4.jpg", id: 0 },
      { img: "../../assets/images/0/5.jpg", id: 0 },
      { img: "../../assets/images/1/1.jpg", id: 1 },
      { img: "../../assets/images/1/2.jpg", id: 1 },
      { img: "../../assets/images/2/1.jpg", id: 2 },
      { img: "../../assets/images/2/2.jpg", id: 2 },
      { img: "../../assets/images/2/3.jpg", id: 2 },
      { img: "../../assets/images/2/4.jpg", id: 2 },
      { img: "../../assets/images/2/5.jpg", id: 2 },
      { img: "../../assets/images/3/1.jpg", id: 3 },
      { img: "../../assets/images/3/2.jpg", id: 3 },
      { img: "../../assets/images/3/3.jpg", id: 3 },
      { img: "../../assets/images/3/4.jpg", id: 3 },
      { img: "../../assets/images/3/5.jpg", id: 3 },
      { img: "../../assets/images/3/6.jpg", id: 3 },
      { img: "../../assets/images/3/7.jpg", id: 3 },
      { img: "../../assets/images/4/1.jpg", id: 4 },
      { img: "../../assets/images/4/2.jpg", id: 4 },
      { img: "../../assets/images/4/3.jpg", id: 4 },
      { img: "../../assets/images/4/4.jpg", id: 4 },
      { img: "../../assets/images/4/5.jpg", id: 4 },
      { img: "../../assets/images/5/1.jpg", id: 5 },
      { img: "../../assets/images/5/2.jpg", id: 5 },
      { img: "../../assets/images/5/3.jpg", id: 5 },
      { img: "../../assets/images/5/4.jpg", id: 5 },
      { img: "../../assets/images/5/5.jpg", id: 5 },
      { img: "../../assets/images/5/6.jpg", id: 5 },
      { img: "../../assets/images/5/7.jpg", id: 5 }
    ];
  }

  public getAllImages() {
    return this.images;
  }

  public getImagesByCategory(id: number) {
    return this.images.filter(x => x.id === id);
  }
}
