
const mockResponse = {
    data: [ 
        {
            "id": 1,
            "finished": false,
            "imgsrc": "/BookCovers/bringyourhumantowork.png",
            "bookName": "Bring Your Human To Work",
            "authorName": "Eric Keswin",
            "time": "13-minute read",
            "nReads": "1.9k reads",
            "icon1": "Image/Time.png",
            "icon2": "Image/Person.png"
        },
      ]
    

};
export default {
    patch: jest.fn().mockResolvedValue(mockResponse),
    get: jest.fn().mockResolvedValue(mockResponse)
}