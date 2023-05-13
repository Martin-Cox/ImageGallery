import { action, computed, makeObservable, observable, reaction } from "mobx";
import { Images } from "../models/Images";
import { ImageViewModel } from "./ImageViewModel";


export class ImagesViewModel {
    private readonly _images: Images;

    @observable
    private _imageViewModels: ImageViewModel[] = [];

    public constructor(images: Images) {
        makeObservable(this);

        this._images = images;

        reaction(() => this._images.updateTime, () => this._buildImageViewModels(), { fireImmediately: true });
    }

    @computed
    public get currentImage(): ImageViewModel | undefined {
        return this._imageViewModels.length ? this._imageViewModels[this._images.index] : undefined
    }

    @action
    public nextImage(): void {
        this._images.nextImage();
    }

    @action
    public previousImage(): void {
        this._images.previousImage();
    }

    @action
    public deleteCurrentImage(): void {
        //TODO: Show a confirmation dialog here
        this._images.deleteCurrentImage();
    }

    @action
    private _buildImageViewModels(): void {
        this._imageViewModels = this._images.images.map((image) => new ImageViewModel(image));
    }
}