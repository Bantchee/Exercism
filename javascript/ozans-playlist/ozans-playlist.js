// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  let set = new Set();
  let newArry = [];
  playlist.forEach((value) => set.add(value));
  set.forEach((value) => newArry.push(value));
  return newArry;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let set = new Set();
  playlist.forEach((value) => set.add(value));
  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let set = new Set();
  let newArry = [];
  playlist.forEach((value) => set.add(value));
  set.add(track);
  set.forEach((value) => newArry.push(value));
  return newArry;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let set = new Set();
  let newArry = [];
  playlist.forEach((value) => set.add(value));
  set.delete(track);
  set.forEach((value) => newArry.push(value));
  return newArry;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let set = new Set();
  let newArry = [];
  playlist.forEach((value) => {
    let artist = value.slice(value.indexOf('-') + 2);
    set.add(artist)
  });
  set.forEach((value) => newArry.push(value));
  return newArry;
}
