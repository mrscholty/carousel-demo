export default class CarouselComponent {

    constructor() {}

    $onInit() {

        this.pictures = [
            {"pic": "/assets/1.png", "label": "1"},
            {"pic": "/assets/2.png", "label": "2"},
            {"pic": "/assets/3.png", "label": "3"},
            {"pic": "/assets/4.png", "label": "4"},
            {"pic": "/assets/5.png", "label": "5"},
            {"pic": "/assets/6.png", "label": "6"},
            {"pic": "/assets/7.png", "label": "7"},
            {"pic": "/assets/8.png", "label": "8"},
            {"pic": "/assets/9.png", "label": "9"}
        ];


        this.strip = this.pictures.slice(0, this.show || 5);
    }

    prev() {
        // find picture index of first item in strip
        let pictureIndex = this.pictures.findIndex((pictureItem) => {
            return pictureItem.label == this.strip[0].label
        });
        pictureIndex--;
        if (pictureIndex < 0) {
            pictureIndex = this.pictures.length - 1;
        }
        this.strip.pop(); // remove last item of strip
        this.strip.unshift(this.pictures[pictureIndex]); // add picture item at the beginning of the strip

    }

    next() {
        // find picture index of last item in strip
        let pictureIndex = this.pictures.findIndex((pictureItem) => {
            return pictureItem.label == this.strip[this.strip.length - 1].label
        });
        pictureIndex++;
        if (pictureIndex > this.pictures.length - 1) {
            pictureIndex = 0;
        }
        this.strip.shift(); // remove 1st element of strip
        this.strip.push(this.pictures[pictureIndex]); // add picture item at the end of strip
    }

}