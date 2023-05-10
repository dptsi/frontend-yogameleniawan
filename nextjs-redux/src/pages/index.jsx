import HomeComponent from '../components/HomeComponent';
import Layout from '../components/layout/Layout';

import { getRooms } from '../../redux/actions/roomActions';
import { wrapper } from '../../redux/store';

export default function Home() {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getRooms(req))
})