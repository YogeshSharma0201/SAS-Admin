import simpleRestProvider from 'ra-data-simple-rest';

const restProvider = simpleRestProvider('http://104.154.154.130:3001/api');
export default (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(restProvider(type, resource, params)), 500)
    );
