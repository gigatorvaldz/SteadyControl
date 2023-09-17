import $api from "@/utils/http";

export default class CitizensService {

    static async getCitizens() {
        return $api.get("/citizens")
    }

}