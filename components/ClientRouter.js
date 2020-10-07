import {withRouter} from 'next/router';
import {ClientRouter as AppBridgeRouter} from '@shopify/app-bridge-react';

function ClientRouter(props) {
    const{router} = props;
    return <AppBridgeRouter history={router}/>;
};

export default withRouter(ClientRouter);