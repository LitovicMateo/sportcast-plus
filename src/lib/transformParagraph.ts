export const transformParagraph = (content: string, type: "article" | "excerpt") => {

    const paragraph = content
    .replaceAll("<p>", `<p class='${type}'>`)
    .replaceAll("<h2>", "<h2 class='subtitle'>")
    .replaceAll("<li>", "<li class='list-item'>")
    .replaceAll("<ul>", "<ul class='list'>")
    .replaceAll("<blockquote><p class='article'", '<blockquote class="quote-container"><p class="quote"')
    .replaceAll(',', ', ')
    .replaceAll(/\s+/g, ' ')
    .replaceAll("<p class='article'>&nbsp;</p>", "")

    return paragraph
}