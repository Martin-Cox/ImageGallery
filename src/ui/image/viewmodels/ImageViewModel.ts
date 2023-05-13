import { Image } from "../models/Image";

export class ImageViewModel {
    private readonly _image: Image;

    public constructor(image: Image) {
        this._image = image;
    }

    public get name(): string {
        return this._image.name;
    }

    public get path(): string {
        return `test-protocol://getFile/${this._image.path}`;
    }
}