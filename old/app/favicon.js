// Loops through everything in the assets/favicons folder, and requires it.
// Probably not the best idea in the world, but it works
const faviconsContext = require.context('./assets/favicons', false, /\.*$/);
const favicons = faviconsContext.keys().map(image => faviconsContext(image));