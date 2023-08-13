import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import PropTypes from 'prop-types'
import { useCities } from '../context/CitiesContext'
function CityList() {
  const { cities, isLoading } = useCities()

  if (isLoading) return <Spinner />

  if (!cities.length) return <Message message="add your firs city!" />

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />
      })}
    </ul>
  )
}
CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
}
export default CityList
