import React from 'react';
import ApiService from './ApiService';

const ServiceContext = React.createContext ({
    apiService : new ApiService()
})

export default ServiceContext; 