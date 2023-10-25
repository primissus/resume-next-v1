import { once } from 'lodash';

const ref = { current: undefined };

console.log('mock server context')
const setDefaultValue = once((value: any) => {
    ref.current = value;
});

const useServerOnly = (defaultValue: any) => {
    setDefaultValue(defaultValue);

    const getValue = () => ref.current;

    const setValue = (value: any) => {
        ref.current = value;
    };

    return [getValue, setValue];
};

export default useServerOnly;
