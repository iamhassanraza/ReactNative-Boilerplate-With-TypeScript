import {
    CommonActions,
    createNavigationContainerRef,
    StackActions
} from '@react-navigation/native';


export const navigationRef = createNavigationContainerRef();

const navigate = (name: any, params?: any) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.navigate({
                name,
                params,
            }),
        );
    }
};


const navigateAndReset = (routes = [], index = 0) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes,
            }),
        );
    }
};

const navigateAndSimpleReset = (name: any, index = 0) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index,
                routes: [{ name }],
            }),
        );
    }
};


const push = (name: any, params: any) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(name, params));

    }
}

const goBack = () => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack());
    }
}


const pop = (count: number) => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.pop(count));
    }
}

export default {
    navigate,
    goBack,
    push,
    navigateAndReset,
    navigateAndSimpleReset,
    pop
};
