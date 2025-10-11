export const linkValidators: Record<string, RegExp> = {
  GitHub:
    /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\/?$/,

  "Frontend Mentor":
    /^https?:\/\/(www\.)?frontendmentor\.io\/profile\/[a-zA-Z0-9_-]+\/?$/,

  Twitter: /^https?:\/\/(www\.)?(twitter|x)\.com\/[a-zA-Z0-9_]{1,15}\/?$/,

  LinkedIn: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{3,100}\/?$/,

  YouTube:
    /^https?:\/\/(www\.)?youtube\.com\/((@[a-zA-Z0-9._-]+)|(c\/[a-zA-Z0-9_-]+)|(channel\/[a-zA-Z0-9_-]+)|(user\/[a-zA-Z0-9_-]+))\/?$/,

  Facebook: /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.]{5,}\/?$/,

  Twitch: /^https?:\/\/(www\.)?twitch\.tv\/[a-zA-Z0-9_]{4,25}\/?$/,

  "Dev.to": /^https?:\/\/(www\.)?dev\.to\/[a-zA-Z0-9_-]+\/?$/,

  Codewars: /^https?:\/\/(www\.)?codewars\.com\/users\/[a-zA-Z0-9_-]+\/?$/,

  Codepen: /^https?:\/\/(www\.)?codepen\.io\/[a-zA-Z0-9_-]+\/?$/,

  freeCodeCamp: /^https?:\/\/(www\.)?freecodecamp\.org\/[a-zA-Z0-9_-]+\/?$/,

  GitLab: /^https?:\/\/(www\.)?gitlab\.com\/[a-zA-Z0-9_.-]+\/?$/,

  Hashnode:
    /^https?:\/\/[a-zA-Z0-9_-]+\.hashnode\.dev\/?$|^https?:\/\/(www\.)?hashnode\.com\/@[a-zA-Z0-9_-]+\/?$/,

  "Stack Overflow":
    /^https?:\/\/(www\.)?stackoverflow\.com\/users\/[0-9]+\/?.*/,
};
