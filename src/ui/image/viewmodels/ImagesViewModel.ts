import { action, computed, makeObservable, observable, reaction } from "mobx";
import { Images } from "../models/Images";
import { ImageViewModel } from "./ImageViewModel";


export class ImagesViewModel {
    private readonly _images: Images;

    @observable
    private _imageViewModels: ImageViewModel[] = [];

    @observable
    private _index: number = 0;

    public constructor(images: Images) {
        makeObservable(this);

        this._images = images;

        reaction(() => this._images.updateTime, () => this._buildImageViewModels(), { fireImmediately: true });
    }

    @computed
    public get currentImage(): ImageViewModel | undefined {
        return this._imageViewModels.length ? this._imageViewModels[this._index] : undefined
    }

    @action
    public nextImage(): void {
        let nextIndex = this._index + 1;

        if (nextIndex > this._images.images.length - 1) {
            nextIndex = 0;
        }

        this._index = nextIndex;
    }

    @action
    public previousImage(): void {
        let previousIndex = this._index - 1;

        if (previousIndex < 0) {
            previousIndex = this._images.images.length - 1;
        }

        this._index = previousIndex;
    }

    @action
    private _buildImageViewModels(): void {
        this._imageViewModels = this._images.images.map((image) => new ImageViewModel(image));
    }
}