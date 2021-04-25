import {ListingService} from './services/listing';

const service = new ListingService();
try{
     void service.start();
} catch (error) {
    console.error('Error starting up the application', error);
}
