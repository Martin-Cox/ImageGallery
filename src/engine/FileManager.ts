import fs from 'fs-extra'

export interface ImageInformation {
    filename: string;
    path: string;
}

export class FileManager {
    private static REGEX_IMAGE_FILE_EXTENSION = /.(png|jpg|jpeg|gif|webm)$/;

    public static async getImagesInDirectory(directory: string): Promise<ImageInformation[]> {
        return (await fs.readdir(directory, { withFileTypes: true }))
            .filter((value) => value.isFile() && this.REGEX_IMAGE_FILE_EXTENSION.test(value.name))
            .map((file) => ({
                filename: file.name,
                path: directory
             }));
    }
}