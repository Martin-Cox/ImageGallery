import { action, computed, observable } from "mobx";
import { Image } from "./Image";

export class Images {
    @observable
    private _images: Image[] = [];

    @observable
    private _index: number = 0;

    @computed
    public get currentImage(): Image | undefined {
        return this._images.length ? this._images[this._index] : undefined;
    }

    @action
    public async loadImagesFromDirectory(directory: string): Promise<void> {
        const images = await window.galleryAPI.getImagesInDirectory(directory);

        this._images = images.map((imageInformation) => new Image(imageInformation.filename, imageInformation.path));
    }

    @action
    public nextImage(): void {
        let nextIndex = this._index + 1;

        if (nextIndex > this._images.length) {
            nextIndex = 0;
        }

        this._index = nextIndex;
    }

    @action
    public previousImage(): void {
        let previousIndex = this._index - 1;

        if (previousIndex < 0) {
            previousIndex = this._images.length;
        }

        this._index = previousIndex;
    }
}