import { computed, observable } from "mobx";
import { Images } from "../models/Images";
import { ImageViewModel } from "./ImageViewModel";


export class ImagesViewModel {
    private readonly _images: Images;

    public constructor(images: Images) {
        this._images = images;
    }

    @computed
    public get currentImage(): ImageViewModel | undefined {
        return this._images.currentImage ? new ImageViewModel(this._images.currentImage) : undefined
    }

    public nextImage(): void {
        this._images.nextImage();
    }

    public previousImage(): void {
        this._images.previousImage();
    }
}