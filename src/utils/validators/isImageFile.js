/**
 * Проверяет, является ли значение типом MIME изображения.
 * @param {File} image - Объект файла изображения, который нужно проверить.
 * @returns boolean - true, если тип MIME является типом изображения, иначе false.
 */
export default function isImageFile(image) {
    if (!image) return true;
    return image.type.startsWith('image/');
};