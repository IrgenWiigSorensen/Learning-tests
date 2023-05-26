const googleSearch = require('./script')

// http://swapi.py4e.com/api/people

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
]

describe('googleSearch', () => {

  it('is a silly test', () => {
    expect('hello').toBe('hello')
    console.log('testtest', dbMock)
  });

  it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  })

  it('work with undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })

  it('does not return more than three matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })

})

