import $api from "@/utils/http";

export default class CitiesService {

    static async getCities() {
        return $api.get("/cities")
    }

}