import axios from "axios";
import {baseURLJson} from "../constants/urls";


const  jsonServices = axios.create({baseURL:baseURLJson});

export {
    jsonServices
}