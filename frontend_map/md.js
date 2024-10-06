import { marked } from "marked";

marked.use({
    mangle: false,
    headerIds: false
});

const markdownString = `# Hello,World

This is a paragraph in *markdown*.`;

const htmlString = marked.parse(
    markdownString
);

console.log(htmlString);