import { Builder, By } from 'selenium-webdriver'


describe('Temp App', () => {
  let browser

  beforeAll(() => {
    browser = new Builder().withCapabilities({ browserName: 'chrome' }).build()
    return browser.get('http://localhost:8080/')
  })

  afterAll(() => {
    browser.quit()
  })

  it('should load Temp App', () => {
    expect.assertions(1)
    return browser.getTitle().then(title => expect(title).toBe('Temp App'))
  })

  describe('search field', () => {
    let searchField
    let iconList
    beforeAll(() => {
      searchField = browser.findElement(By.name('search'))
      iconList = browser.findElement(By.id('icon-list'))
    })

    it('should accept user input', () => {
      expect.assertions(1)
      return expect(searchField.getAttribute('name')).resolves.toBe('search')
    })

    it('should filter upon user input', () => {
      expect.assertions(1)
      searchField.sendKeys('r')
      return expect(searchField.getAttribute('value')).resolves.toContain('r')
    })
  })
})
