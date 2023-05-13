import { action, computed, makeObservable, observable } from "mobx";
import { Image } from "./Image";

export class Images {
    @observable
    private _directory: string;

    @observable
    private _updateTime: string;

    @observable
    private _images: Image[] = [];

    @observable
    private _index: number = 0;

    public constructor() {
        makeObservable(this);
    }

    @computed
    public get updateTime(): string {
        return this._updateTime;
    }

    @computed
    public get images(): Image[] {
        return this._images;
    }

    @computed
    public get index(): number {
        return this._index;
    }

    @action
    public setDirectory(directory: string): void {
        this._directory = directory;
        this.loadDirectoryImages();
    }

    @action
    public async loadDirectoryImages(): Promise<void> {
        const images = await window.galleryAPI.getImagesInDirectory(this._directory);

        this._images = images.map((imageInformation) => new Image(imageInformation.filename, imageInformation.path));
        this._updateTime = new Date().toISOString();
    }

    @action
    public async deleteCurrentImage(): Promise<void> {
        const image = this._images[this._index];

        if (!image) {
            return;
        }

        await window.galleryAPI.deleteImage(image.path);
        await this.loadDirectoryImages();

        if (this._index > this._images.length - 1) {
            this.previousImage();
        }
    }

    @action
    public nextImage(): void {
        let nextIndex = this._index + 1;

        if (nextIndex > this._images.length - 1) {
            nextIndex = 0;
        }

        this._index = nextIndex;
    }

    @action
    public previousImage(): void {
        let previousIndex = this._index - 1;

        if (previousIndex < 0) {
            previousIndex = this._images.length - 1;
        }

        this._index = previousIndex;
    }
}