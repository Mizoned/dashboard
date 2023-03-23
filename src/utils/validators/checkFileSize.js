/**
 * Проверяет размер файла на соответствие максимально допустимому размеру.
 * @param file - Объект файла, который нужно проверить.
 * @param maxSizeInMB - Максимально допустимый размер файла в мегабайтах.
 * @returns {boolean} - true, если размер файла не превышает максимальный размер, иначе false.
 */
export default function checkFileSize(file, maxSizeInMB) {
    if (!file) return true;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
};
