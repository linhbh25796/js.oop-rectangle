let Rectangle = function (length, width) {
    this.length = length;
    this.width= width;
    this.getLength = function () {
        return this.length;
    };
    this.getWidth = function () {
        return this.width;
    };
    this.getArea = function () {
        return length * width;
    };
    this.getCircum = function () {
        return (length + width) * 2
    }
};