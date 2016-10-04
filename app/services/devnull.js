import request from "superagent";

export function getFeedbackApi(url) {
    const fixedUrl = url.replace('http:', 'https:');
    return request.get(fixedUrl)
        .set('Accept', 'application/json');
};
