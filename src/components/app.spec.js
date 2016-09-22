import App from './app'
import { shallow } from 'enzyme'

describe('App', () => {
  it('should have one child element', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
