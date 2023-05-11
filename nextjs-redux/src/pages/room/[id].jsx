import Layout from '../../components/layout/Layout';

import { getRoomDetails } from '../../../redux/actions/roomActions';
import { wrapper } from '../../../redux/store';
import RoomDetail from './../../components/room/RoomDetail';

export default function RoomDetailsPage() {
    return (
        <Layout>
            <RoomDetail />
        </Layout>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    await store.dispatch(getRoomDetails(req, params.id))
})