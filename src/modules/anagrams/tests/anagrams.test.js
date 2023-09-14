import anagrams from '../anagrams';
import * as fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('anagrams', () => {
  test('can give basic anagram', () => {
    const providedWordList = [
      'dog',
      'god',
      'fresher',
      'refresh',
      'knits',
      'stink'
    ];

    const expectedWordList = [
      'dog god',
      'fresher refresh',
      'knits stink'
    ];

    expect(anagrams(providedWordList)).toEqual(expectedWordList);
  });

  test('can give basic anagram with special chars', () => {
    const providedWordList = [
      'dog!',
      '!god',
      'GE4',
      'G4E',
      'knits#',
      'st#ink'
    ];

    const expectedWordList = [
      'dog! !god',
      'GE4 G4E',
      'knits# st#ink'
    ];

    expect(anagrams(providedWordList)).toEqual(expectedWordList);
  });

  test('can give basic anagram with spaces', () => {
    const providedWordList = [
      'harold harold',
      'harlod harlod',
    ];

    const expectedWordList = [
      'harold harold harlod harlod',
    ];

    expect(anagrams(providedWordList)).toEqual(expectedWordList);
  });

  test('can give large anagram from wordlist with correct count', () => {
    const wordList = fs.readFileSync(__dirname + '/wordlist.txt', 'utf8').split('\n');

    expect(anagrams(wordList)).toHaveLength(20683);
  });
});
