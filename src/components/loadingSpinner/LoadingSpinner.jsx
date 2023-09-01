import {Spinner, SpinnerItem} from './LoadingSpinner.styles'

const LoadingSpinner = ()=>{
    return (
        <Spinner>
            <SpinnerItem/>
            <SpinnerItem/>
            <SpinnerItem/>
            <SpinnerItem/>
            <SpinnerItem/>
        </Spinner>
    );
}

export default LoadingSpinner;