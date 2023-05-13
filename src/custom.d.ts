import { ImageInformation } from "./engine/FileManager";

declare global {
    interface Window {
        galleryAPI: {
            getImagesInDirectory(directory: string): Promise<ImageInformation[]>
            deleteImage(path: string): Promise<void>
        };
    }
}

export {};