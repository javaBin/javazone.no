export function parseVideoId(videoUrl) {
    if (!videoUrl) {
        return undefined;
    }

    const parts = videoUrl.split('/');
    if (parts.length < 2) {
        return undefined;
    }

    return parts[parts.length - 1];
}
