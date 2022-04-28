/*import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('renders props.h3 when passed', () => {
    const h3 = 'Bejelentkezés'
    const wrapper = shallowMount(Login, {
      props: { h3 }
    })
    expect(wrapper.text()).toMatch(h3)
  })
})

*/




import { shallowMount} from '@vue/test-utils'
import PatientTable from '@/components/PatientTable.vue'
import axios from 'axios'
// Mock the axios library
jest.mock('axios');
describe('Implementation Test for PatientTable.vue with Successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    const responseGet = { data:
      {
        taj: 564258753,
        username: 'kis.pal01',
        p_name: 'Kis Pál',
        p_address: 'Szeged, Móra utca 43. 6725',
        p_birthday: '1968-12-05',
        p_birthplace: 'Szeged',
        allergy: 'laktóz',
        p_password: 'kispal68',
        p_email: 'kispal69@gmail.com',
      }
    }
// Set the mock call to GET to return a successful GET response
axios.get.mockResolvedValue(responseGet)

// render the component
wrapper = shallowMount(PatientTable)
})

afterEach(() => {
jest.resetModules()
jest.clearAllMocks()
});

it('does load the patient data when a successful HTTP GET occurs', () => {
  wrapper.vm.getPatients(564258753)

  expect(axios.get).toHaveBeenCalledTimes(2)


  

})})
