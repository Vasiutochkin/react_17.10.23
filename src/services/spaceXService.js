import axios from "axios";
import {baseURLSpaceX} from "../constants/urls";

const spaceXService = axios.create({baseURL:baseURLSpaceX});

export {
    spaceXService
}